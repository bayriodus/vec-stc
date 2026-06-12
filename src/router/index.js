import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue';

// admin
import admin_index from '@/views/admin/index.vue';
import admin_Dashboard from '@/views/admin/Dashboard.vue';
import admin_Document from '@/views/admin/Document.vue';
import admin_Department from '@/views/admin/Department.vue';
import admin_Profile from '@/views/admin/Profile.vue';
import admin_Usermanager from '@/views/admin/Usermanager.vue'

// department
import department_index from '@/views/department/index.vue'
import department_Dashboard from '@/views/department/Dashboard.vue'
import department_Document from '@/views/department/Document.vue'
import department_Profile from '@/views/department/Profile.vue'
import department_Usermanager from '@/views/department/Usermanager.vue'

// user
import user_index from '@/views/user/index.vue'
import user_Dashboard from '@/views/user/Dashboard.vue';
import user_Document from '@/views/user/Document.vue';
import user_Profile from '@/views/user/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '', redirect: '/login'},
    {path: '/Login', name: {Login}, component: Login},
    {path: '/Register', name: {Register}, component: Register},
    
    {path: '/admin',
      component: admin_index,
      children: [
        {path: '', name:'admin_Dashboard', component: admin_Dashboard},
        {path: 'document', name:'admin_Document', component: admin_Document},
        {path:'department', name:'admin_Department', component: admin_Department},
        {path:'profile', name:'admin_Profile', component: admin_Profile},
        {path:'usermanager', name:'admin_Usermanager', component: admin_Usermanager},
      ]
    },

    {path: '/department',
      component: department_index,
      children: [
        {path: '', name:'department_Dashboard', component: department_Dashboard},
        {path: 'document', name:'department_Document', component: department_Document},
        {path: 'profile', name:'department_Profile', component:department_Profile},
        {path: 'usermanager', name: 'department_Usermanager', component:department_Usermanager}
      ]
    },

    {path: '/user',
      component: user_index,
      children: [
        {path: '', name: 'user_Dashboard', component: user_Dashboard},
        {path: 'document', name: 'user_Document', component: user_Document},
        {path: 'profile', name: 'user_Profile', component: user_Profile},
      ]
    }
  ],
})

export default router
