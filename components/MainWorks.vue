<script lang="ts" setup>
import { ref } from 'vue';

const works = ref([
    {
        id: 'bonded',
        title: 'Bonded app',
        image: '/works/contra-bonded.png',
        href: 'https://giusscos.com/p/olkvl33v-self-reflection-and-social-interaction-app-development',
    },
    {
        id: 'blackswan',
        title: 'Black Swan app',
        image: '/works/contra-blackswan.png',
        href: 'https://giusscos.com/p/ZFmUbcrb-black-swan-event-categorization-app-development',
    },
    {
        id: 'byjo',
        title: 'ByJo app',
        image: '/works/contra-byjo.png',
        href: 'https://giusscos.com/p/rZYLRsN3-innovative-i-os-personal-finance-app-for-apple-store',
    },
    {
        id: 'pomotask',
        title: 'Pomotask app',
        image: '/works/contra-pomotask.png',
        href: 'https://giusscos.com/p/vqeLUOAk-pomotask-build-focus-quickly-and-reduce-distraction',
    },
    {
        id: 'foo',
        title: 'Foo app',
        image: '/works/contra-foo.png',
        href: 'https://giusscos.com/p/qULkgFm7-foo-food-and-recipe-assistant',
    }
]);

const current = ref(0);
function prev() {
    current.value = (current.value - 1 + works.value.length) % works.value.length;
}
function next() {
    current.value = (current.value + 1) % works.value.length;
}

// Dimensioni costanti per il calcolo della traslazione
const themeWidth = 160; // px, larghezza immagine (w-40)
const themeGap = 24; // px, gap tra immagini (md:gap-6)
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

            <div class="w-full flex flex-wrap justify-center gap-8 mt-12">
                <a
                    v-for="work in works"
                    :key="work.id"
                    :href="work.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full md:w-[calc(50%-1rem)] flex flex-col items-center bg-white p-6 transition-transform duration-300 hover:scale-105 focus:scale-105"
                >
                    <NuxtImg :src="work.image" :alt="work.title" class="w-full h-auto object-contain" />
                    <h3 class="mt-4 text-lg font-semibold text-neutral-900 text-center">
                        {{ work.title }}
                    </h3>
                </a>
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