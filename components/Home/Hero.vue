<template>
  <section>
  <div class="relative h-screen overflow-hidden">
    
    <!-- Background Images with Overlay -->
    <div class="absolute inset-0">
      <transition-group name="fade">
        <div 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          v-show="currentSlide === index"
          class="absolute inset-0"
        >
          <img 
            :src="slide.image" 
            :alt="slide.title"
            class="w-full h-full object-cover transform scale-105 transition-transform duration-[20000ms]"
            :class="{ 'zoom-in': currentSlide === index }"
          />
          <div class="absolute inset-0 bg-black/40"></div>
        </div>
      </transition-group>
    </div>

    <!-- Hero Content -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="container mx-auto px-4 text-center">
        <transition-group 
          name="fade" 
          mode="out-in"
        >
          <div 
            v-for="(slide, index) in slides" 
            :key="slide.id"
            v-show="currentSlide === index"
            class="max-w-4xl mx-auto"
          >
            <div class="flex items-center justify-center mb-4">
              <div class="w-12 h-[2px] bg-orange-400"></div>
              <h2 class="text-orange-400 font-semibold mx-4 text-xl">{{ slide.subtitle }}</h2>
              <div class="w-12 h-[2px] bg-orange-400"></div>
            </div>
            
            <h1 class="text-white text-6xl font-bold mb-12 leading-tight">
              {{ slide.title }}
            </h1>
            
            <div class="flex items-center justify-center space-x-6">
              <button class="bg-blue-400 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition-all flex items-center">
                Become a Volunteer <i class="fas fa-arrow-right ml-2"></i>
              </button>
              <button class="bg-orange-400 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-all flex items-center">
                <i class="fas fa-play mr-2"></i> Watch Video
              </button>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
     <!-- Animated Wave Design -->
      <div class="absolute bottom-0 left-0 right-0 overflow-hidden">
        <div class="wave-container">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class="wave wave3"></div>
          <div class="wave wave4"></div>
        </div>
      </div>
  </div>
  
  
     </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.zoom-in {
  animation: zoomEffect 20s forwards;
}

@keyframes zoomEffect {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.wave-container {
  position: relative;
  height: 150px;
  width: 100%;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8) 50%, white);
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23FFFFFF'/%3E%3C/svg%3E");
  background-size: 50% 100%;
  animation: wave 15s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
}

.wave1 {
  animation: wave 15s linear infinite;
  z-index: 4;
}

.wave2 {
  animation: wave2 10s linear infinite;
  opacity: 0.5;
  z-index: 3;
}

.wave3 {
  animation: wave 8s linear infinite;
  opacity: 0.3;
  z-index: 2;
}

.wave4 {
  animation: wave2 5s linear infinite;
  opacity: 0.2;
  z-index: 1;
}

@keyframes wave {
  0% { transform: translateX(0) translateZ(0); }
  50% { transform: translateX(-25%) translateZ(0); }
  100% { transform: translateX(-50%) translateZ(0); }
}

@keyframes wave2 {
  0% { transform: translateX(0) translateZ(0); }
  50% { transform: translateX(-25%) translateZ(0); }
  100% { transform: translateX(-50%) translateZ(0); }
}
</style>

<script setup>
const slides = ref([
  {
    id: 1,
    title: "Helping Each Other Can Make World Better",
    subtitle: "Give Hope For Homeless",
    image: "/images/new_hero.jpg"
  },
  {
    id: 2,
    title: "Together We Can Make A Difference",
    subtitle: "Support Our Cause",
    image: "/images/heroimg_2.jpg"
  }
])

const currentSlide = ref(0)

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }, 8000)
})
</script>