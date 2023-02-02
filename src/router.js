
import { createRouter, createWebHistory } from "vue-router";
import listProjectApp from "./components/listProjectApp.vue";

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "listProjectApp",
            component: listProjectApp,
          },
    ]

})

export default router;
