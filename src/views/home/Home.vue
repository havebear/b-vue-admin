<template>
  <div id="home">
    <a-layout class="layout">
      <a-layout-sider theme="light">
        <slide/>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>
          <router-view/>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Slide from './Slide'

export default {
  name: 'home',
  components: {
    Slide
  }
}
</script>

<style lang="less" scoped>
#home, .layout {
  height: 100%;
}
</style>

