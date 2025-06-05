<script setup lang="ts">
defineProps<{
    text?: string;
    url?: string;
    onClick?: () => void;
}>();
</script>

<template>
    <NuxtLink 
        external 
        target="_blank" 
        :to="url || 'https://cal.com/giusscos'" 
        title="Book a call with Giuseppe"
        aria-label="Book a call"
        class="group w-fit mx-auto flex flex-nowrap gap-2 items-center px-6 py-2 rounded-full border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white font-medium hover:shadow-md shadow-amber-600 transition duration-500 ease-in-out whitespace-nowrap"
        @click="onClick"
    >
        {{ text || 'Book a call' }}
        <LIconArrowUpRight :stroke-width="2" class="rotate-45 group-hover:rotate-0 transition-transform duration-500" />
    </NuxtLink>
</template> 