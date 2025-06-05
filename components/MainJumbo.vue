<script setup lang="ts">
import { ref } from 'vue';

const services = ref([
    'Content delivery within 2 weeks',
    'Performance Optimization',
    'Maintenance & Support',
    'Fixed Price with 0 stress and hidden fees'
]);
</script>

<template>
    <section class="min-h-screen flex items-center justify-center px-4 py-20 md:py-32">
        <div class="max-w-4xl mx-auto text-center space-y-8">
            <h1 class="text-4xl md:text-6xl font-bold text-neutral-900">
                Crafting Digital Experiences in <span class="bg-amber-500">Weeks</span>, not months
            </h1>
            
            <p class="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                I specialize in building native iOS applications and modern web solutions using React, Vue.js and Swift. 
                Let's transform your ideas into exceptional digital products within<br><b>2 weeks</b>!
            </p>

            <div class="flex flex-col gap-2 w-fit mx-auto">
                <div v-for="(service, index) in services" :key="index" 
                    class="flex items-center gap-3 text-neutral-700 text-left leading-none">
                    <LIconBadgeCheck class="size-5 fill-amber-500 shrink-0" />
                    <span>{{ service }}</span>
                </div>
            </div>

            <NuxtLink 
                external
                target="_blank"
                to="https://giusscos.it" 
                class="group inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white font-medium hover:shadow-md shadow-amber-600 transition duration-500 ease-in-out"
            >
                Let's Work Together
                <LIconArrowUpRight class="size-5 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </NuxtLink>
            
            <NuxtLink external target="_blank" to="https://contra.com/giusscos/reviews" class="group flex flex-nowrap items-center justify-center gap-2 whitespace-nowrap">
                <span class="flex flex-nowrap gap-2 items-center justify-center whitespace-nowrap font-semibold">5/5 <LIconStar class="size-5 fill-amber-300 inline-block" /></span> <span> See what my clients say</span> <LIconArrowUpRight class="size-5 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </NuxtLink>
        </div>
    </section>
</template>