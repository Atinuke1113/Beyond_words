<template>
  <section class="bg-white py-2">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800">Our Partners</h2>
        <div class="flex items-center justify-center mt-4">
          <div class="w-12 h-[2px] bg-blue-400"></div>
          <p class="text-gray-600 mx-4">Trusted by Leading Organizations</p>
          <div class="w-12 h-[2px] bg-blue-400"></div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-16 md:gap-24">
        <div v-for="(partner, index) in partners" :key="index" 
          class="transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110 p-4">
          <img 
            :src="partner.logo" 
            :alt="partner.name"
            class="h-24 md:h-48 w-auto object-contain"
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