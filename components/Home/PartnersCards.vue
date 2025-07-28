<template>
  <section ref="target" class="relative py-16 overflow-hidden bg-white">
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-4xl font-extrabold text-gray-700 mb-2">Our Partners</h2>
        <span class="block h-1 w-16 bg-orange-400 rounded-full mx-auto mt-2 animate-underline"></span>
        <div class="flex items-center justify-center mt-4">
          <p class="text-gray-600 mx-4 text-lg md:text-xl">Trusted by Leading Organizations</p>
        </div>
      </div>
      <transition-group name="card-stagger" tag="div" class="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          v-show="cardVisible[index]"
          class="transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110 hover:shadow-2xl p-6 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/30 shadow-lg flex flex-col items-center w-64 min-h-[260px]"
        >
          <font-awesome-icon :icon="partner.icon" class="text-orange-400 text-6xl mb-4" />
          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ partner.name }}</h3>
          <p class="text-gray-600 text-center">{{ partner.desc }}</p>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHandshake, faBuilding, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons'

const partners = [
  {
    name: 'Collaboration',
    icon: faHandshake,
    desc: 'Working together to achieve shared goals.'
  },
  {
    name: 'Institutions',
    icon: faBuilding,
    desc: 'Partnering with leading institutions for impact.'
  },
  {
    name: 'Communities',
    icon: faUsers,
    desc: 'Empowering communities through partnership.'
  },
  {
    name: 'Global Reach',
    icon: faGlobe,
    desc: 'Expanding our impact across the world.'
  }
]

const { isIntersecting, target } = useIntersectionObserver({ threshold: 0.2 })
const cardVisible = ref([false, false, false, false])

watch(isIntersecting, (val) => {
  if (val && !cardVisible.value[0]) {
    partners.forEach((_, i) => {
      setTimeout(() => {
        cardVisible.value[i] = true
      }, 300 + i * 250)
    })
  }
})
</script>

<script>
export default {
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
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