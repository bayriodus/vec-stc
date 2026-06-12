
<template>
    <div class="container p-4">
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">Profile</h1>
            <span class="badge">แก้ไขข้อมูลส่วนตัว</span>
        </div>
        <div class="mt-3">
            <div class="card card-pad">
                <form action="">
                    <div class="flex items-center justify-center mt-3">
                        <p class=" h-30 rounded-full text-7xl">💩</p>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-4">
                        <div class="mb-2">
                            <label for="" class="block text-gray-700 text-xs mb-1">Username</label>
                            <input type="text" class="input border border-gray-400">
                        </div>
                        <div class="mb-2">
                            <label for="" class="block text-gray-700 text-xs mb-1">Fullname</label>
                            <input type="text" class="input border border-gray-400">
                        </div>
                        <div class="mb-2">
                            <label for="" class=" text-gray-700 text-xs mb-1">แผนก</label>
                            <select name="" id=""
                                class="bg-gray-100 border-2 border-gray-300 px-2 py-2 rounded-lg w-full">
                                <option selected>เลือกแผนก</option>
                                <option value="">Electronics</option>
                                <option value="">Mechanics</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label for="" class="text-gray-700 m-3">เลือกรูปโปรไฟล์</label>
                            <input type="file" name="" id="" class="input">
                        </div>
                    </div>
                    <div class="flex items-center justify-center mt-4">
                        <button type="submit" class="btn-primary w-100">ยืนยัน</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>