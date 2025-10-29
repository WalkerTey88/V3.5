const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8081;

// 模拟符号数据
const SYMBOLS = [
  { id: 100, name: '樱桃', weight: 40 },
  { id: 101, name: '柠檬', weight: 30 },
  { id: 1100, name: '钻石', weight: 10 },
  { id: 1101, name: '铃铛', weight: 20 },
];

// 随机选择符号
function weightedRandom() {
  const totalWeight = SYMBOLS.reduce((sum, s) => sum + s.weight, 0);
  let rand = Math.random() * totalWeight;
  for (let s of SYMBOLS) {
    if (rand < s.weight) return s;
    rand -= s.weight;
  }
  return SYMBOLS[0];
}

app.get('/api/spin', (req, res) => {
  const reels = Array.from({ length: 5 }, () =>
    Array.from({ length: 3 }, () => weightedRandom())
  );

  // 简单的中奖判定
  const center = reels.map(r => r[1].id);
  const allSame = center.every(id => id === center[0]);

  let result = { reels, win: false, prize: 0, event: null };

  if (allSame) {
    result.win = true;
    result.prize = center[0] === 1100 ? 1000 : 100;
    result.event = center[0] === 1100 ? 'JACKPOT' : 'SMALL_WIN';
  }

  res.json(result);
});

app.listen(PORT, () => console.log(`🎰 Slot Machine running at http://localhost:${PORT}`));
