<script setup lang="ts">
import { ref } from 'vue';

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
</script>

<template>
    <header class="p-2 fixed top-0 w-full">
        <h1 class="sr-only">Giuseppe Cosenza</h1>
        <nav
            class="w-fit h-16 px-4 mx-auto bg-white/50 rounded-full border border-neutral-300 backdrop-blur-sm backdrop-saturate-200 shadow">
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
    </header>
</template>