import Vue from 'vue'

export function update(state: AppState, payload: IParams) {
  Object.keys(payload).forEach((key) => {
    Vue.set(state, key, payload[key])
  })
}
