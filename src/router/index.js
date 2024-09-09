import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: () => import("../views/Accueil.vue"),
  },
  {
    path: "/boutique",
    name: "Boutique",
    component: () => import("../views/Boutique.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); // Défilement vers le haut de la page
  next();
});

export default router;
