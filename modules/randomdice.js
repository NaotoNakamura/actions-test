// 1〜6のどれかをランダムに返してくれる関数
const randomDice = () => {
  return Math.floor(Math.random() * 6) + 1
}

module.exports = randomDice;
