export function asyncGetAppInfo({ commit }: any, params: IParams) {
  try {
    setTimeout(() => {
      console.log('===============getAppInfo=====================')
      console.log(params)
      console.log('===============getAppInfo=====================')
      commit('update', { appInfo: '异步获取 APP 信息' })
    }, 3000)
  } catch (error) {
    console.log('===============error=====================')
    console.log(error)
    console.log('===============error=====================')
  }
}
