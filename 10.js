// 4、实现一个 arrange 函数，可以进行时间和工作调度
// 注意，这里的 wait do  均可以无限调用
// --- 说明 ---
/**
 *
 * - 具体功能参考下列示例
 * - 在示例中调用到的方法都需要实现
 * - 下面示例中 `>` 表示在控制台中输出 (console.log)
 *
 * --- 示例 ---
 *
 * 示例一:
 * `arrange('William').execute();`
 * > William is notified
 *
 * 示例二:
 * `arrange('William').wait(5).do('commit').wait(5).do('push').execute();`
 * > William is notified
 * 等待 5s...
 * > Start to commit
 * 等待 5s
 * > Start to push
 *
 */
// 实现 wait，do，execute

function arrange(str) {
  return new Arrange(str)
}

class Arrange {
  constructor(name) {
    this.name = name
    this.cbArr = []
  }

  wait(num) {
    let step = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('%c 等待 5s... ------> ', 'color:#0f0;', '等待 5s...')
          resolve()
        }, num * 1000)
      })
    this.cbArr.push(step)
    return this
  }

  do(type) {
    let step = () =>
      new Promise((resolve, reject) => {
        if (type === 'commit') {
          console.log(
            '%c Start to commit ------> ',
            'color:#0f0;',
            'Start to commit'
          )
          resolve()
        } else if (type === 'push') {
          console.log(
            '%c Start to push ------> ',
            'color:#0f0;',
            'Start to push'
          )
          resolve()
        } else {
          reject('err type')
        }
      })
    this.cbArr.push(step)
    return this
  }

  execute() {
    this.cbArr.reduce(
      (prev, curr) => prev.then(() => curr()),
      Promise.resolve()
    )
  }
}
// 调用方式
let res = arrange('William').wait(5).do('commit').wait(5).do('push').execute()
console.log('%c res ------> ', 'color:#0f0;', res)
