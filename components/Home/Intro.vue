<template>
  <section class="py-24 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div class="relative z-10">
          <h2 
            class="text-4xl font-bold mb-6 text-gray-800"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0 }"
          >
            Empowering Nigerian Entrepreneurs
          </h2>
          
          <p 
            class="text-lg text-gray-600 mb-8 leading-relaxed"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="200"
          >
           Beyond Words Network NG is a pioneering non-profit organization dedicated to fostering sustainable development and community empowerment across Nigeria. Since our inception, we have been committed to creating lasting positive change through innovative programs and strategic partnerships.
          </p>

          <NuxtLink 
            to="/about"
            class="inline-flex items-center group"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1 }"
            :delay="400"
          >
            <span class="text-orange-500 font-semibold mr-2">Learn More About Us</span>
            <i class="fas fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
          </NuxtLink>
        </div>

        <!-- Overlaying Images -->
        <div class="relative h-[600px]">
          <!-- Background pattern -->
          <div class="absolute right-0 top-0 w-72 h-72 bg-red-50 rounded-full opacity-20"></div>
          
          <!-- Main image -->
          <div 
            class="absolute top-0 right-0 w-[400px] h-[400px] rounded-lg overflow-hidden shadow-2xl"
            v-motion
            :initial="{ opacity: 0, scale: 0.8, x: 50 }"
            :enter="{ opacity: 1, scale: 1, x: 0 }"
            :delay="300"
          >
            <img 
              src="/images/about_1.jpg" 
              alt="Entrepreneurship Training" 
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Overlaying image 1 -->
          <div 
            class="absolute bottom-20 -left-10 w-[300px] h-[250px] rounded-lg overflow-hidden shadow-2xl"
            v-motion
            :initial="{ opacity: 0, scale: 0.8, x: -50 }"
            :enter="{ opacity: 1, scale: 1, x: 0 }"
            :delay="500"
          >
            <img 
              src="/images/about_3.jpg" 
              alt="Business Workshop" 
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Overlaying image 2 -->
          <div 
            class="absolute top-40 left-20 w-[250px] h-[250px] rounded-lg overflow-hidden shadow-2xl"
            v-motion
            :initial="{ opacity: 0, scale: 0.8, y: 50 }"
            :enter="{ opacity: 1, scale: 1, y: 0 }"
            :delay="700"
          >
            <img 
              src="/images/about_2.jpg" 
              alt="Success Stories" 
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Floating elements -->
          <div class="absolute -right-8 bottom-20 w-20 h-20 bg-orange-500 rounded-full opacity-10 animate-float-slow"></div>
          <div class="absolute left-40 top-0 w-16 h-16 bg-red-500 rounded-full opacity-10 animate-float-medium"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>