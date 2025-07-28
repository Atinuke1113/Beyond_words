<template>
  <section class="relative overflow-hidden px-20 py-12 md:py-20 bg-gradient-to-br from-blue-100 via-white to-orange-100">
    <!-- Animated Gradient Background Shape -->
    <div class="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-400 via-blue-200 to-orange-200 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
       
        <div class="relative z-10">
            <h2 
              v-motion-slide-visible-once-left
              class="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 bg-gradient-to-r from-blue-500 via-orange-400 to-pink-500 bg-clip-text text-transparent animate-gradient-move"
            >
              Empowering Nigerian Entrepreneurs
            </h2>
            <p 
              v-motion-slide-visible-once-left
              :delay="300"
              class="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
            >
              Beyond Words Network NG is a pioneering non-profit organization dedicated to fostering sustainable development and community empowerment across Nigeria. Since our inception, we have been committed to creating lasting positive change through innovative programs and strategic partnerships.
            </p>
            <NuxtLink 
              v-motion-slide-visible-once-left
              :delay="600"
              to="/about"
              class="inline-flex items-center group bg-white/60 backdrop-blur-md px-6 py-3 rounded-full shadow-lg font-semibold text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <span class="mr-2">Learn More About Us</span>
              <i class="fas fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
            </NuxtLink>
          </div>
        
        <!-- Images with Animation -->
        <div class="relative h-[600px] flex items-center justify-center">
          <!-- Main image -->
          <div 
            v-motion-fade-visible-once
            :delay="300"
            class="absolute top-0 right-0 w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl animate-float"
          >
            <img src="/images/about_1.jpg" alt="Entrepreneurship Training" class="w-full h-full object-cover"/>
          </div>
          <!-- Overlaying image 1 -->
          <div 
            v-motion-fade-visible-once
            :delay="500"
            class="absolute bottom-20 -left-10 w-[220px] h-[180px] md:w-[300px] md:h-[250px] rounded-2xl overflow-hidden shadow-2xl animate-float-delay"
          >
            <img src="/images/about_3.jpg" alt="Business Workshop" class="w-full h-full object-cover"/>
          </div>
          <!-- Overlaying image 2 -->
          <div 
            v-motion-fade-visible-once
            :delay="700"
            class="absolute top-40 left-20 w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-2xl overflow-hidden shadow-2xl animate-float-reverse"
          >
            <img src="/images/about_2.jpg" alt="Success Stories" class="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
@keyframes float-delay {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(15px); }
}
@keyframes float-reverse {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}
.animate-float-delay {
  animation: float-delay 6s ease-in-out infinite;
}
.animate-float-reverse {
  animation: float-reverse 4.5s ease-in-out infinite;
}
.animate-gradient-move {
  background-size: 200% 200%;
  animation: gradient-move 4s linear infinite alternate;
}
.animate-pulse-slow {
  animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}
</style>