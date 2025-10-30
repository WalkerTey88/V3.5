// game.js (处理 Free Spins UI, 图片加载和状态显示)

// IMPORTANT: When running locally, change this to 'http://localhost:3000'
const API_URL = window.location.origin; 

const spinBtn = document.getElementById('spin-btn');
const messageBox = document.getElementById('message');
const reelsContainer = document.getElementById('reels-container');

// 新增 UI 元素
const creditDisplay = document.getElementById('credit-display');
const winDisplay = document.getElementById('win-display');
const fsDisplay = document.getElementById('fs-display');

// 音乐元素
const bgMusicMain = document.getElementById('bg-music'); 
const bgMusicFreeSpin = new Audio('assets/bgm-free-spin.mp3'); 
bgMusicFreeSpin.loop = true;

let currentState = {
    freeSpinsRemaining: 0,
    isFreeSpin: false,
    credit: 0,
    multiplier: 1
};

// --- 音乐控制函数 ---
function playBGM(type) {
    const mainMusic = bgMusicMain;
    const freeSpinMusic = bgMusicFreeSpin;

    if (type === 'MAIN') {
        freeSpinMusic.pause();
        freeSpinMusic.currentTime = 0;
        mainMusic.loop = true;
        mainMusic.play().catch(() => {});
    } else if (type === 'FREE_SPIN') {
        mainMusic.pause();
        mainMusic.currentTime = 0;
        freeSpinMusic.loop = true;
        freeSpinMusic.play().catch(() => {});
    }
}

function playSound(type) {
  // Sound files are: spin.wav, stop.wav, win-small.wav, win-big.wav, jingle-trigger.wav, ui-click.wav
  const audio = new Audio(`assets/${type}.wav`); 
  audio.play();
}

// --- UI 更新 ---
function updateUI(lastWin = 0) {
    // 1. 更新余额和上次中奖金额
    creditDisplay.textContent = `余额: ${currentState.credit.toFixed(2)}`;
    winDisplay.textContent = `中奖: ${lastWin.toFixed(2)}`;
    
    // 2. 更新免费旋转状态 (FS)
    if (currentState.isFreeSpin) {
        fsDisplay.textContent = `免费旋转: ${currentState.freeSpinsRemaining} 次 (x${currentState.multiplier || 3})`;
        fsDisplay.style.display = 'block';
    } else {
        fsDisplay.textContent = '';
        fsDisplay.style.display = 'none';
    }

    // 3. 确保按钮文本正确
    spinBtn.textContent = currentState.isFreeSpin ? '免费旋转' : '旋转';
    
    // 4. 确保背景音乐正确
    playBGM(currentState.isFreeSpin ? 'FREE_SPIN' : 'MAIN');
}

// --- 核心转轴和图片逻辑 ---
function createReels(reels) {
  reelsContainer.innerHTML = '';
  reels.forEach(col => {
    const column = document.createElement('div');
    column.className = 'reel';
    col.forEach(symbol => {
      const img = document.createElement('img');
      img.className = 'symbol-image';
      
      // 动态加载图片，尝试 .png 或 .jpg 格式
      const tryLoadImage = (id, extension) => {
        const path = `assets/${id}.${extension}`;
        // 使用 promise 确保图片加载成功
        return new Promise((resolve, reject) => {
          img.onload = () => resolve(path);
          img.onerror = () => reject();
          img.src = path;
        });
      };
      
      // 尝试 .png, 失败后尝试 .jpg
      tryLoadImage(symbol.id, 'png')
        .catch(() => tryLoadImage(symbol.id, 'jpg'))
        .catch(() => {
          // 如果两者都失败，使用占位符
          img.src = `https://placehold.co/100x100/333/fff?text=${symbol.id}`; 
          console.error(`无法加载符号图片: ${symbol.id}`);
        });

      column.appendChild(img);
    });
    reelsContainer.appendChild(column);
  });
}

// --- 状态获取 ---
async function fetchState() {
    try {
        const res = await fetch(`${API_URL}/api/state`);
        const data = await res.json();
        currentState = { ...data, multiplier: data.isFreeSpin ? 3 : 1 }; 
        updateUI();
        spinBtn.disabled = false; // 状态加载完成后启用按钮
        messageBox.textContent = '点击“旋转”开始游戏！';
    } catch (error) {
        console.error("无法连接到服务器或获取状态:", error);
        messageBox.textContent = '无法连接服务器。请确保 server.js 正在 http://localhost:3000 运行。';
        spinBtn.disabled = true;
    }
}


// --- 核心旋转逻辑 ---
async function spin() {
  spinBtn.disabled = true;
  
  // 确保音乐在用户交互后开始播放
  playBGM(currentState.isFreeSpin ? 'FREE_SPIN' : 'MAIN'); 

  messageBox.textContent = currentState.isFreeSpin ? '免费旋转中...' : '转动中...';
  playSound('spin');

  const res = await fetch(`${API_URL}/api/spin`, { method: 'POST' });
  const data = await res.json();
  
  if (data.error) {
    messageBox.textContent = data.error;
    spinBtn.disabled = false;
    return;
  }
  
  // 1. 更新转轴
  createReels(data.reels);
  playSound('stop');

  // 2. 更新状态
  currentState = { 
    freeSpinsRemaining: data.freeSpinsRemaining,
    isFreeSpin: data.isFreeSpin,
    credit: data.credit,
    multiplier: data.multiplier
  };
  
  // 3. 处理中奖和事件
  let winMessage = '';
  let soundToPlay = null;

  if (data.event === 'FREE_SPINS_TRIGGER') {
    playSound('jingle-trigger'); 
    winMessage = `🎉 触发 ${data.spinsAdded} 次免费旋转！`;
  } else if (data.win) {
    const multiplierText = data.multiplier > 1 ? ` (x${data.multiplier})` : '';
    winMessage = `🎉 赢得 ${data.prize.toFixed(2)} 金币！${multiplierText}`;
    soundToPlay = data.event === 'JACKPOT' ? 'win-big' : 'win-small';
  } else {
    // 扣钱后的提示
    winMessage = currentState.isFreeSpin && currentState.freeSpinsRemaining === 0 
        ? `免费旋转结束，返回主游戏。` 
        : `再试一次！ (-${data.bet} 金币)`;
  }

  // 4. 显示消息并播放声音
  messageBox.textContent = winMessage;
  if (soundToPlay) {
      playSound(soundToPlay);
  }

  // 5. 更新 UI (余额、按钮、音乐)
  updateUI(data.prize);
  
  spinBtn.disabled = false;
  
  // 6. 如果在免费旋转模式，且还有次数，自动进行下一次旋转
  if (currentState.isFreeSpin && currentState.freeSpinsRemaining > 0) {
      setTimeout(spin, 2000); 
  }
}

// --- 事件监听器 ---
spinBtn.addEventListener('click', () => {
    // 增加点击音效
    playSound('ui-click'); 
    spin();
});

// 页面加载时获取初始状态
document.addEventListener('DOMContentLoaded', fetchState);