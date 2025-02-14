<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
import {storeToRefs} from "pinia";
const counterStore=useCounterStore();
const {counter}=storeToRefs(counterStore);
const increment=()=>counterStore.increment()

</script>

<template>
<h1>这是page1,用pinia实现页面切换数据不丢失!</h1>
<!--  用pinia实现数据持久化-->
  <h1>{{counter}}</h1>
<el-button @click="increment">点击</el-button>

</template>

<style scoped>

</style>