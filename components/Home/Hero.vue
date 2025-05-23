<template>
  <section class="relative h-screen overflow-hidden">
    <!-- Background Slider -->
    <div class="absolute inset-0">
      <div class="relative h-full w-full">
        <transition-group name="fade">
          <div v-for="(slide, index) in slides" 
            :key="slide.id"
            v-show="currentSlide === index"
            class="absolute inset-0"
          >
            <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/50"></div>
          </div>
        </transition-group>
      </div>
    </div>

    <!-- Hero Content -->
    <div class="relative h-full container mx-auto px-4">
      <div class="flex items-center h-full">
        <div class="max-w-2xl text-white">
          <h1 
            class="text-5xl md:text-7xl font-bold mb-6"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="300"
          >
            {{ slides[currentSlide].title }}
          </h1>
          <p 
            class="text-xl mb-8"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="600"
          >
            {{ slides[currentSlide].description }}
          </p>
          <button 
            class="bg-blue-400 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition-colors"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="900"
          >
            Learn More
          </button>
          <button 
            class="bg-transparent/15 text-white px-8 ml-5 py-3 rounded-full hover:bg-orange-600 transition-colors"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="900"
          >
            Donate Now
          </button>
        </div>
      </div>

      <!-- Slide Navigation -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        <button 
          v-for="(_, index) in slides" 
          :key="index"
          @click="currentSlide = index"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300',
            currentSlide === index ? 'bg-red-blue-400 w-8' : 'bg-white/50'
          ]"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentSlide = ref(0)

const slides = [
  {
    id: 1,
    image: '/images/heroimg.jpg',
    title: 'BEYOND WORDS NETWORK',
    description: 'Driving progress, prosperity and inclusiveness through strategic community efforts'

  },
  {
    id: 2,
    image: '/images/heroimg_2.jpg',
    title: 'A COMMUNITY CENTRIC INIATIATIVE',
    description: 'Empowering lives, honouring educators, and inspiring the next generation'
  },
  {
    id: 3,
    image: '/images/heroimg_3.jpg',
    title: 'RAISING HOPE, ONE CHILD AT A TIME',
    description: 'Transforming lives through education, mentorship, and community support'
  },
 
]

// Auto-advance slides
onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>