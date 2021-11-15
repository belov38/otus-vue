import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/books',
  },
  {
    path: '/book/:id',
    name: 'BookEdit',
    component: () => import(/* webpackChunkName: "Books" */ '../pages/BookEditPage.vue'),
  },
  {
    path: '/books',
    name: 'BooksList',
    component: () => import(/* webpackChunkName: "Books" */ '../pages/BooksListPage.vue'),
  },
  {
    path: '/authors',
    name: 'AuthorsList',
    component: () => import(/* webpackChunkName: "Authors" */ '../pages/AuthorsListPage.vue'),
  },
  {
    path: '/author/:id',
    name: 'AuthorEdit',
    component: () => import(/* webpackChunkName: "Authors" */ '../pages/AuthorEditPage.vue'),
  },
  {
    path: '/newauthors',
    name: 'AuthorAdd',
    component: () => import(/* webpackChunkName: "Authors" */ '../pages/AuthorAddPage.vue'),
  },
  {
    path: '/newbook',
    name: 'BookAdd',
    component: () => import(/* webpackChunkName: "Books" */ '../pages/BookAddPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
