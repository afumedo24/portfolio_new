<template>
    <nav class="sticky w-full top-4 left-0 z-10 px-4" :class="isSticky ? 'md:mx-auto' 
    : 'md:relative md:top-4 md:justify-start'">
        <div class="bg-[#1E1E1E] bg-opacity-[40%] h-[80px] py-5 px-4  md:rounded-lg flex justify-between items-center"
            :class="isOpen ? 'rounded-t-lg' : 'rounded-lg'">
            <!-- -->
            <p class="font-bold text-2xl md:text-4xl ml-2 text-red ">
                Portfolio.
            </p>
            <!-- <p class="text-sm"> {{ screenSize }} </p> -->

            <v-icon :name=" isOpen ? 'md-close-round'
                : 'hi-solid-menu'" scale=" 2.3" fill="white" @click="toggleMenu" />

            <ul class="flex-col p-5 md:flex md:flex-row md:gap-10 md:text-center md:align-center md:text-xl md:whitespace-nowrap"
                :class="[isOpen ?   'absolute w-[calc(100%-2rem)] top-[80px] left-4 bg-[#1E1E1E] bg-opacity-[40%] text-center rounded-b-lg ' :
                                    'hidden'],
                        [isClosing ? 'animate-menu-close' : 'animate-menu-open']">
                <li v-for="link in navLinks" :key="link.text"
                    class="my-12 last:mb-20 font-medium cursor-pointer text-2xl hover:text-red transition-colors duration-300">
                    {{ link.text }}
                </li>
            </ul>
        </div>
    </nav>
</template>


<script setup lang="ts">
// add custom styling for cuurent page section on the navbar
import { ref, onMounted, onUnmounted } from "vue";

// State for the sticky menu 
const isSticky = ref(false);

// State for mobile menu toggle
const isOpen = ref(false)

// State for menu animation
const isClosing = ref(false)

// to get the Screen size
const screenSize = ref(window.innerWidth)


// Navigation links array
const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'About Me', path: '/about-me' },
    { text: 'Skills', path: '/skills' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' },
]

// Function to toggle mobile menu visibility
const toggleMenu = () => {
    if (isOpen.value) {
        isClosing.value = true;
        
        setTimeout(() => {
            isOpen.value = false;
            isClosing.value = false;
        }, 300); // Match the animation duration
    } else {
        isOpen.value = true;
    }
}
const handleScroll = () => {
    isSticky.value = window.scrollY > 30; // Adjust the scroll threshold if needed
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

</script>

