<template>
  <section ref="target" class="relative py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
    <div class="container mx-auto px-4">
      <transition name="slide-down" appear>
        <h2 v-if="show" class="text-5xl font-extrabold text-white text-center mb-12">Our Approach</h2>
      </transition>
      <transition-group name="card-stagger" tag="div" class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <div
          v-for="(item, i) in approach"
          :key="item.title"
          v-show="cardVisible[i]"
          class="relative bg-white border-2 border-orange-300 rounded-lg shadow-xl flex flex-col items-center px-6 pt-16 pb-8 text-center min-h-[370px]"
        >
          <!-- Icon in colored square -->
          <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-orange-400 rounded-md p-4 shadow-lg flex items-center justify-center">
            <component :is="item.icon" class="w-10 h-10 text-white" />
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-2 mt-2">{{ item.title }}</h3>
          <span class="block h-1 w-10 bg-orange-400 rounded-full mx-auto mb-4"></span>
          <p class="text-gray-600 mb-8">{{ item.desc }}</p>
          <button class="mt-auto border border-orange-400 text-orange-500 font-semibold px-6 py-2 rounded hover:bg-orange-50 transition">Learn More</button>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

// SVG icon components
const LightbulbIcon = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a7 7 0 0 0-4 12.9V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.1A7 7 0 0 0 12 3zm0 0v1m0 16v1m-4-4h8"/></svg>`
}
const TargetIcon = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="8" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke-width="2"/><circle cx="12" cy="12" r="1" stroke-width="2"/></svg>`
}
const WifiIcon = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.53 16.11a6 6 0 0 1 6.94 0M5.07 12.66a10 10 0 0 1 13.86 0M1.6 9.2a14 14 0 0 1 20.8 0M12 20h.01"/></svg>`
}

const approach = [
  {
    icon: LightbulbIcon,
    title: 'Define the problem & set clear benchmarks',
    desc: 'We identify critical issues and set measurable goals to guide our work.'
  },
  {
    icon: TargetIcon,
    title: 'Develop & implement tailored digital solutions.',
    desc: 'We create tailored digital tools, like Maternal Record Pro, to transform healthcare delivery.'
  },
  {
    icon: WifiIcon,
    title: 'Continuously monitor, evaluate & scale impact.',
    desc: 'We continuously evaluate impact, refine strategies, and expand what works to save more lives.'
  }
]

const { isIntersecting, target } = useIntersectionObserver({ threshold: 0.2 })
const show = ref(false)
const cardVisible = ref([false, false, false])

watch(isIntersecting, (val) => {
  if (val && !show.value) {
    show.value = true
    approach.forEach((_, i) => {
      setTimeout(() => {
        cardVisible.value[i] = true
      }, 300 + i * 250)
    })
  }
})
</script>

<style scoped>
.slide-down-enter-active {
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.card-stagger-enter-active {
  transition: all 0.7s cubic-bezier(.4,0,.2,1);
}
.card-stagger-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.card-stagger-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>