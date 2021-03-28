// Get methods
import { createRouter, createWebHistory } from 'vue-router'
// Get views
import Home from '@/views/Home.vue'
import Videos from '@/views/Videos.vue'
import Requests from '@/views/Requests.vue'

// Build routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home | VicBoomSuper',
    }
  },
  {
    path: '/vidoes',
    name: 'Videos',
    component: Videos,
    meta: {
      title: 'Vidoes | VicBoomSuper',
    }
  },
  {
    path: '/requests',
    name: 'Requests',
    component: Requests,
    meta: {
      title: 'Requests | VicBoomSuper',
    }
  },
]

// Initialize router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Idk man
router.beforeEach((to, from, next) => {
  assignPageTitles()
  // See How it Works: https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
  function assignPageTitles() {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    if (!nearestWithMeta) return next();
    nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
      tag.setAttribute('data-vue-router-controlled', '');
      return tag;
    })
      .forEach(tag => document.head.appendChild(tag));
    next();
  }

});

// Export for use in @/main.js
export default router
