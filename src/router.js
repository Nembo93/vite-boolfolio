
import { createRouter, createWebHistory } from "vue-router";
import listProjectApp from "./components/listProjectApp.vue";
import singleProjectApp from "./pages/singleProjectApp.vue";

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "list-project",
            component: listProjectApp,
          },
          {
            path: "/:slug",
            name: "single-project",
            component: singleProjectApp,
          },
    ]

})

export default router;
