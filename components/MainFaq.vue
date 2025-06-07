<script setup lang="ts">
import { ref } from 'vue'

const faqs = [
  {
    question: "What if I’m not entirely certain about what to build yet?",
    answer:
      "Since most founders face the same challenge, the first step of this service will be focusing on acquiring clarity. I’ll assist you in defining the correct Project Idea based on your goals, your target audience, and the essential aspects that require testing. What you need is a starting idea."
  },
  {
    question: "How can I ensure that the MVP will be 'good enough' to be tested?",
    answer:
      "I'll work with you to define clear goals and the minimum features needed to validate your idea. I will ensure your MVP will be testable, and ready for real users' feedback.",
  },
  {
    question: "What if I lack a technical background?",
    answer:
      "Don’t worry about your technical expertise! I’ll guide you through every step, handle the technical aspects, and explain things in a simple and understandable manner, ensuring that you are always in control throughout the all process.",
  },
  {
    question: "How much time will this take?",
    answer:
      "I understand your concern about time. Each projects are unique and have an unique timeline I will take care of the entire Project in 2 weeks or less and keep you informed throughout the process.",
  },
  {
    question: "Can I deploy or use this MVP to raise funding or make money?",
    answer:
      "Absolutely. Your MVP will be a tangible, functional product that you can showcase to investors, partners, or early users. You’ll have complete ownership and access to the source code.",
  },
  {
    question: "What happens after launch?",
    answer:
      "I will provide an additional month support, updates, and assist you in planning your next steps based on real user feedback. Your success is my top priority.",
  },
]

const openIndex = ref(-1)

function toggleFaq(idx: number) {
  openIndex.value = openIndex.value === idx ? -1 : idx
}
</script>

<template>
  <section id="faq" class="min-h-screen flex items-center justify-center px-4 py-20 md:py-32 bg-white">
    <div class="max-w-3xl mx-auto w-full text-center space-y-8">
      <div class="space-y-4">
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-900">
          Do you have any questions?
        </h2>
        <p class="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
          I work with Founders and Agencies who are asking the same things. Here's the most common questions I get.
        </p>
      </div>
      <div class="mt-10 flex flex-col gap-4 text-left">
        <div v-for="(faq, idx) in faqs" :key="faq.question"
          class="rounded-2xl border border-neutral-200 bg-neutral-50 overflow-hidden transition-shadow"
          :class="openIndex === idx ? 'shadow-lg' : ''">
          <button
            class="w-full flex items-center justify-between px-6 py-5 font-semibold text-lg md:text-xl text-neutral-900 focus:outline-none transition-colors"
            @click="toggleFaq(idx)" :aria-expanded="openIndex === idx" :aria-controls="'faq-panel-' + idx">
            <span>{{ faq.question }}</span>
            <svg
              :class="['transition-transform duration-300', openIndex === idx ? 'rotate-180 text-amber-500' : 'text-neutral-400']"
              width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition name="faq-fade">
            <div v-if="openIndex === idx" :id="'faq-panel-' + idx"
              class="px-6 pb-6 text-neutral-700 text-base md:text-lg bg-white">
              {{ faq.answer }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-fade-enter-active,
.faq-fade-leave-active {
  transition: all 0.3s cubic-bezier(.4, 0, .2, 1);
}

.faq-fade-enter-from,
.faq-fade-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.faq-fade-enter-to,
.faq-fade-leave-from {
  opacity: 1;
  max-height: 500px;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
}
</style>