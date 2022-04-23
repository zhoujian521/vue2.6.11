export default function debounce(wait: number, immediate: boolean = false) {
  return function (target: any, key: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
    let timeout: any
    const original = descriptor.value
    if (typeof original === 'function') {
      descriptor.value = function (...args: any) {
        const input = `${key}(${args.join(',')})`
        console.log('============debounce========================')
        console.log(input)
        console.log('============debounce========================')
        timeout && clearTimeout(timeout)
        if (immediate) {
          const callNow = !timeout
          timeout = setTimeout(() => {
            timeout = null
          }, wait)

          if (callNow) {
            original.apply(this, args)
          }
        } else {
          timeout = setTimeout(() => {
            original.apply(this, args)
          }, wait)
        }
      }
    }
    return descriptor
  }
}
