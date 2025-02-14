<script setup lang="ts">
const menuItems = [
  { name: "项目1", path: "/page1" },
  { name: "项目2", path: "/page2" },
  { name: "项目3", path: "/page3" },
];
</script>

<template>
<!--  <router-link to="/page1" class="item">项目1</router-link>-->
<!--  <router-link to="/page2" class="item">项目2</router-link>-->
<!--  <router-link to="/page3" class="item">项目3</router-link>-->
  <div>
    <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="item"
        active-class="active-item"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<style scoped>
@import './layoutStyle.css';
.item{
  color: #13b3d3; /* 字体颜色 */
  text-decoration: none; /* 去掉下划线 */
  font-size: larger; /* 字体大小 */
  font-weight: bold; /* 加粗字体 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
  letter-spacing: 0.5px; /* 增加字间距 */

  /* 添加居中样式 */
  display: flex; /* 启用 Flex 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 30px; /* 设置固定高度，确保垂直居中有效 */
}
.item:hover {
  background-color: #0a5a5a;
  color: #ffffff;
}

.active-item {
  background-color: #0a5a5a;
  color: #ffffff;
}
</style>