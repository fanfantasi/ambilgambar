<script setup>
import Navbar from '~/components/header/navbar.vue';
import NavbarMobile from '~/components/header/navbarMobile.vue';
const percent = ref(0);

const handleScroll = async () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    percent.value =   (winScroll / height) * 100;
}


onBeforeMount(async()=>{
    window.addEventListener('scroll', handleScroll);
})
onBeforeUnmount(()=>{
    window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
    <div class="items-center justify-center">
        <div class="fixed inset-x-0 top-0 z-50 h-1 bg-yellow-500" :style="`width: ${percent}%`"></div>
        <!-- Sidebar -->
        <div class="absolute bg-orange-500/80 backdrop-blur-sm  mt-16 text-white w-screen min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300 z-20"
            id="sidebar">
            <!-- Your Sidebar Content -->
            <div>
                <ul class="mt-4 mx-6">
                    <li class="mb-2">
                        <a href="#" class="flex items-center py-2 text-base font-normal text-white rounded-lg">
                            <span>Mobile Development</span>
                        </a>
                    </li>
                    <li class="mb-2"><a href="#" class="block hover:text-indigo-400">
                            <a href="#" class="flex items-center py-2 text-base font-normal text-white rounded-lg">
                                <span>Web Development</span>
                            </a>
                        </a></li>
                    <li class="mb-2"><a href="#" class="block hover:text-indigo-400"> <a href="#"
                                class="flex items-center py-2 text-base font-normal text-white rounded-lg">
                                <span>Video Editor</span>
                            </a></a></li>
                    <li class="mb-2"><a href="#" class="block hover:text-indigo-400">
                            <a href="#" class="flex items-center py-2 text-base font-normal text-white rounded-lg">
                                <span>Design Grafis/Figma</span>
                            </a>
                        </a></li>
                    <li class="mb-2"><a href="#" class="block hover:text-indigo-400">
                            <a href="#" class="flex items-center py-2 text-base font-normal text-white rounded-lg">
                                <span>Sosial Media</span>
                            </a>
                        </a></li>
                    <li class="mb-2"><a href="#" class="block hover:text-indigo-400">
                            <a href="#" class="flex items-center py-2 text-base font-normal text-white rounded-lg">
                                <span>IT Konsultan</span>
                            </a>
                        </a></li>
                </ul>
            </div>
        </div>
        
        <!-- <div>
            
        </div> -->
        <!-- <Navbar /> -->
        <div v-if="$isMobile()">
            <!-- <LogoFixTop /> -->
            <NavbarMobile />
        </div>
        <div v-else>
            <Navbar />
        </div>
        <slot />
    </div>

</template>
