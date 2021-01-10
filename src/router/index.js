import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: routes
  // base: process.env.BASE_URL
});
// 路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !userManage.getToken()) {
//     next({
//       name: 'login',
//       query: {
//         src_url: encodeURIComponent(to.fullPath)
//       }
//     });
//   } else if (['login', 'error', 'notFound'].includes(to.name)) {
//     next();
//   } else {
//     next();
//   }
// });

export default router;
