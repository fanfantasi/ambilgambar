<script setup>
const { baseURL } = usePayloadUrl();
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
    <div class="w-screen flex flex-col items-start justify-center">
        <section class="w-screen">
            <div class="flex flex-col mb-4 h-1/3 w-screen mx-auto max-w-screen-md lg:max-w-screen-lg items-start">
                <h3 class="text-2xl pt-8 pl-4 font-medium">
                    <img class="h-12 object-cover block lg:hidden" src="~/assets/svg/logo.svg" alt="Ambil Gambar">
                </h3>
                <div
                    class="py-16 px-6 w-2/3 font-light lg:text-4xl text-sm md:text-base [text-wrap:balance] bg-clip-text text-white">
                    Memberikan solusi sesuai dengan kebutuhan bisnis anda <span
                        class="text-yellow-400 w-2/3">#makeITeasy</span>
                    <div
                        class="absolute mt-4 lg:mx-0 border-l-2 border-[#FFC40A] px-2 items-center text-white h-[calc(theme(fontSize.sm)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.sm)*theme(lineHeight.tight))] overflow-hidden">
                        <ul
                            class="block animate-text-slide-5 text-sm lg:text-4xl md:text-sm text-left leading-tight [&_li]:block">
                            <li>Mobile <span class="text-yellow-400">Development</span></li>
                            <li>Web <span class="text-yellow-400">Development</span></li>
                            <li>Sosial Media <span class="text-yellow-400">Management</span></li>
                            <li>Content <span class="text-yellow-400">Creator</span></li>
                            <li>Video <span class="text-yellow-400">Editor</span></li>
                            <li>Design <span class="text-yellow-400">Grafis</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="absolute grid grid-cols-1 -left-10 lg:-left-32 lg:pt-20 right-4">
                <div class="flex w-screen  items-start justify-start">
                    <img src="~/assets/svg/bg-logo.svg" class="object-cover opacity-80 h-48 lg:h-[30vw]" />
                </div>
            </div>
            <div class="mx-auto mr-4 lg:mr-0 mt-12 lg:mt-44 w-1/2 lg:w-2/3 lg:h-[25vw]">
                <h2 class="text-sm mb-2 lg:text-5xl font-bold leading-none tracking-tight text-[#FFC40A]">
                    Konsultasi Gratis</h2>
                <p class="text-base lg:text-4xl leading-none font-light text-white md:text-lg">
                    Mari memulai Projek atau Produk Bersama kami
                </p>
                <p class="border-l-2 text-xs my-2 lg:text-4xl font-light italic border-[#FFC40A] text-white px-2">
                    Memberikan solusi bisnis terbaik untuk anda
                </p>
            </div>
            <div class="flex flex-col my-auto mt-20 mb-8 w-screen mx-auto">
                <div class="flex flex-col w-screen items-center px-4">
                    <p
                        class="text-center bg-gradient-to-t from-slate-500 to-white text-4xl font-extrabold bg-clip-text text-transparent">
                        Solusi digitalisasi bisnis anda
                    </p>
                    <p class="text-xs my-2 font-light px-2 text-white text-center">
                        Bingung dalam memilih jasa pembuatan aplikasi, web, video editor atau mau konsultasi IT ? 
                        Hubungi kami untuk konsultasi lebih lanjut.
                    </p>
                    <div class="justify-center items-center text-center">
                        <a href="https://wa.me/17737697544?text=Saya Ingin menggunakan jasa ambil gambar" target="__BLANK"
                            class="items-center inline-flex text-white text-xs bg-[#838383] border-0 py-1 px-6 focus:outline-none hover:bg-emerald-600 lg:rounded rounded-xl">
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>