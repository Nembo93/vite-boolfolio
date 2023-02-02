
import { createRouter, createWebHistory } from "vue-router";
import listProjectApp from "./components/listProjectApp.vue";
import singeProjectApp from "./pages/singleProjectApp.vue";

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "listProjectApp",
            component: listProjectApp,
          },
          {
            path: "/:slug",
            name: "singleProjectApp",
            component: singleProjectApp,
          },
    ]

})

export default router;
