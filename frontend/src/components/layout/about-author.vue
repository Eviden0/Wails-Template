<template>

  <el-icon :size="40" @click="dialogVisible = true"><record></record></el-icon>
  <!-- 赛博卡片 -->
  <el-dialog v-model="dialogVisible" title="关于" width="500px" center draggable
             style="
        background: linear-gradient(135deg, #0a0a1a, #1a1a3d, #12122b);
        border: 2px solid #ff0099;
        box-shadow: 0 0 20px #ff0099, 0 0 40px #00ffff;
        color: #00ffff;
        text-shadow: 0 0 5px #ff0099, 0 0 10px #00ffff;
        border-radius: 10px;
        animation: cyberGlow 5s infinite alternate;
        z-index: 1001;
  "
  >
    <div class="about-content">
      <p>
        <strong>作者:</strong>
        <el-link type="primary" href="https://github.com/Eviden0/" target="_blank" >
          Eviden
        </el-link>
      </p>
      <el-divider />
      <p>
        <strong>项目地址:</strong>
        <el-link type="primary" href="https://github.com/Eviden0/Wails-Template" target="_blank">
          Wails-Template
        </el-link>
      </p>
      <el-divider />
      <p>
        <strong>Email:</strong>
        <el-link type="primary">1538279017@qq.com</el-link>
      </p>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import record from '@/assets/icons/record.vue';
const dialogVisible = ref(false);
</script>

<style scoped>
.about-content {
  font-size: 16px;
  line-height: 1.8;
  color: #606266;
}

.about-content strong {
  color: #303133;
}

.el-dialog {
  border-radius: 8px;
}

.el-button {
  margin: 10px 0;
}
</style>