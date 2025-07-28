<template>
  <section ref="target" class="relative py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
    <div class="container mx-auto px-4">
      <transition name="slide-down" appear>
        <h2 v-if="show" class="text-4xl font-extrabold text-white text-center mb-16">Featured Initiatives</h2>
      </transition>
      <transition-group name="card-stagger" tag="div" class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <div
          v-for="(item, i) in initiatives"
          :key="item.title"
          v-show="cardVisible[i]"
          class="relative bg-white border-2 border-border-400 rounded-lg shadow-xl flex flex-col items-center px-6 pt-16 pb-8 text-center min-h-[370px]"
        >
          <!-- Icon in colored square -->
          <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-400 rounded-md p-4 shadow-lg flex items-center justify-center">
            <font-awesome-icon :icon="item.icon" class="w-10 h-10 text-white" />
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-2 mt-2">{{ item.title }}</h3>
          <span class="block h-1 w-10 bg-blue-400 rounded-full mx-auto mb-4"></span>
          <p class="text-gray-600 mb-8">{{ item.desc }}</p>
          <button class="mt-auto border border-blue-400 text-blue-500 font-semibold px-6 py-2 rounded hover:bg-blue-400 hover:text-white transition">Learn More</button>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTools, faHandsHelping, faUsers } from '@fortawesome/free-solid-svg-icons'

const initiatives = [
  {
    icon: faTools,
    title: 'Skill Acquisition and Entrepreneurship',
    desc: 'We empower youth through training in various skills and entrepreneurship to foster economic independence and sustainable livelihoods'
  },
  {
    icon: faHandsHelping,
    title: 'Retired Teachers Support',
    desc: 'We provide support to retired teachers, ensuring they have access to resources and community engagement opportunities that honor their contributions to education.'
  },
  {
    icon: faUsers,
    title: 'Community Engagement and Digital Literacy',
    desc: 'We promote digital literacy and community engagement to empower individuals and foster inclusive growth.'
  }
]

const { isIntersecting, target } = useIntersectionObserver({ threshold: 0.2 })
const show = ref(false)
const cardVisible = ref([false, false, false])

watch(isIntersecting, (val) => {
  if (val && !show.value) {
    show.value = true
    initiatives.forEach((_, i) => {
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