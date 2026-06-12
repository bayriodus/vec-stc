<template>
    <div class="container p-5">
        <div class="flex items-center">
            <h1 class="text-2xl font-semibold">Dashboard</h1>
        </div>

        <div class="mt-5">
            <div class="grid grid-cols-3 gap-5">
                <div class="card cardpad m-5 text-center">
                    <p class="text-sm m-3">ผู้ใช้ในแผนก</p>
                    <p class="text-3xl font-semibold">{{ stats.users }}</p>
                </div>
                <div class="card cardpad m-5 text-center">
                    <p class="text-sm m-3">แผนกของฉัน</p>
                    <p class="text-3xl font-semibold">{{ stats.departments }}</p>
                </div>
                <div class="card cardpad m-5 text-center">
                    <p class="text-sm m-3">เอกสารของฉัน</p>
                    <p class="text-3xl font-semibold">{{ stats.documents }}</p>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <div class="card card-pad">
                <div class="flex items-start">
                    <span class="text-xl">Usermanager</span>
                </div>
            </div>
            <div class="relative overflow-x-auto rounded-lg mt-3">
                <table class="text-sm text-left w-full">
                    <thead class="bg-gray-200">
                        <tr>
                            <th class="px-6 py-3">#ลำดับ</th>
                            <th class="px-6 py-3">ชื่อเอกสาร</th>
                            <th class="px-6 py-3">ผู้ส่ง</th>
                            <th class="px-6 py-3">สถานะ</th>
                            <th class="px-6 py-3">แผนก</th>
                            <th class="px-6 py-3">เอกสาร</th>
                        </tr>
                    </thead>
                    <tbody class=" bg-gray-300 ">
                        <tr class="" v-for="doc in documents" :key="doc.doc_id">
                            <td class="px-6 py-3">{{ doc.doc_id }}</td>
                            <td class="px-6 py-3">{{ doc.doc_name }}</td>
                            <td class="px-6 py-3">{{ doc.sender_name }}</td>
                            <td class="px-6 py-3"><span class="bg-yellow-500 rounded-lg px-2 py-1">{{ doc.doc_status
                                    }}</span></td>
                            <td class="px-6 py-3">{{ doc.department_name }}</td>
                            <td class="border p-2">
                                <a v-if="doc.doc_path" :href="`http://192.168.120.7:3000${doc.doc_path}`"
                                    target="_blank" class="text-blue-600 underline">
                                    เปิดไฟล์
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


    </div>
</template>


<script setup>
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';

const stats = reactive({
    users: 0,
    departments: 0,
    documents: 0,
})

async function getStats() {
    try {
        const token = localStorage.getItem('token')

        const res = await axios.get('/api/stats', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        stats.users = res.data.users || 0
        stats.departments = res.data.departments || 0
        stats.documents = res.data.documents || 0
    } catch (err) {
        alert(
            err.response?.data?.message ||
            err.response?.data?.error ||
            'โหลดข้อมูลไม่ถูกต้อง'
        )
    }
}

const documents = ref([])

onMounted(async () => {
    try {
        const token = localStorage.getItem('token')

        const res = await axios.get('/api/documents', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        documents.value = res.data
    } catch (err) {
        console.error(err)
        alert(err.response?.data?.message || 'ไม่สามารถโหลดเอกสารได้ในขณะนี้')
    }
})

onMounted(() => {
    getStats()
})

</script>