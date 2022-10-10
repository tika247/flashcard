// router.ts
import { createRouter,createWebHistory } from 'vue-router';
import Page1 from "../component/page1.vue";
import Page2 from "../component/page2.vue";

/**
 * switch top and chat page
 */
const routes = [
    { path: '/page1', name: 'page1', component: Page1, props: true },
    { path: '/page2', name: 'page2', component: Page1, props: true }
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History mode
    routes,
})

export default router;