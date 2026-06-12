<template>
    <div class="container p-4">
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">Department</h1>
            <button type="button" class="btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                @click="openModal">
                + Add Department
            </button>
        </div>

        <div class="mt-5">
            <div class="card card-pad">
                <h2 class="text-xl font-semibold">Department manage</h2>
                <p class="text-gray-600 mt-2">เพิ่มหรือแก้ไขข้อมูลแผนกภายในระบบ</p>
            </div>
        </div>

        <div class="relative overflow-x-auto rounded-lg mt-4">
            <table class="text-sm text-left w-full bg-gray-200">
                <thead class="bg-gray-300">
                    <tr>
                        <th class="px-6 py-3">ลำดับ</th>
                        <th class="px-6 py-3">แผนก</th>
                        <th class="px-6 py-3">จัดการ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(dep) in departments" :key="dep.dep_id" class="bg-white border-b hover:bg-gray-50">
                        <td class="px-6 py-3">{{ dep.dep_id }}</td>
                        <td class="px-6 py-3">{{ dep.dep_name }}</td>
                        <td class="px-6 py-3">
                            <button type="button" class="btn px-4 py-2">ลบ</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div class="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <h3 class="text-xl font-semibold">เพิ่มแผนกใหม่</h3>
                        <p class="text-sm text-gray-500 mt-1">กรอกชื่อแผนกแล้วกดบันทึก</p>
                    </div>
                    <button type="button" class="text-gray-500 hover:text-gray-900" @click="closeModal">✕</button>
                </div>

                <form @submit.prevent="addDepart">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-gray-700 mb-2">ชื่อแผนก</label>
                            <input v-model="dep_name" type="text"
                                class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                                placeholder="กรอกชื่อแผนก" />
                        </div>
                    </div>

                    <div class="mt-6 flex justify-end gap-3">
                        <button type="button" class="btn bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                            @click="closeModal">ยกเลิก</button>
                        <button type="submit"
                            class="btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">บันทึก</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const showModal = ref(false)


function openModal() {
    resetForm()
    showModal.value = true
}

function closeModal() {
    showModal.value = false
    resetForm()
}

function resetForm() {
    dep_name.value = ''
}

const departments = ref([])
const dep_name = ref('');

onMounted(async () => {
    const token = localStorage.getItem('token')

    const res = await axios.get('/api/departments', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    departments.value = res.data
})

async function addDepart() {
    const token = localStorage.getItem('token')

    const res = await axios.post('/api/departments', {
        dep_name: dep_name.value,
    },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )

    alert(res.data.message)
    dep_name.value = ''
}

</script>