<template>
  <section class="relative min-h-screen bg-gray-50">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-50"></div>
    
    <div class="container mx-auto px-4 py-24 relative">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content Section -->
        <div class="space-y-8">
          <div 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
          >
            <h1 class="text-5xl font-bold text-gray-800 mb-6">Who We Are</h1>
            <div class="w-20 h-2 bg-orange-500 rounded-full mb-8"></div>
            
            <div class="space-y-6 text-lg text-gray-600">
              <p>Beyond Words Network NG is a pioneering non-profit organization dedicated to fostering sustainable development and community empowerment across Nigeria. Since our inception, we have been committed to creating lasting positive change through innovative programs and strategic partnerships.</p>
              
              <p>Our journey began with a simple yet powerful vision: to build resilient communities where every individual has the opportunity to thrive. Through our comprehensive approach, we address critical challenges in education, poverty alleviation, gender equality, and environmental sustainability.</p>
              
              <p>What sets us apart is our holistic approach to community development. We believe in the power of collective action and sustainable solutions that create long-term impact.</p>
            </div>
          </div>

          <!-- Key Facts -->
  <div class="grid grid-cols-2 gap-6 mt-12">
    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div class="text-3xl font-bold text-blue-400 mb-2">
        <transition-group>
          <span key="years">{{ yearsCount }}</span>
          <span key="plus">+</span>
        </transition-group>
      </div>
      <p class="text-gray-600">Years of Impact</p>
    </div>
    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div class="text-3xl font-bold text-orange-500 mb-2">
        <transition-group>
          <span key="lives">{{ livesCount.toLocaleString() }}</span>
          <span key="plus">+</span>
        </transition-group>
      </div>
      <p class="text-gray-600">Lives Impacted</p>
    </div>
  </div>
        </div>

        <!-- Image Section -->
        <div 
          class="relative"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="500"
        >
          <div class="relative z-10">
            <img 
              src="/images/about_2.jpg" 
              alt="Community Impact" 
              class="rounded-2xl shadow-2xl"
            >
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 rounded-full opacity-10 animate-float-slow"></div>
          <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-float-medium"></div>

          <!-- Achievement Cards -->
          <div class="absolute -bottom-16 -left-8 bg-white p-4 rounded-lg shadow-lg animate-float-medium">
            <div class="flex items-center space-x-3">
              <i class="fas fa-award text-2xl text-orange-500"></i>
              <p class="font-semibold">Excellence in Community Service</p>
            </div>
          </div>

          <div class="absolute -top-14 -right-8 bg-white p-4 rounded-lg shadow-lg animate-float-slow">
            <div class="flex items-center space-x-3">
              <i class="fas fa-star text-2xl text-blue-400"></i>
              <p class="font-semibold">Top-Rated NGO 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import VueCountUp from '@/node_modules/vue-countup-v3'
import { onMounted, ref } from 'vue'

const yearsCount = ref(0)
const livesCount = ref(0)

onMounted(() => {
  // Start counting when component mounts
  setTimeout(() => {
    yearsCount.value = 2
    livesCount.value = 1000
  }, 500)
})
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 2s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>