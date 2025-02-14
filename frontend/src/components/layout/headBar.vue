<script setup lang="ts">
import CloseIcon from "@/assets/icons/Close.vue";
import FullScreen from "@/assets/icons/FullScreen.vue";
import MineScreen from "@/assets/icons/MineScreen.vue";
import {Quit, WindowMinimise, WindowToggleMaximise} from "../../../wailsjs/runtime";
import avatar from "@/assets/images/avator.jpg"
</script>

<template>

    <!--        logo 部分-->
    <div class="itemIcon"><el-avatar :src="avatar" shape="square"></el-avatar></div>
    <!-- 控制退出,最小化部分-->
    <div class="itemControl">
      <div><el-icon :size="30" @click="WindowMinimise"><MineScreen /></el-icon></div>
      <div><el-icon :size="30" @click="WindowToggleMaximise"><FullScreen /></el-icon></div>
      <div><el-icon :size="30" @click="Quit"><CloseIcon /></el-icon></div>
    </div>
</template>

<style scoped>
.el-header .itemIcon{
  width: 100px;
  height: 100vh;
  /*background-color: #a22492;*/
}
.el-header .itemControl{
  width: 948px;
  height: 100%;
  display: flex;
  justify-content: flex-end; /* 内容靠右对齐 */
  align-items: center; /* 垂直居中 */
}
/*控制按钮的样式*/
.el-header .itemControl >*{
  margin-right: 10px;
}
</style>