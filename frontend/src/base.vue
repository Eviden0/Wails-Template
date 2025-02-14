<script setup lang="ts">
import HeadBar from "@/components/layout/headBar.vue"
import sideBar from "./components/layout/sideBar.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
<!--      头部-->
      <el-header class="el-header">
       <HeadBar />
      </el-header>

      <el-container>
<!--        侧边栏-->
        <el-aside class="el-aside" >
<!--          <router-link to="/page1" class="item">项目1</router-link>-->
<!--          <router-link to="/page2" class="item">项目2</router-link>-->
<!--          <router-link to="/page3" class="item">项目3</router-link>-->
          <sideBar></sideBar>
        </el-aside>

        <!--      中部展示区-->
        <el-main class="el-main"><RouterView></RouterView></el-main>
      </el-container>
    </el-container>
  </div>

</template>

<style scoped>

@import './components/layout/layoutStyle.css';

.common-layout {
  height: 100vh; /* 父容器占满视口高度 */
  display: flex;
  flex-direction: column;
}

.el-header {
  height: 40px; /* 固定头部高度 */
  background: #161f21;
}

.el-aside {
  position: fixed; /* Fix the sidebar */
  top: 40px; /* Below the header */
  left: 0;
  width: 100px; /* Fixed sidebar width */
  height: calc(100vh - 40px); /* Full height minus the header */
  background-color: #0b3333;
  overflow: auto; /* 如果侧边栏内容过多，也可以滚动 */
}

.el-main {
  margin-left: 100px; /* 与sidebar同步即可 */
  height: calc(100vh - 40px); /* Full height minus the header */
  overflow: auto; /* Enable scrolling for the main content */
  background-color: #ffffff;
  --el-main-padding:0px;
}
</style>