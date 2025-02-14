<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
import {storeToRefs} from "pinia";
import {GetLongMessage} from "../../wailsjs/go/main/App";
import {ref} from "vue";
const counterStore=useCounterStore();
const {counter}=storeToRefs(counterStore);
const increment=()=>counterStore.increment()

// 定义一个响应式变量来存储消息
const message = ref<string>('');

// 获取消息的方法
const fetchMessage = async () => {
  try {
    const result = await GetLongMessage();
    message.value = result; // Assign the result to the reactive variable
  } catch (error) {
    console.error('Error fetching message:', error);
  }
};
</script>

<template>
<h1>这是page1,用pinia实现页面切换数据不丢失!</h1>
<!--  用pinia实现数据持久化-->
  <h1>{{counter}}</h1>
<el-button @click="increment">点击</el-button>
  <el-button @click="fetchMessage">点击拿信息</el-button>
  <h1>{{message}}</h1>
</template>

<style scoped>

</style>