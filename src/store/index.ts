import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import app from './app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { app },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      reducer(val: IParams) {
        return {
          app: val.app,
        }
      },
    }),
  ],
})
