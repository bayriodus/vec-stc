<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="">
            <div class="grid grid-cols-2 rounded-3xl shadow-xl border border-gray-100">
                <div class="flex items-end ">
                    <img class="rounded-l-3xl h-200" width="500"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEeb0OzT3eCbaOSLjCWNBsa5ZJveFhJdFiw&s"
                        alt="" srcset="">
                    <div class="absolute text-white m-8">
                        <span class="block text-3xl">ระบบส่งเอกสารออนไลน์</span>
                        <span class="block mt-2">จัดการเอกสารได้ง่าย สะดวกสะบาย และรวดเร็ว</span>
                    </div>
                </div>
                <div class="p-6 m-5">
                    <span class="text-4xl">ยินดีต้อนรับ</span>
                    <span class="block text-xl text-gray-500 mt-1"> กรุณาเข้าสู่ระบบเพื่อใช้งาน</span>
                    <form @submit.prevent="submitForm" class="mt-7">
                        <div class="text-xl space-y-5">
                            <label for="" class="block">ชื่อผู้ใช้งาน</label>
                            <input v-model="form.username" class="input inp w-full" type="text"
                                placeholder="กรอกชื่อผู้ใช้งาน" required>

                            <label for="" class="block">รหัสผ่าน</label>
                            <input v-model="form.password" class="password inp w-full" type="password"
                                placeholder="........." required>
                        </div>

                        <div class="flex items-center justify-center">
                            <button class="btn hover:bg-blue-800 p-5 mt-6 w-full" type="submit">Submit</button>
                        </div>
                    </form>
                    <div class="">
                        <span>ไม่มีบัญชี?<router-link to="/Register">สมัคร</router-link></span>
                    </div>

                    <p class="text-center text-gray-300 font-medium mt-9 ">&copy; 2026 VEC Doucument System </p>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import router from '../router';


const form = reactive({ username: '', password: '', });

async function submitForm() {
    try {
        const res = await axios.post("/api/login",
            {
                username: form.username,
                password: form.password,
            }
        );
        if (res.status === 200) {
            localStorage.setItem("role", res.data.user.role)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('username', res.data.user.username)
            localStorage.setItem('fullname', res.data.user.fullname)
            localStorage.setItem('user_img', res.data.user.img ? `${axios.defaults.baseURL}${res.data.user.img}` : '')
            alert("เข้าสู่ระบบสำเร็จ")
            switch (res.data.user.role) {
                case "Admin":
                    router.push('/admin')
                    break;
                case "User":
                    router.push('/user')
                    break;
                case "Department":
                    router.push('/department')
                    break;

                default:
                    break;
            }
        } else {
            router.push('/login')
        }
    } catch (err) {
        console.log(err)
        alert(
            err.response?.data?.message
        )
    }
}
</script>