<template>
    <div class="container p-4">
        <div class="flex items-center">
            <h1 class="text-2xl font-semibold">Document</h1>
        </div>
        <div class="mt-3">
            <div class="card card-pad">
                <form @submit.prevent="sendDocument">
                    <div class="mb-3">
                        <label for="" class="text-gray-700 block  ">ชื่อเอกสาร</label>
                        <input type="text" class="input border border-gray-400 hover:bg-gray-300"
                            v-model="form.doc_name">
                    </div>
                    <div class="mb-3">
                        <label for="" class="mb-3">เลือกผู้รับเอกสาร</label>
                        <select v-model="form.receiver_id"
                            class="bg-gray-100 border border-gray-300 px-2 py-2 rounded-xl w-full mt-3">
                            <option disabled value="">ผู้รับเอกสาร</option>
                            <option v-for="user in users" :key="user.user_id" :value="user.user_id">{{ user.fullname }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="" class="text-gray-700 block mb-3">เลือกไฟล์เอกสาร</label>
                        <input type="file" @change="handleFile" class="input border border-gray-400 hover:bg-gray-300">
                    </div>
                    <div class="flex items-center justify-center mt-4">
                        <button type="submit" class="btn w-80 text-black p-3">ยืนยัน</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])

const form = reactive({
    doc_name: '',
    receiver_id: '',
    document: null,
})

onMounted(async () => {
    try {
        const token = localStorage.getItem('token')

        const res = await axios.get('/api/users', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        users.value = res.data
    } catch (error) {
        console.error(error)
        alert(error.response?.data?.message || 'ไม่สามารถโหลดรายชื่อผู้ใช้ได้')
    }
})

function handleFile(e) {
    form.document = e.target.files[0]
}

async function sendDocument() {
    if (!form.doc_name || !form.receiver_id || !form.document) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วนและเลือกไฟล์ก่อนส่ง')
        return
    }

    try {
        const token = localStorage.getItem('token')

        const formData = new FormData()
        formData.append('doc_name', form.doc_name)
        formData.append('receiver_id', form.receiver_id)
        formData.append('document', form.document)

        const res = await axios.post('/api/documents', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        alert(res.data.message || 'ส่งเอกสารเรียบร้อย')
        form.doc_name = ''
        form.receiver_id = ''
        form.document = null
    } catch (error) {
        console.error(error)
        alert(error.response?.data?.message || 'เกิดข้อผิดพลาดในการส่งเอกสาร')
    }
}
</script>
