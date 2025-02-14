import { defineStore } from "pinia";
import {ref} from "vue";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        counter: ref(0), // 初始计数值
    }),
    actions: {
        increment() {
            this.counter++; // 增加计数器的值
        },
    },
});