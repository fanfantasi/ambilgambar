<script setup>
const opened = ref(false);
const clickOpenSidebar = (e) => {
    if (opened.value) {
        document.getElementById('sidebar').classList.add('-translate-x-full');
        opened.value = false;
    } else {
        document.getElementById('sidebar').classList.toggle('-translate-x-full');
        opened.value = true;
    }
}

const clickCloseSidebar = () => {
    document.getElementById('sidebar').classList.add('-translate-x-full');
    opened.value = false;
}
</script>
<template>
    <div class="fixed bottom-3 left-8 right-8 z-50 w-full/.2 h-12 bg-[#D3D3D3]/50 backdrop-blur-sm rounded-[41px]">
        <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
            <NuxtLink to="/#home" type="button" class="inline-flex flex-col items-center justify-center pl-4  group">
                <svg class="w-6 h-6 text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"
                        d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                </svg>
                <!-- <span class="text-xs text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]">Home</span> -->
            </NuxtLink>
            <NuxtLink to="/#layanan" type="button" class="inline-flex flex-col items-center justify-center px-4  group">
                <svg class="w-6 h-6 text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"
                        d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z" />
                </svg>
                <!-- <span class="text-xs text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]">Layanan</span> -->
            </NuxtLink>
            <NuxtLink to="/#client" type="button" class="inline-flex flex-col items-center justify-center px-4 group">
                <svg class="w-6 h-6 text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"
                        d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8" />
                </svg>
                <!-- <span class="text-xs text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]">Client & Partner</span> -->
            </NuxtLink>
            <NuxtLink to="/#solusi" type="button" class="inline-flex flex-col items-center justify-center px-4  group">
                <svg class="w-6 h-6 text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"
                        d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z" />
                </svg>
                <!-- <span class="text-xs text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]">Blog</span> -->
            </NuxtLink>
            <NuxtLink to="/#info" type="button" class="inline-flex flex-col items-center justify-center pr-4  group">
                <svg class="w-6 h-6 text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"
                        d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <!-- <span class="text-xs text-gray-700 dark:text-gray-700 group-hover:text-[#F8A300] dark:group-hover:text-[#F8A300]">Info</span> -->
            </NuxtLink>
        </div>
    </div>
</template>