<template>
  <div id="header">
    <div class="header-main">
        我是路由导航
    </div>
    <div class="header-left">
        <span class="header-msg">
            <a-badge count="5">
                <a-icon type="bell" />
            </a-badge>
        </span>
        <span class="header-user">
            <!-- <a-avatar size="small" icon="user" /> -->
            <span>admin</span>
        </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#header {
    display: flex;
    background-color: #fff; 
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.header-main {
    width: 0;
    flex: 1;
}
.header-msg, .header-user {
    display: inline-block;
    height: 100%;
    padding: 0 12px;
    cursor: pointer;
}
.header-user {

}
</style>
