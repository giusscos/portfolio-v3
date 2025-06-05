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
    <section class="min-h-screen flex items-center justify-center px-4 py-20 md:py-32 bg-white">
        <div class="max-w-7xl mx-auto w-full text-center space-y-8">
            <div class="space-y-4">
                <h2 class="text-4xl md:text-5xl font-bold text-neutral-900">
                    My recent works
                </h2>
                <p class="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                    Here are some of my latest projects. Each one represents a unique challenge and solution.
                </p>
            </div>

            <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div 
                    v-for="work in works" 
                    :key="work.id"
                    class="group bg-white border border-neutral-200 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                    <div class="relative h-48">
                        <NuxtImg 
                            :src="work.image" 
                            :alt="work.title"
                            class="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
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
                </div>
            </div>

            <NuxtLink 
                to="/works" 
                class="group inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white font-medium hover:shadow-md shadow-amber-600 transition duration-500 ease-in-out"
            >
                View all works
                <LIconArrowUpRight class="size-5 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </NuxtLink>
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