<template>
  <div id="app">
    <div>{{ appInfo }}</div>
    <div>{{ greet }}</div>
    <a-button type="primary" @click="getDetial2('1000', 'a')">Button></a-button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'
import { Button } from 'ant-design-vue'

Vue.component(Button.name, Button)

import { enumerable, logger, debounce } from '@/decorater/index'

@Component({})
export default class App extends Vue {
  private params: number = 1

  @State((state) => state.app.appInfo) appInfo: any
  @Action('app/asyncGetAppInfo') asyncGetAppInfo: any
  @Getter('app/getAppInfo') getAppInfo: any
  @Mutation('app/update') updateApp: any

  // @enumerable(false)
  get greet(): number {
    return this.params
  }

  @debounce(300, true)
  @logger('event_get_detial2')
  private getDetial2(id?: string, category?: string) {
    console.log('============getDetial2========================')
    console.log(id, category)
    console.log('============getDetial2========================')
  }

  // @enumerable(false)
  mounted() {
    console.log(process.env.VUE_APP_TITLE)
    this.asyncGetAppInfo({ key: 'value' })
    // 处理 store中的 计算属性
    const appInfo = this.getAppInfo
    console.log(appInfo)
    this.updateApp({ appInfo: '同步修改' })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
