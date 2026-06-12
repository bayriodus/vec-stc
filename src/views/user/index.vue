<template>
    <div class="flex">
        <Sidebar />     
        <RouterView />
    </div>
</template>

<script setup>
import router from '@/router/index.js';
import Sidebar from '@/components/Sidebar.vue';
</script>