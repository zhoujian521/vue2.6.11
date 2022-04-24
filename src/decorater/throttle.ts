// 节流装饰器
export default function throttle(delay: number) {
  return function (target: any, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
    console.log('============throttle========================')
    let lastTime: number | undefined
    let timeout: any
    const original = descriptor.value
    if (typeof original === 'function') {
      descriptor.value = function (...args: any) {
        //   校验args数据类型
        //   数组 还是  对象
        // const input = `${key}(${args.join(',')})`
        const input = `${key}(${JSON.stringify(args)})`
        console.log('============throttle========================')
        console.log(input)
        console.log('============throttle========================')
        const now = Date.now()
        if (lastTime && now - lastTime < delay) {
          timeout && clearTimeout(timeout)
          timeout = setTimeout(() => {
            original.apply(this, args)
            lastTime = now
          }, delay)
        } else {
          lastTime = now
          original.apply(this, args)
        }
      }
    }
    return descriptor
  }
}
