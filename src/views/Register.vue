<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="">
            <div class="grid grid-cols-2 rounded-3xl shadow-xl border border-gray-100">
                <div class="flex items-end ">
                    <img class="rounded-l-3xl h-210" width="500"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEeb0OzT3eCbaOSLjCWNBsa5ZJveFhJdFiw&s"
                        alt="" srcset="">
                    <div class="absolute text-white m-8">
                        <span class="block text-3xl">ระบบส่งเอกสารออนไลน์</span>
                        <span class="block mt-2">จัดการเอกสารได้ง่าย สะดวกสบาย และรวดเร็ว</span>
                    </div>
                </div>
                <div class="p-6 m-5">
                    <span class="text-4xl">สร้างบัญชี</span>
                    <span class="block text-xl text-gray-500 mt-1"> กรุณากรอกข้อมูลเพื่อสมัครสมาชิก</span>
                    <form @submit.prevent="register" class="mt-7">
                        <div class="text-xl space-y-5">
                            <label for="" class="block">ชื่อ-นามสกุล</label>
                            <input v-model="form.fullname" class="input inp w-full" type="text"
                                placeholder="กรอกชื่อ-นามสกุล" required>

                            <label for="" class="block">ชื่อผู้ใช้งาน</label>
                            <input v-model="form.username" class="input inp w-full" type="text"
                                placeholder="กรอกชื่อผู้ใช้งาน" required>

                            <label for="" class="block">รหัสผ่าน</label>
                            <input v-model="form.password" class="password inp w-full" type="password"
                                placeholder="........." required>
                            <label for="" class="block">รูปโปรไฟล์</label>
                            <input class="input inp w-full" type="file" accept="image/*" @change="handleImage">

                            <!-- <label for="" class="block">ตำแหน่ง</label>
                            <select v-model="form.department" class="input inp w-full">
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                                <option value="Department">Department</option>
                            </select> -->
                        </div>

                        <div class="flex items-center justify-center">
                            <button class="btn hover:bg-blue-800 p-5 mt-6 w-full" type="submit">Register</button>
                        </div>
                    </form>
                    <div class="">
                        <span>มีบัญชีแล้ว? <router-link to="/Login">Login</router-link></span>
                    </div>
                    <p class="text-center text-gray-300 font-medium mt-9 ">&copy; 2026 VEC Document System </p>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import router from '@/router'

const form = reactive({
    username: '',
    password: '',
    fullname: '',
    user_img: null,
    department: '',
})

function handleImage(e) {
    form.user_img = e.target.files[0]
}

async function register() {
    try {
        const formData = new FormData()

        formData.append('username', form.username)
        formData.append('password', form.password)
        formData.append('fullname', form.fullname)
        formData.append('department', form.department || '')

        if (form.user_img) {
            formData.append('user_img', form.user_img)
        }

        const res = await axios.post('/api/register', formData)

        alert(res.data.message)
        router.push('/login')
    } catch (err) {
        alert(
            err.response?.data?.message ||
            err.response?.data?.error ||
            'สมัครสมาชิกไม่สำเร็จ'
        )
    }
}
</script>