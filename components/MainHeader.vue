<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

type MainNavLink = {
    id: string;
    title: string;
    label: string;
    to: string;
}

const links = ref<MainNavLink[]>([
    {
        id: "works",
        title: "Scroll to Works section",
        label: "Works",
        to: "#works"
    },
    {
        id: "how",
        title: "Scroll to How section",
        label: "How",
        to: "#how"
    },
    {
        id: "pricing",
        title: "Scroll to Pricing section",
        label: "Pricing",
        to: "#pricing"
    },
    {
        id: "faq",
        title: "Scroll to FAQ section",
        label: "FAQ",
        to: "#faq"
    }
])

const isMenuOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const menuItemsRef = ref<HTMLElement | null>(null)
const activeSection = ref('');

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

function handleScroll() {
  const sectionIds = links.value.map(link => link.to.replace('#', ''));
  let found = false;
  for (let i = 0; i < sectionIds.length; i++) {
    const el = document.getElementById(sectionIds[i]);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom > 80) {
        activeSection.value = sectionIds[i];
        found = true;
        break;
      }
    }
  }
  if (!found) activeSection.value = '';
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  nextTick(() => handleScroll());
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      isMenuOpen.value = false;
    }, 400);
  } else {
    isMenuOpen.value = false;
  }
}
</script>

<template>
    <header class="p-2 fixed top-0 w-full z-50">
        <h1 class="sr-only">Giuseppe Cosenza</h1>
        <!-- Desktop Navigation -->
        <nav class="hidden md:block w-fit h-16 px-4 mx-auto bg-white/80 rounded-full border border-neutral-300 backdrop-blur-xl backdrop-saturate-200 shadow">
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
                    <a
                        :href="link.to"
                        :title="link.title"
                        :aria-label="link.label"
                        @click.prevent="scrollToSection(link.to.replace('#', ''))"
                        :class="[
                          'flex items-center gap-2 transition-colors duration-300 font-medium whitespace-nowrap before:content-[\'\'] before:rounded-full before:transition-all before:duration-300 before:bg-amber-600',
                          activeSection === link.to.replace('#', '') ? 'text-amber-600 font-bold before:size-2 before:mr-2' : 'hover:text-amber-600 before:size-0 before:mr-0'
                        ]"
                    >
                        <span>{{ link.label }}</span>
                    </a>
                </li>

                <!-- <li>
                    <NuxtLink external target="_blank" to="mailto:hello@giusscos.com" title="Send an email to Giuseppe"
                        aria-label="Send an email to hello@giusscos.com"
                        class="hover:text-amber-600 font-medium transition-colors duration-500 ease-in-out whitespace-nowrap">
                        hello@giusscos.com
                    </NuxtLink>
                </li> -->

                <li>
                    <BookCallButton />
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
            class="h-fit fixed md:hidden inset-y-20 inset-x-2 p-2 bg-white/80 rounded-3xl border border-neutral-300 backdrop-blur-xl backdrop-saturate-200 shadow overflow-hidden z-50 transition-all duration-300"
            :class="isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
            @click="toggleMenu"
        >
            <nav class="h-fit py-10" @click.stop>
                <ul 
                    ref="menuItemsRef"
                    class="flex flex-col items-center gap-8 text-2xl"
                >
                    <li v-for="(link, index) in links" :key="link.id" 
                        class="transition-all duration-300"
                        :style="{
                            opacity: isMenuOpen ? 1 : 0,
                            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                            transitionDelay: isMenuOpen ? `${index * 100}ms` : `${(links.length - index - 1) * 50}ms`
                        }"
                    >
                        <a
                            :href="link.to"
                            :title="link.title"
                            :aria-label="link.label"
                            @click.prevent="scrollToSection(link.to.replace('#', ''))"
                            :class="[
                              'flex items-center gap-2 transition-colors duration-300 font-medium whitespace-nowrap before:content-[\'\'] before:rounded-full before:transition-all before:duration-300 before:bg-amber-600',
                              activeSection === link.to.replace('#', '') ? 'text-amber-600 font-bold before:size-2 before:mr-2' : 'hover:text-amber-600 before:size-0 before:mr-0'
                            ]"
                        >
                            <span>{{ link.label }}</span>
                        </a>
                    </li>

                    <!-- <li class="transition-all duration-300"
                        :style="{
                            opacity: isMenuOpen ? 1 : 0,
                            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                            transitionDelay: isMenuOpen ? `${links.length * 100}ms` : '0ms'
                        }"
                    >
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
                    </li> -->

                    <li class="transition-all duration-300"
                        :style="{
                            opacity: isMenuOpen ? 1 : 0,
                            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                            transitionDelay: isMenuOpen ? `${(links.length + 1) * 100}ms` : '0ms'
                        }"
                    >
                        <BookCallButton :onClick="toggleMenu" />
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>