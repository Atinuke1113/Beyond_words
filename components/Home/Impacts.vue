<template>
  <section class="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 left-10 w-40 h-40 bg-orange-100 rounded-full opacity-20 animate-float-slow"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float-medium"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-16">
        <h2 
          class="text-4xl font-bold text-gray-800 mb-6"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          Featured Initiatives
        </h2>
        <p 
          class="text-lg text-gray-600 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
          :delay="200"
        >
          Empowering communities through targeted programs and sustainable solutions
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Skill Acquisition Card -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="300"
          class="group"
        >
          <NuxtLink to="/initiatives/skill-acquisition" class="block">
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden h-full">
              <div class="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div class="relative">
                <div class="text-blue-400 text-4xl mb-6">
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-800">Skill Acquisition</h3>
                <p class="text-gray-600 mb-6">
                  Comprehensive training programs empowering individuals with practical skills for sustainable livelihoods.
                </p>
                <div class="flex items-center text-blue-400 group-hover:translate-x-2 transition-transform">
                  Learn More
                  <i class="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Retired Teachers Support Card -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="500"
          class="group"
        >
          <NuxtLink to="/initiatives/retired-teachers" class="block">
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden h-full">
              <div class="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div class="relative">
                <div class="text-orange-500 text-4xl mb-6">
                  <i class="fas fa-chalkboard-teacher"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-800">Retired Teachers Support</h3>
                <p class="text-gray-600 mb-6">
                  Supporting retired educators through financial literacy, health care, and community engagement programs.
                </p>
                <div class="flex items-center text-orange-500 group-hover:translate-x-2 transition-transform">
                  Learn More
                  <i class="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Community Engagement Card -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="700"
          class="group"
        >
          <NuxtLink to="/initiatives/community-engagement" class="block">
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden h-full">
              <div class="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div class="relative">
                <div class="text-blue-400 text-4xl mb-6">
                  <i class="fas fa-hands-helping"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-800">Community Engagement</h3>
                <p class="text-gray-600 mb-6">
                  Building stronger communities through collaborative projects, workshops, and local partnerships.
                </p>
                <div class="flex items-center text-blue-400 group-hover:translate-x-2 transition-transform">
                  Learn More
                  <i class="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      
    </div>
  </section>
</template>

<script setup>
const stats = [
  { number: 1000, label: 'Skills Training Graduates' },
  { number: 200, label: 'Retired Teachers Supported' },
  { number: 50, label: 'Community Projects' }
]
</script>