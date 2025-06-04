<script lang="ts" setup>
import { ref } from 'vue';

const works = ref([
    {
        id: 1,
        title: "Project One",
        description: "A modern web application built with Vue.js and Tailwind CSS",
        image: "/works/project1.jpg",
        tags: ["Vue.js", "Tailwind CSS", "Nuxt"]
    },
    {
        id: 2,
        title: "Project Two",
        description: "iOS app for managing daily tasks and productivity",
        image: "/works/project2.jpg",
        tags: ["Swift", "iOS", "SwiftUI"]
    },
    {
        id: 3,
        title: "Project Three",
        description: "E-commerce platform with real-time inventory management",
        image: "/works/project3.jpg",
        tags: ["React", "Node.js", "MongoDB"]
    }
]);
</script>

<template>
    <section class="py-20 px-4">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-wrap gap-2 items-center justify-between mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-neutral-900 whitespace-nowrap">My recent works</h2>
                <NuxtLink 
                    to="/works" 
                    class="group flex flex-nowrap items-center gap-2 text-neutral-600 hover:text-amber-600 transition-colors duration-300 whitespace-nowrap"
                >
                    View all works
                    <LIconArrowUpRight class="size-5 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </NuxtLink>
            </div>

            <div class="relative">
                <div class="flex flex-wrap justify-center gap-6 px-4 md:px-8">
                    <div 
                        v-for="work in works" 
                        :key="work.id"
                        class="w-[320px] h-[480px] rounded-2xl bg-white border border-neutral-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div class="p-6 space-y-4">
                            <h3 class="text-xl font-semibold text-neutral-900">{{ work.title }}</h3>
                            <p class="text-neutral-600">{{ work.description }}</p>
                            <div class="flex flex-wrap gap-2">
                                <span 
                                    v-for="tag in work.tags" 
                                    :key="tag"
                                    class="px-3 py-1 text-sm bg-amber-100 text-amber-800 rounded-full"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                        <div class="relative h-1/2">
                            <NuxtImg 
                                :src="work.image" 
                                :alt="work.title"
                                class="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>