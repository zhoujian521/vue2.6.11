<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="onClickLogo" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { sealed, throttle } from '@/decorater/index'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @sealed('Home')
  @throttle(300)
  private onClickLogo(event: Event) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  }
}
</script>
