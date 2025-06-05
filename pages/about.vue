<template>
  <section class="min-h-screen flex items-center justify-center px-4 py-20 md:py-32">
    <div class="max-w-4xl mx-auto space-y-12">
      <div class="text-center space-y-4">
        <h1 class="text-4xl md:text-6xl font-bold text-neutral-900">
          About <span class="bg-amber-500">Me</span>
        </h1>
        <p class="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
          A passionate developer crafting digital experiences with modern technologies
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-neutral-900 flex items-center gap-2">
              <LIconBadgeCheck class="size-6 fill-amber-500" />
              My Journey
            </h2>
            <p class="text-neutral-600">
              I'm a 23-year-old freelance developer passionate about creating beautiful and functional digital experiences. My journey in tech began in childhood and has evolved through school and into my current role as a freelance developer.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-neutral-900 flex items-center gap-2">
              <LIconBadgeCheck class="size-6 fill-amber-500" />
              What I Do
            </h2>
            <p class="text-neutral-600">
              I specialize in building modern web applications and websites with a focus on clean design and smooth animations. While I might not be the best at marketing, I excel at coding - especially when working with AI tools that help me ship projects faster and more efficiently.
            </p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-neutral-900 flex items-center gap-2">
              <LIconBadgeCheck class="size-6 fill-amber-500" />
              Beyond Coding
            </h2>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-neutral-600">
                <LIconBadgeCheck class="size-5 fill-amber-500 shrink-0" />
                Reading books
              </li>
              <li class="flex items-center gap-3 text-neutral-600">
                <LIconBadgeCheck class="size-5 fill-amber-500 shrink-0" />
                Playing video games
              </li>
              <li class="flex items-center gap-3 text-neutral-600">
                <LIconBadgeCheck class="size-5 fill-amber-500 shrink-0" />
                Watching great films
              </li>
              <li class="flex items-center gap-3 text-neutral-600">
                <LIconBadgeCheck class="size-5 fill-amber-500 shrink-0" />
                Spending time with family and partner
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-neutral-900 flex items-center gap-2">
              <LIconBadgeCheck class="size-6 fill-amber-500" />
              Let's Connect
            </h2>
            <p class="text-neutral-600">
              If you find my work interesting, feel free to connect with me on social media!
            </p>
            
            <SocialLinks />
          </div>
        </div>
      </div>

      <div class="text-center">
        <BookCallButton :text="`Let's Work Together`" />
      </div>
    </div>
  </section>
</template>