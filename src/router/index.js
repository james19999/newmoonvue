import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/HomeView.vue')
    },

    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path:'/devis',
      name:'Devis',
      component:()=>import("../views/Devis.vue")
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/Contact.vue"),
    }
    ,
    {
      path:"/detail/:id",
      name: "Detail",
      component: ()=> import("../views/DetailProduct.vue"),
      props:true

    }

  ]
})

export default router
