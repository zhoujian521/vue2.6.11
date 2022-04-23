interface LogInfo {
  id: string
  input?: string
  output?: string
  custom?: any
}

export default function logger(id: string, callback?: (info: LogInfo) => any) {
  let logInfo: LogInfo = { id }
  return function (target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
    const original = descriptor.value
    if (typeof original === 'function') {
      descriptor.value = function (...args: any) {
        const input = `${key}(${args.join(',')})`
        logInfo = { ...logInfo, input }
        try {
          const output = original.apply(this, args)
          logInfo = { ...logInfo, output }
          if (callback) {
            const custom = callback(logInfo)
            logInfo = { ...logInfo, custom: JSON.stringify(custom) }
          }
          // 上报日志
          console.log('============logger========================')
          console.log(logInfo)
          console.log('============logger========================')
        } catch (e) {
          console.log(`error: ${e}`)
          throw e
        }
      }
    }
    return descriptor
  }
}
