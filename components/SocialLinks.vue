<script lang="ts" setup>
import { ref } from 'vue';

const socialLinks = ref([
    {
        id: "x",
        title: "Follow me on X",
        label: "X",
        to: "https://x.com/giusscos",
        letter: "X",
        icon: "LIconTwitter"
    },
    {
        id: "github",
        title: "Follow me on GitHub",
        label: "GitHub",
        to: "https://github.com/giusscos",
        letter: "G",
        icon: "LIconGithub"
    },
    {
        id: "contra",
        title: "Hire me on Contra",
        label: "Contra",
        to: "https://on.contra.com/mtqLzh",
        letter: "C",
        icon: "LIconContra"
    },
    {
        id: "reddit",
        title: "Follow me on Reddit",
        label: "Reddit",
        to: "https://reddit.com/u/giusscos",
        letter: "R",
        icon: "LIconReddit"
    }
]);
</script>

<template>
    <div class="flex items-center gap-4">
        <NuxtLink 
            v-for="link in socialLinks" 
            :key="link.id"
            :to="link.to" 
            :title="link.title" 
            :aria-label="link.label"
            external
            target="_blank"
            class="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-amber-500 text-neutral-300 hover:text-white transition-colors duration-300 shadow-sm text-lg font-bold"
        >
            <span>{{ link.letter }}</span>
        </NuxtLink>
    </div>
</template> 