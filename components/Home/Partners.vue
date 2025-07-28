<template>
  <section class="relative py-16 overflow-hidden bg-white">
    <!-- Decorative Background Shape -->
    <div class="absolute -top-32 -right-32 w-[400px] h-[400px] bg-white opacity-30 rounded-full blur-3xl z-0"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12">
        <h2 
          v-motion-fade-visible-once
          class="text-4xl md:text-4xl font-extrabold text-gray-700 mb-2"
        >Our Partners</h2>
        <span class="block h-1 w-16 bg-orange-400 rounded-full mx-auto mt-2 animate-underline"></span>
        <div class="flex items-center justify-center mt-4">
         
          <p v-motion-fade-visible-once :delay="200" class="text-gray-600 mx-4 text-lg md:text-xl">Trusted by Leading Organizations</p>
          
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          v-motion-fade-visible-once
          :delay="index * 150"
          class="transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110 hover:shadow-2xl p-4 rounded-2xl bg-white/40 backdrop-blur-lg border border-white/30 shadow-lg animate-float"
          :style="{ animationDelay: `${index * 0.5}s` }"
        >
          <img 
            :src="partner.logo" 
            :alt="partner.name"
            class="h-20 md:h-32 w-auto object-contain drop-shadow-lg"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = ref([
  {
    name: 'Partner 1',
    logo: '/images/gilbert.png'
  },
  {
    name: 'Partner 3',
    logo: '/images/ministryofinnovation.png'
  },
  {
    name: 'Partner 4',
    logo: '/images/agric.png'
  },
  {
    name: 'Partner 5',
    logo: '/images/annie.png'
  }
])
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.animate-gradient-move {
  background-size: 200% 200%;
  animation: gradient-move 4s linear infinite alternate;
}
</style>