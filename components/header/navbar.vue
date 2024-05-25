<template>
    <header
    class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md bg-[#D3D3D3]/50 backdrop-blur-sm rounded-full py-3 shadow md:top-6 lg:max-w-screen-lg">
    <div class="px-4">
        <div class="flex items-center justify-between">
            <div class="flex shrink-0">
                <a aria-current="page" class="flex items-center" href="/">
                    <img class="h-8 w-auto" src="~/assets/icons/logo-dark.png" alt="Ambil Gambar">
                    <p class="sr-only">PT Ambil Gambar</p>
                </a>
            </div>
            <div class="flex items-center justify-end gap-3">
                <NuxtLink class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:text-[#F8A300] hover:bg-[#f8a10039] dark:hover:text-[#F8A300]"
                    to="/#home">Beranda</NuxtLink>
                <NuxtLink class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:text-[#F8A300] hover:bg-[#f8a10039] dark:hover:text-[#F8A300]"
                href="/#layanan">Layanan</NuxtLink>
                <NuxtLink class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:text-[#F8A300] hover:bg-[#f8a10039] dark:hover:text-[#F8A300]"
                href="/#client">Client & Partner</NuxtLink>
                <NuxtLink class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:text-[#F8A300] hover:bg-[#f8a10039] dark:hover:text-[#F8A300]"
                href="/#solusi">Solution</NuxtLink>
                <NuxtLink class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:text-[#F8A300] hover:bg-[#f8a10039] dark:hover:text-[#F8A300]"
                href="/#info">Info</NuxtLink>
                <NuxtLink class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:text-[#F8A300] hover:bg-[#f8a10039] dark:hover:text-[#F8A300]"
                href="/about-us">Kontak</NuxtLink>
            </div>
        </div>
    </div>
</header>
    <!-- <div class="fixed top-3 left-16 z-50  grid grid-cols-2 gap-4 h-full">
        <img class="h-12 object-cover block" src="~/assets/svg/logo.svg" alt="Ambil Gambar">
        <div class="h-12 bg-[#D3D3D3]/50 backdrop-blur-sm rounded-[41px]">
            <div class="flex h-full max-w-lg grid-cols-5 mx-auto items-center justify-evenly">
                <NuxtLink to="/#home" type="button" class="inline-flex flex-col items-center justify-center pl-4  group whitespace-nowrap">
                    <span class="text-base text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]">Home</span>
                </NuxtLink>
                <NuxtLink to="/#layanan" type="button" class="inline-flex flex-col items-center justify-center px-4  group whitespace-nowrap">
                    <span class="text-base text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]">Layanan</span>
                </NuxtLink>
                <NuxtLink to="/#client" type="button" class="inline-flex flex-col items-center justify-center group whitespace-nowrap">
                    <span class="text-base text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]">Client & Partner</span>
                </NuxtLink>
                <NuxtLink to="/#blog" type="button" class="inline-flex flex-col items-center justify-center px-4  group whitespace-nowrap">
                    <span class="text-base text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]">Blog</span>
                </NuxtLink>
                <NuxtLink to="/#info" type="button" class="inline-flex flex-col items-center justify-center pr-4  group whitespace-nowrap">
                    <span class="text-base text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]">Info</span>
                </NuxtLink>
            </div>
        </div>
    </div> -->
    
</template>