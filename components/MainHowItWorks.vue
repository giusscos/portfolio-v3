<script lang="ts" setup>
import { ref } from 'vue';
import { 
    Search,
    PenTool,
    Code,
    Rocket,
    CornerUpRight,
    CornerRightDown,
    CornerLeftUp,
    CornerDownLeft,
    ArrowDown,
    Repeat
} from 'lucide-vue-next';

const steps = ref([
    {
        id: 1,
        title: "Discovery",
        description: "Understanding your needs and goals",
        icon: Search
    },
    {
        id: 2,
        title: "Design",
        description: "Creating the perfect solution",
        icon: PenTool
    },
    {
        id: 3,
        title: "Development",
        description: "Building with modern technologies",
        icon: Code
    },
    {
        id: 4,
        title: "Delivery",
        description: "Launching your project",
        icon: Rocket
    }
]);
</script>

<template>
    <section id="how" class="py-20 px-4">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-wrap gap-2 items-center justify-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-neutral-900 whitespace-nowrap">
                    How it works
                </h2>
            </div>

            <!-- Desktop Layout -->
            <div class="hidden md:grid grid-cols-3 grid-rows-4 gap-8 items-center justify-items-center">
                <!-- Step 1: Top Left -->
                <div class="col-start-2 row-start-1 flex flex-col items-center gap-4">
                    <div class="size-16 rounded-full bg-amber-500 flex items-center justify-center">
                        <component :is="steps[0].icon" class="size-8 text-white" />
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold text-xl text-neutral-900">{{ steps[0].title }}</h3>
                        <p class="text-base text-neutral-600">{{ steps[0].description }}</p>
                    </div>
                </div>

                <!-- Step 2: Top Right -->
                <div class="col-start-3 row-start-2 flex flex-col items-center gap-4">
                    <div class="size-16 rounded-full bg-amber-500 flex items-center justify-center">
                        <component :is="steps[1].icon" class="size-8 text-white" />
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold text-xl text-neutral-900">{{ steps[1].title }}</h3>
                        <p class="text-base text-neutral-600">{{ steps[1].description }}</p>
                    </div>
                </div>

                <!-- Step 3: Bottom Left -->
                <div class="col-start-2 row-start-3 flex flex-col items-center gap-4">
                    <div class="size-16 rounded-full bg-amber-500 flex items-center justify-center">
                        <component :is="steps[2].icon" class="size-8 text-white" />
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold text-xl text-neutral-900">{{ steps[2].title }}</h3>
                        <p class="text-base text-neutral-600">{{ steps[2].description }}</p>
                    </div>
                </div>

                <!-- Step 4: Bottom Right -->
                <div class="col-start-1 row-start-2 flex flex-col items-center gap-4">
                    <div class="size-16 rounded-full bg-amber-500 flex items-center justify-center">
                        <component :is="steps[3].icon" class="size-8 text-white" />
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold text-xl text-neutral-900">{{ steps[3].title }}</h3>
                        <p class="text-base text-neutral-600">{{ steps[3].description }}</p>
                    </div>
                </div>

                <!-- Corner Arrows -->
                <CornerUpRight class="size-8 text-amber-500 col-start-1 row-start-1 self-end" />
                <CornerRightDown class="size-8 text-amber-500 col-start-3 row-start-1 self-end" />
                <CornerLeftUp class="size-8 text-amber-500 col-start-1 row-start-3 self-start" />
                <CornerDownLeft class="size-8 text-amber-500 col-start-3 row-start-3 self-start" />
            </div>

            <!-- Mobile Layout -->
            <div class="md:hidden flex flex-col items-center gap-8">
                <div v-for="(step, index) in steps" :key="step.id" class="flex flex-col items-center gap-4">
                    <div class="size-16 rounded-full bg-amber-500 flex items-center justify-center">
                        <component :is="step.icon" class="size-8 text-white" />
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold text-xl text-neutral-900">{{ step.title }}</h3>
                        <p class="text-base text-neutral-600">{{ step.description }}</p>
                    </div>
                    <div v-if="index < steps.length - 1" class="py-4">
                        <ArrowDown class="size-8 text-amber-500" />
                    </div>
                    <div v-else class="py-4">
                        <Repeat class="size-8 text-amber-500" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>