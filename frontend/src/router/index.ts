import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import P1 from "@/views/page1.vue"
import P2 from "@/views/page2.vue"
import P3 from "@/views/page3.vue"

const routes = [
    {
        path: '/',
        component:P1
    },
    {
        path: '/page1',
        component:P1
    },
    {
        path: '/page2',
        component:P2
    },
    {
        path: '/page3',
        component:P3
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;