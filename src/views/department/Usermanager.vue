<template>
    <div class="container p-4">
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">Usermanger</h1>
        </div>
        <div class="mt-3">
            <div class="card card-pad">
                <div class="flex items-center justify-between">
                    <h1 class="text-xl font-semibold">จัดการผู้ใช้งาน</h1>
                    <button type="button" class="btn-primary w-40 bg-blue-500 hover:bg-blue-400" @click="addUsers">+
                        เพิ่มผู้ใช้</button>
                </div>
                <div class="relatve overflow-x-auto rounded-lg mt-2">
                    <table class="text-sm text-left w-full">
                        <thead class="bg-gray-300">
                            <tr>
                                <th class="px-6 py-3">#ลำดับ</th>
                                <th class="px-6 py-3">รูป</th>
                                <th class="px-6 py-3">ชื่อผู้ใช้</th>
                                <th class="px-6 py-3">ชื่อนามสกุล</th>
                                <th class="px-6 py-3">แผนก</th>
                                <th class="px-6 py-3">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b hover:bg-slate-50 transition">
                                <td class="px-6 py-3">1</td>
                                <td class="px-6 py-3">
                                    <p class="">💩</p>
                                </td>
                                <td class="px-6 py-3">1</td>
                                <td class="px-6 py-3">1</td>
                                <td class="px-6 py-3">1</td>
                                <td class="px-6 py-3">
                                    <router-link to="/admin/usermanager" class="btn p-2">
                                        Edit
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="flex items-center justify-center fixed z-50 inset-0">
            <div class="bg-black/40 inset-0 absolute"></div>
            <div class="card card-pad w-[500px] z-10">
                <div class="flex items-center justify-between">
                    <h1 class="text-xl">เพิ่มผู้ใช้งาน</h1>
                    <button type="submit" class="btn-primary w-10" @click="closeModal">X</button>
                </div>
                <form action="">
                    <div class="mt-2">
                        <label for="" class="block text-gray-700 text-xs mb-1">Usermane</label>
                        <input type="text" class="input" placeholder="role" required>
                    </div>
                    <div class="mt-2">
                        <label for="" class="block text-gray-700 text-xs mb-1">Fullname</label>
                        <input type="text" class="input" placeholder="name" required>
                    </div>
                    <div class="mt-2">
                        <label for="" class="block text-gray-700 text-xs mb-1">Password</label>
                        <input type="password" class="input" placeholder="password" required>
                    </div>
                    <div class="mt-2">
                        <label for="" class="block text-gray-700 text-xs mb-1">แผนก</label>
                        <select name="" id="" class="bg-gray-100 border-2 border-gray-300 px-2 py-2 rounded-lg w-full">
                            <option selected>เลือกแผนก</option>
                            <option value="">Electronics</option>
                            <option value="">Mechanics</option>
                        </select>
                    </div>
                    <div class="mt-3 flex items-center justify-end">
                        <button type="submit" class="btn-primary w-20">ยืนยัน</button>
                        <button type="submit" class="btn-primary bg-gray-400 hover:bg-gray-300 w-20 mx-2"
                            @click="closeModal">ยกเลิก</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

function addUsers() {
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}

</script>