<script lang="ts" setup>
const pricingCards = [
  {
    title: 'MVP Development',
    price: '$4,800',
    priceNote: '/ one-time',
    description: 'Bring your product idea to life within 14 days. Validate, show, and repeat.',
    features: [
      'Ready to deploy SaaS to Web or App Store',
      'Beautiful unique UI, login, payments, database',
      'Full source code & ownership',
      '1 month bug fixes & launch support',
      'Delivered in just 14 days or less'
    ],
    ctaText: 'Let me show my new MVP',
    ctaLink: 'https://google.com',
    badge: 'Most popular'
  },
  {
    title: 'Monthly support',
    price: '$2,500',
    priceNote: '/ month',
    description: 'Improve shipping and scaling time. Save cash and invest with a good plan.',
    features: [
      'Weekly updates',
      'Dedicated support time',
      'SEO, analytics & performance optimizations',
      'Ongoing maintenance & feature builds'
    ],
    ctaText: 'Take My MVP To The Next Level',
    ctaLink: 'https://google.com'
  }
]
</script>

<template>
  <section id="pricing" class="min-h-screen flex items-center justify-center px-4 py-20 md:py-32 bg-neutral-50">
    <div class="max-w-5xl mx-auto w-full text-center space-y-8">
      <div class="space-y-4">
        <h2 class="text-4xl md:text-5xl font-bold text-neutral-900">
          Your Project Idea Needs
        </h2>
        <p class="text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto">
          Bring your product idea to life with a real product, bypassing the traditional development cycle and burocracy.
          Enjoy a fixed and friendly price.
        </p>
        <div class="inline-block px-6 py-2 rounded-full bg-amber-500 text-white font-semibold text-base shadow-md">
          Limited availability | Only 2 seats left for {{ new Date().toLocaleString('en-US', { month: 'long' }) }}
        </div>
      </div>
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center">
        <div v-for="card in pricingCards" :key="card.title" class="relative bg-white border border-neutral-200 rounded-3xl shadow-lg flex flex-col p-8 text-left space-y-6">
          <!-- Badge -->
          <div v-if="card.badge" class="absolute left-1/2 -top-5 -translate-x-1/2 z-10">
            <span
              class="inline-block px-5 py-2 rounded-full bg-black text-white font-semibold text-sm shadow-amber-600 shadow-md select-none"
            >
              {{ card.badge }}
            </span>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-neutral-900 mb-2">{{ card.title }}</h3>
            <div class="flex items-end gap-1">
              <span class="text-4xl font-extrabold text-neutral-900">{{ card.price }}</span>
              <span class="text-base text-neutral-500">{{ card.priceNote }}</span>
            </div>
            <p class="text-neutral-600 mt-2 text-sm">{{ card.description }}</p>
          </div>
          <ul class="space-y-3">
            <li v-for="feature in card.features" :key="feature" class="flex items-center gap-3 text-neutral-700">
              <LIconBadgeCheck class="size-5 fill-amber-500 shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul> 
          
          <BookCallButton :text="card.ctaText" :url="card.ctaLink" class="mt-auto" />
        </div>
      </div>
    </div>
  </section>
</template>