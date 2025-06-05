<template>
  <section class="min-h-screen flex items-center justify-center px-4 py-20 md:py-32">
    <div class="max-w-4xl mx-auto space-y-12">
      <div class="text-center space-y-4">
        <h1 class="text-4xl md:text-6xl font-bold text-neutral-900">
          Use <span class="bg-amber-500">Cases</span>
        </h1>
        <p class="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
          Discover how I can help transform your ideas into exceptional digital products
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-neutral-900 flex items-center gap-2">
              <LIconBadgeCheck class="size-6 fill-amber-500" />
              Web Applications
            </h2>
            <p class="text-neutral-600">
              From e-commerce platforms to SaaS solutions, I build modern web applications that are fast, secure, and user-friendly. Perfect for businesses looking to digitize their operations or launch new online services.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-neutral-900 flex items-center gap-2">
              <LIconBadgeCheck class="size-6 fill-amber-500" />
              Portfolio Websites
            </h2>
            <p class="text-neutral-600">
              Stand out with a custom portfolio website that showcases your work in the best light. Whether you're a creative professional, developer, or business owner, I'll create a site that captures your unique style.
            </p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-neutral-900 flex items-center gap-2">
              <LIconBadgeCheck class="size-6 fill-amber-500" />
              Business Solutions
            </h2>
            <p class="text-neutral-600">
              Need a custom solution for your business? I can help with internal tools, automation systems, and process optimization software that streamline your operations and boost productivity.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-neutral-900 flex items-center gap-2">
              <LIconBadgeCheck class="size-6 fill-amber-500" />
              Let's Discuss Your Project
            </h2>
            <p class="text-neutral-600">
              Have a specific project in mind? I'm always excited to hear about new ideas and challenges. Let's discuss how we can work together to bring your vision to life.
            </p>
            <SocialLinks variant="about" />
          </div>
        </div>
      </div>

      <div class="text-center">
        <BookCallButton :text="`Let's Work Together`" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional setup needed
</script>