import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
    path: '/create',
    name: 'create',
    component: () => import('../components/CreateComponent'),
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent'),
  },
        { path: "/", component: () => import("../views/Home.vue")},
        { path: "/about", component: () => import("../views/About Us.vue")},
        { path: "/contacts", component: () => import("../views/Contact Us.vue")},
        { path: "/register", component: () => import("../views/Register.vue")},
        { path: "/login", component: () => import("../views/Login.vue")},
        { path: "/dashboard", component: () => import("../views/Dashboard.vue")},
        { path: "/games", component: () => import("../views/Games.vue")}
    ]
});

export default router;