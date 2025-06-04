<script setup lang="ts">
import { ref } from 'vue';
import { gsap } from 'gsap';

type MainNavLink = {
    id: string;
    title: string;
    label: string;
    to: string;
}

const links = ref<MainNavLink[]>([
    {
        id: "sdsd",
        title: "Navigate to Works page",
        label: "Works",
        to: "/works"
    },
    {
        id: "sssdd",
        title: "Navigate to About page",
        label: "About",
        to: "/about"
    },
    {
        id: "sdsdsd",
        title: "Navigate to Use Cases page",
        label: "Use Cases",
        to: "/use-cases"
    }
])

const isMenuOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const menuItemsRef = ref<HTMLElement | null>(null)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    
    if (isMenuOpen.value) {
        // Open menu animation
        gsap.to(menuRef.value, {
            opacity: 1,
            visibility: 'visible',
            duration: 0.3,
            ease: 'power2.out'
        })
        
        if (menuItemsRef.value) {
            gsap.fromTo(Array.from(menuItemsRef.value.children), 
                { 
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: 'power2.out'
                }
            )
        }
    } else {
        if (menuItemsRef.value) {
            gsap.to(Array.from(menuItemsRef.value.children), {
                opacity: 0,
                y: -20,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.in'
            })
        }
        
        gsap.to(menuRef.value, {
            opacity: 0,
            visibility: 'hidden',
            duration: 0.3,
            delay: 0.2,
            ease: 'power2.in'
        })
    }
}
</script>

<template>
    <header class="p-2 fixed top-0 w-full z-50">
        <h1 class="sr-only">Giuseppe Cosenza</h1>
        <!-- Desktop Navigation -->
        <nav class="hidden md:block w-fit h-16 px-4 mx-auto bg-white/50 rounded-full border border-neutral-300 backdrop-blur-sm backdrop-saturate-200 shadow">
            <ul class="w-full h-full flex gap-8 justify-center items-center">
                <li>
                    <NuxtLink to="/" title="Giuseppe Cosenza" aria-label="Giuseppe Cosenza">
                        <div class="size-10">
                            <NuxtImg format="webp" src="/profile.png" alt="Giuseppe Cosenza profile picture"
                                :placeholder="100" fit="cover" class="size-full object-contain object-center" />
                        </div>
                        <span class="sr-only">Navigate to home</span>
                    </NuxtLink>
                </li>

                <li v-for="link in links" :key="link.id">
                    <NuxtLink :to="link.to" :title="link.title" :aria-label="link.label" active-class="before:size-2"
                        class="flex items-center gap-2 hover:text-amber-600 transition-colors duration-300 font-medium whitespace-nowrap before:content-[''] before:size-0 before:rounded-full before:transition-all before:duration-300 before:bg-amber-600">
                        <span>{{ link.label }}</span>
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink external target="_blank" to="mailto:hello@giusscos.com" title="Send an email to Giuseppe"
                        aria-label="Send an email to hello@giusscos.com"
                        class="hover:text-amber-600 font-medium transition-colors duration-500 ease-in-out whitespace-nowrap">
                        hello@giusscos.com
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink external target="_blank" to="https://giusscos.it" title="Book a call with Giuseppe"
                        aria-label="Book a call"
                        class="group flex gap-2 flex-nowrap px-6 py-2 rounded-full border border-neutral-900 hover:bg-neutral-900 hover:text-white font-medium hover:shadow-md shadow-amber-600 transition duration-500 ease-in-out whitespace-nowrap">
                        Book a call
                        <LIconArrowUpRight :stroke-width="1.5"
                            class="rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </NuxtLink>
                </li>
            </ul>
        </nav>

        <!-- Mobile Navigation -->
        <div class="h-16 md:hidden flex justify-between items-center px-8 bg-white/50 rounded-full border border-neutral-300 backdrop-blur-sm backdrop-saturate-200 shadow overflow-hidden relative z-50">
            <NuxtLink to="/" title="Giuseppe Cosenza" aria-label="Giuseppe Cosenza">
                <div class="size-10">
                    <NuxtImg format="webp" src="/profile.png" alt="Giuseppe Cosenza profile picture"
                        :placeholder="100" fit="cover" class="size-full object-contain object-center" />
                </div>
                <span class="sr-only">Navigate to home</span>
            </NuxtLink>

            <button 
                @click="toggleMenu"
                class="relative p-2"
                :aria-expanded="isMenuOpen"
                aria-label="Toggle menu"
                aria-controls="mobile-menu"
            >
                <div class="w-6 h-5 relative">
                    <span 
                        class="absolute w-full h-0.5 bg-neutral-900 transition-all duration-300"
                        :class="isMenuOpen ? 'top-2 rotate-45' : 'top-1'"
                    ></span>
                    <span 
                        class="absolute w-full h-0.5 bg-neutral-900 transition-all duration-300"
                        :class="isMenuOpen ? 'top-2 -rotate-45' : 'top-3'"
                    ></span>
                </div>
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <div 
            ref="menuRef"
            id="mobile-menu"
            class="h-fit fixed inset-y-20 inset-x-2 p-2 bg-white/50 rounded-3xl border border-neutral-300 backdrop-blur-sm backdrop-saturate-200 shadow overflow-hidden z-50 opacity-0 invisible transition-all duration-300 md:hidden"
            :class="{ 'opacity-100 visible': isMenuOpen }"
            @click="toggleMenu"
        >
            <nav 
                class="h-fit py-10"
                @click.stop
            >
                <ul 
                    ref="menuItemsRef"
                    class="flex flex-col items-center gap-8 text-2xl"
                >
                    <li v-for="link in links" :key="link.id">
                        <NuxtLink 
                            :to="link.to" 
                            :title="link.title" 
                            :aria-label="link.label" 
                            active-class="before:size-2"
                            class="flex items-center gap-2 hover:text-amber-600 transition-colors duration-300 font-medium whitespace-nowrap before:content-[''] before:size-0 before:rounded-full before:transition-all before:duration-300 before:bg-amber-600"
                            @click="toggleMenu"
                        >
                            {{ link.label }}
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink 
                            external 
                            target="_blank" 
                            to="mailto:hello@giusscos.com" 
                            title="Send an email to Giuseppe"
                            aria-label="Send an email to hello@giusscos.com"
                            class="hover:text-amber-600 font-medium transition-colors duration-500 ease-in-out"
                            @click="toggleMenu"
                        >
                            hello@giusscos.com
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink 
                            external 
                            target="_blank" 
                            to="https://giusscos.it" 
                            title="Book a call with Giuseppe"
                            aria-label="Book a call"
                            class="group flex flex-nowrap gap-2 items-center px-6 py-2 rounded-full border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white font-medium hover:shadow-md shadow-amber-600 transition duration-500 ease-in-out whitespace-nowrap"
                            @click="toggleMenu"
                        >
                            Book a call
                            <LIconArrowUpRight :stroke-width="2" class="rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>