<template>
  <section class="mt-0 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div class="relative z-10">
          <h2 
            v-motion-slide-visible-once-left
            class="text-4xl font-bold mb-6 text-gray-800"
          >
            Empowering Nigerian Entrepreneurs
          </h2>
          
          <p 
            v-motion-slide-visible-once-left
            :delay="300"
            class="text-lg text-gray-600 mb-8 leading-relaxed"
          >
           Beyond Words Network NG is a pioneering non-profit organization dedicated to fostering sustainable development and community empowerment across Nigeria. Since our inception, we have been committed to creating lasting positive change through innovative programs and strategic partnerships.
          </p>

          <NuxtLink 
            v-motion-slide-visible-once-left
            :delay="600"
            to="/about"
            class="inline-flex items-center group"
          >
            <span class="text-orange-500 font-semibold mr-2">Learn More About Us</span>
            <i class="fas fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
          </NuxtLink>
        </div>

        <!-- Images -->
        <div class="relative h-[600px]">
          <!-- Main image -->
          <div 
            v-motion-fade-visible-once
            :delay="300"
            class="absolute top-0 right-0 w-[400px] h-[400px] rounded-lg overflow-hidden shadow-2xl"
          >
            <img src="/images/about_1.jpg" alt="Entrepreneurship Training" class="w-full h-full object-cover"/>
          </div>

          <!-- Overlaying image 1 -->
          <div 
            v-motion-fade-visible-once
            :delay="400"
            class="absolute bottom-20 -left-10 w-[300px] h-[250px] rounded-lg overflow-hidden shadow-2xl"
          >
            <img src="/images/about_3.jpg" alt="Business Workshop" class="w-full h-full object-cover"/>
          </div>

          <!-- Overlaying image 2 -->
          <div 
            v-motion-fade-visible-once
            :delay="600"
            class="absolute top-40 left-20 w-[250px] h-[250px] rounded-lg overflow-hidden shadow-2xl"
          >
            <img src="/images/about_2.jpg" alt="Success Stories" class="w-full h-full object-cover"/>
          </div>

          
        </div>
      </div>
    </div>
  </section>
</template>