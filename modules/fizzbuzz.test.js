const sameCheck = require('../app');

const mockDice1 = () => {
  return 1
}

// 1と2を交互に返す関数
const alternateDice = (() => {
  let num = 2

  return () => {
    num = num === 1 ? 2 : 1
    return num
  }
})()

test('同じ数', () => {
  expect(sameCheck(mockDice1)).toBe('同じだったよ！');
});

test('違う数', () => {
  expect(sameCheck(alternateDice)).toBe('違ったよ！');
});