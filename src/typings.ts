interface IRecord extends Record<string, any> {}

interface IParams extends IRecord {}

interface AppState {
  [propName: string]: any
}
