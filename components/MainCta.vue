<template>
    <section class="min-h-screen flex items-center justify-center px-4 py-20 md:py-32 bg-neutral-50">
        <div class="max-w-4xl mx-auto w-full text-center space-y-8">
            <div class="space-y-4">
                <h2 class="text-4xl md:text-5xl font-bold text-neutral-900">
                    Ready to Transform Your Ideas into Reality?
                </h2>
                <p class="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                    Let's work together to bring your vision to life. With my expertise in modern web and mobile development, 
                    we can create something exceptional in just 2 weeks.
                </p>
                <div class="inline-block px-6 py-2 rounded-full bg-amber-500 text-white font-semibold text-base shadow-md">
                    Limited availability | Book your spot now
                </div>
            </div>
            
            <NuxtLink 
                external
                target="_blank"
                to="https://giusscos.it" 
                class="group inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white font-medium hover:shadow-md shadow-amber-600 transition duration-500 ease-in-out"
            >
                Let's Start Your Project
                <LIconArrowUpRight class="size-5 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </NuxtLink>
        </div>
    </section>
</template>