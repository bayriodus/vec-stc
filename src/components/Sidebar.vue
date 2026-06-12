<template>
    <aside class="sidebar border-r border-gray-200 h-screen bg-gradient-to-b from-slate-50 to-gray-100">
        <div class="flex flex-col h-full">
            <!-- User Profile Card -->
            <div
                class="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white rounded-2xl shadow-lg border border-blue-400">
                <div class="flex justify-center mb-4">
                    <img :src="userImg || '/avatar.jpg'"
                        class="w-20 h-20 object-cover rounded-full border-4 border-white shadow-lg">
                </div>
                <p class="text-center text-sm text-blue-100">Welcome</p>
                <p class="text-center font-bold">{{ username }}</p>
            </div>

            <!-- Role Badge -->
            <div class="px-4 py-3 flex justify-center">
                <span
                    class="inline-flex px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-700 border border-yellow-200 shadow-sm">
                    {{ userrole }}
                </span>
            </div>

            <!-- Navigation Menu -->
            <nav class="space-y-2 mt-4 px-4 flex-1">
                <router-link v-for="link in links" :key="link.name" :to="link.to"
                    class="text-gray-700 block px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium capitalize text-sm border-l-4 border-transparent hover:border-blue-500 shadow-sm hover:shadow-md">
                    {{ link.name }}
                </router-link>
            </nav>

            <!-- Logout Button -->
            <div class="flex items-center justify-center pb-6 px-4">
                <button type="button"
                    class="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    @click="handleLogout">
                    Logout
                </button>
            </div>
        </div>
    </aside>
</template>

<script setup>
import router from '@/router';
import { computed } from 'vue';


const userImg = localStorage.getItem('user_img')

const username = localStorage.getItem('fullname');
const userrole = localStorage.getItem('role')

const roleMenus = {
    Admin: [
        { name: 'dashboard', to: '/admin' },
        { name: 'document', to: '/admin/document' },
        { name: 'department', to: '/admin/department' },
        { name: 'usermanager', to: '/admin/usermanager' },
    ],
    User: [
        { name: 'dashboard', to: '/user' },
        { name: 'document', to: '/user/document' },
    ],
    Department: [
        { name: 'dashboard', to: '/department' },
        { name: 'document', to: '/department/document' },
        { name: 'usermanager', to: '/department/usermanager' }
    ],
}

const role = localStorage.getItem('role')
const links = computed(() => roleMenus[role] || roleMenus.User);


async function handleLogout() {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('fullname');
    localStorage.removeItem('user_img');
    alert("Logout สำเร็จ")
    router.push('/login')
}
</script>