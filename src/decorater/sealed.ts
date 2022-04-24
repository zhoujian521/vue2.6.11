export default function sealed(value: string) {
  // 这是一个装饰器工厂
  return function (target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
    console.log('============sealed========================')
    const original = descriptor.value
    if (typeof original === 'function') {
      descriptor.value = function (...args: any) {
        const input = `${key}(${args.join(',')})`
        console.log('============input========================')
        console.log(input)
        console.log('============input========================')
        //  这是装饰器
        console.log('=============这是一个装饰器=======================')
        console.log(target, value)
        console.log('do something with target and value...')
        console.log('=============这是一个装饰器=======================')
        original.apply(this, args)
      }
    }
    // do something with "target" and "value"...
    return descriptor
  }
}
