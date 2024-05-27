<script setup>
import SectionOne from '~/components/body/section-one.vue';
import SectionTwo from '~/components/body/section-two.vue';
import SectionThree from '~/components/body/section-three.vue';
import SectionFour from '~/components/body/section-four.vue';

const dateNow = ref('')
dateNow.value = new Date().getFullYear()

useSeoMeta({
    title: 'Home',
    ogTitle: 'Jasa Mobile App Dev, Web Dev, Video Editor dan Sosial Media Manajemen',
    description: 'Memberikan Solusi sesuai dengan kebutuhan bisnis anda. #MakeITeasy',
    ogDescription: 'Memberikan Solusi sesuai dengan kebutuhan bisnis anda. #MakeITeasy',
    ogImage: `/ogImage-new.jpeg`,
    ogType: 'Website',
    ogLocale: 'in_ID',
    twitterCard: 'summary_large_image',
})
</script>
<template>
    <div class="relative w-screen bg-[#FFC40A]" id="home">
        <div class="bg-[#292929] rounded-t rounded-[102px]">
            <div class="absolute right-0 items-start justify-end">
                <img src="~/assets/svg/bg-logo-top.svg" class="object-cover hidden lg:block h-[40vw] opacity-80 justify-end" />
            </div>
            <div class="absolute right-0 items-start justify-end">
                    <img src="~/assets/svg/light-texture.svg" class="object-cover h-72 sm:h-72 md:h-96 lg:h-1/3 opacity-80 justify-end" />
                </div>
            <div class="relative flex items-end justify-center">
                <SectionOne />
            </div>
            <div class="relative flex items-start justify-center" id="layanan">
                <SectionTwo />
            </div>
            <div class="relative flex items-start justify-center" id="client">
                <SectionThree />
            </div>
            <div class="relative flex items-start justify-center" id="solusi">
                <SectionFour />
            </div>
            <div class="relative flex items-start justify-center py-12" id="info">
                <div class="items-center text-center space-y-4 px-8">
                    <div
                        class="text-center px-4 bg-gradient-to-t from-slate-500 to-white text-5xl font-extrabold bg-clip-text text-transparent">
                        Get Started
                    </div>
                    <div class="justify-center items-center text-center pt-8">
                        <a href="https://wa.me/17737697544?text=Saya Ingin menggunakan jasa ambil gambar"
                            class="items-center inline-flex text-white text-xs bg-[#838383] border-0 py-6 px-6 focus:outline-none hover:bg-yellow-600 rounded-full">
                            <img src="~/assets/svg/arrow-left.svg">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="flex bg-[#FFC40A] w-screen pb-16">
            <div class="flex flex-col p-4 w-screen">
                <NuxtLink class="block text-2xl font-bold" to="/#home">Beranda
                </NuxtLink>
                <NuxtLink class="block text-2xl font-bold" to="/#layanan">Layanan
                </NuxtLink>
                <NuxtLink class="block text-2xl font-bold" to="/#client">Client & Partner
                </NuxtLink>
                <NuxtLink class="block text-2xl font-bold" to="/#solusi">Solusi
                </NuxtLink>
                <NuxtLink class="block text-2xl font-bold" to="/#info">Info
                </NuxtLink>
            </div>
            <div class="flex justify-end pr-4 items-center w-screen h-full">
                    <p class="rotate-180 [writing-mode:vertical-lr] text-sm">Copyright {{ dateNow }} Ambil Gambar</p></div>
        </div>
    </div>
</template>
<style>
@import url("~/assets/style/animation.scss");
</style>