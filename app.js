// サイコロを2回ふって、目が同じだったかどうかをチェックする関数
const sameCheck = (dice) => {
  // サイコロをふる（1回目）
  const roll1 = dice()

  // サイコロをふる（2回目）
  const roll2 = dice()

  if (roll1 === roll2) {
    return "同じだったよ！"
  } else {
    return "違ったよ！"
  }
}

module.exports = sameCheck;
