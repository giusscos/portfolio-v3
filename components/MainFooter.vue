<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const socialLinks = ref([
    {
        id: "x",
        title: "Follow me on X",
        label: "X",
        to: "https://x.com/giusscos",
        letter: "X"
    },
    {
        id: "github",
        title: "Follow me on GitHub",
        label: "GitHub",
        to: "https://github.com/giusscos",
        letter: "G"
    },
    {
        id: "contra",
        title: "Hire me on Contra",
        label: "Contra",
        to: "https://on.contra.com/mtqLzh",
        letter: "C"
    },
    {
        id: "reddit",
        title: "Follow me on Reddit",
        label: "Reddit",
        to: "https://reddit.com/u/giusscos",
        letter: "R"
    }
]);

const footerRef = ref<HTMLElement | null>(null);
const gradientVisible = ref(false);

onMounted(() => {
  let observer: IntersectionObserver | null = null;
  if (footerRef.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gradientVisible.value = true;
          observer && observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(footerRef.value);
  }
});
</script>

<template>
    <footer class="p-2 bg-neutral-50">
        <div ref="footerRef" class="py-20 bg-black relative rounded-xl overflow-hidden">
            <!-- SVG Granular Noise Effect -->
            <svg width="0" height="0" style="position:absolute">
                <filter id="noise-filter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="2" stitchTiles="stitch"/>
                    <feColorMatrix type="saturate" values="0"/>
                </filter>
            </svg>
            <div class="absolute -inset-20 z-10 pointer-events-none">
                <div
                    :class="[
                        'w-full h-full transition-opacity duration-700'
                    ]"
                    style="filter: url(#noise-filter); opacity: 0.2;"
                ></div>
            </div>
            
            <!-- Custom Gradient Effect -->
            <div class="absolute -inset-20 z-10 pointer-events-none">
                <div :class="[
                    'footer-gradient w-full h-full transition-all duration-1000',
                    gradientVisible ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-full'
                ]"></div>
            </div>
            <div class="max-w-7xl mx-auto relative py-10">
                <div class="grid grid-cols-1 gap-8">
                    <!-- Profile, Name, and Socials Column -->
                    <div class="flex flex-col items-center gap-6">
                        <div class="flex flex-col justify-center items-center gap-0 ">
                            <div class="size-24 md:size-32">
                                <NuxtImg 
                                    format="webp" 
                                    src="/profile.png" 
                                    alt="Giuseppe Cosenza profile picture"
                                    :placeholder="100" 
                                    fit="cover" 
                                    class="size-full object-contain object-center rounded-full shrink-0" 
                                />
                            </div>
                            <div class="flex flex-col gap-0 justify-center items-center">
                                <h2 class="text-xl font-semibold text-white">Giuseppe Cosenza</h2>
                                <ul class="flex justify-center items-center gap-4 mt-2">
                                    <li v-for="link in socialLinks" :key="link.id">
                                        <NuxtLink 
                                            :to="link.to" 
                                            :title="link.title" 
                                            :aria-label="link.label"
                                            external
                                            target="_blank"
                                            class="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-amber-500 text-neutral-300 hover:text-white transition-colors duration-300 shadow-sm text-lg font-bold"
                                        >
                                            <span>{{ link.letter }}</span>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Copyright -->
                <div class="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-400">
                    <p>&copy; {{ new Date().getFullYear() }} Giuseppe Cosenza. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-gradient {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  background: radial-gradient(ellipse 100% 60% at 50% 90%, rgba(251,191,36,1) 0%, rgba(251,191,36,0.3) 30%, rgba(7, 7, 7, 0) 70%);
  filter: blur(32px);
  opacity: 1;
}
</style>