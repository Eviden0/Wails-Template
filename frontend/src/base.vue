<script setup lang="ts">
import HeadBar from "@/components/layout/headBar.vue"
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
          <router-link to="/page1" class="item">项目1</router-link>
          <router-link to="/page2" class="item">项目2</router-link>
          <router-link to="/page3" class="item">项目3</router-link>
        </el-aside>

        <!--      中部展示区-->
        <el-main class="el-main"><RouterView></RouterView></el-main>
      </el-container>
    </el-container>
  </div>

</template>

<style scoped>

@import './components/layout/layoutStyle.css';

</style>