const API_URL = window.location.origin;

const spinBtn = document.getElementById('spin-btn');
const messageBox = document.getElementById('message');
const reelsContainer = document.getElementById('reels-container');
const bgMusic = document.getElementById('bg-music');

function createReels(reels) {
  reelsContainer.innerHTML = '';
  reels.forEach(col => {
    const column = document.createElement('div');
    column.className = 'reel';
    col.forEach(symbol => {
      const img = document.createElement('img');
      img.src = `assets/${symbol.id}.jpg`;
      img.className = 'symbol-image';
      column.appendChild(img);
    });
    reelsContainer.appendChild(column);
  });
}

async function spin() {
  spinBtn.disabled = true;
  messageBox.textContent = '转动中...';
  playSound('spin');

  const res = await fetch(`${API_URL}/api/spin`);
  const data = await res.json();
  createReels(data.reels);
  playSound('stop');

  if (data.win) {
    messageBox.textContent = `🎉 赢得 ${data.prize} 金币！`;
    playSound(data.event === 'JACKPOT' ? 'win-big' : 'win-small');
  } else {
    messageBox.textContent = '再试一次！';
  }

  spinBtn.disabled = false;
}

function playSound(type) {
  const audio = new Audio(`assets/${type}.wav`);
  audio.play();
}

spinBtn.addEventListener('click', () => {
  bgMusic.play().catch(() => {});
  spin();
});
