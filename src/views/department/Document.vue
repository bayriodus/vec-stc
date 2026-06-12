<template>
    <div class="container p-4">
        <div class="flex items-center">
            <h1 class="text-2xl font-semibold">Document</h1>
        </div>
        <div class="mt-3">
            <div class="card card-pad">
                <form action="">
                    <div class="mb-2">
                        <label for="" class="bg-gray-100 text-gray-600 block mb-2">เลือกผู้รับเอกสาร</label>
                        <select name="" id="" class="bg-gray-100 border border-gray-300 px-2 py-3 rounded-xl w-full">
                            <option selected>ผู้รับเอกสาร</option>
                            <option value="">1</option>
                        </select>
                    </div> 
                    <div class="mb-2">
                        <label for="" class="text-gray-700 block mb-4 ">เลือกไฟล์เอกสาร</label>
                        <input type="file" name="" id="" class="input border border-gray-400 hover:bg-gray-300">
                    </div>
                    <div class="flex items-center justify-center mt-3">
                        <button type="submit" class="btn w-50 text-black">ยืนยัน</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>