<template>
  <div id="home">
    <a-layout class="layout">
      <a-layout-sider theme="light">
        <div class="logo"></div>
        <slide/>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="header">
          <m-header/>
        </a-layout-header>
        <a-layout-content>
          <transition name="page-transition">
            <router-view/>
          </transition>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Slide from './Slide'
import MHeader from './Header'

export default {
  name: 'home',
  components: {
    Slide,
    MHeader
  }
}
</script>

<style lang="less" scoped>
#home, .layout {
  height: 100%;
}
.logo {
  height: 64px;
}
.header {
  padding: 0;
}

.page-transition-enter {
  opacity: 0;
}
.page-transition-leave-active {
  opacity: 0;
}
.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

