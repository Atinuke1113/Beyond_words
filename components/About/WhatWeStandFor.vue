<template>
  <section ref="target" class="relative py-24 bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
      <!-- Left: Writeups -->
      <transition-group name="row-stagger" tag="div" class="flex-1 space-y-10 mb-12 md:mb-0">
        <!-- Vision -->
        <div v-if="cardVisible[0]" key="mission" class="flex flex-col">
          <h3 class="text-xl md:text-2xl font-bold text-blue-500 mb-2">Vision</h3>
          <p class="text-gray-700 text-base md:text-lg">Empowering a society where inclusive education, gender equality, and
sustainable practices thrive, fostering a brighter future for all Nigerians.</p>
        </div>
        <!-- Mission -->
        <div v-if="cardVisible[1]" key="values" class="flex flex-col">
          <h3 class="text-xl md:text-2xl font-bold text-orange-500 mb-2">Mission</h3>
          <p class="text-gray-700 text-base md:text-lg">"Beyond Words Network NG" is committed to advancing the United
Nations' Sustainable Development Goals (SDGs), with a focus on quality
education (SDG 4), gender equality (SDG 5), and climate action (SDG
13). We strive to create a culture of inclusivity, social justice, and
environmental stewardship through advocacy, education, and
community engagement.</p>
        </div>
        <!-- Objectives -->
        <div v-if="cardVisible[2]" key="vision" class="flex flex-col">
          <h3 class="text-xl md:text-2xl font-bold text-gray-600 mb-2">Objectives</h3>
          <p class="text-gray-700 text-base md:text-lg">1. Improve access to quality education for marginalized
          communities, particularly girls and women.</p>
          <p class="text-gray-700 text-base md:text-lg">2. Promote gender equality and challenge discriminatory norms
          and practices.</p>
          <p class="text-gray-700 text-base md:text-lg">3. Support climate action and environmental sustainability
          initiatives in Nigeria.</p>
          <p class="text-gray-700 text-base md:text-lg">4. Strengthen community engagement and social justice
          movements in Nigeria.</p>
        </div>
      </transition-group>
      <!-- Right: Venn Diagram SVG -->
      <transition name="fade-in" appear>
        <div v-if="show" class="flex-1 flex justify-center items-center">
          <svg viewBox="0 0 320 320" width="320" height="320" class="w-72 h-72 md:w-80 md:h-80">
            <!-- Mission  -->
            <path d="M160,160 m-120,0 a120,120 0 1,1 240,0" fill="none" stroke="#f59e42" stroke-width="40" stroke-linecap="round" />
            <!-- Objectives  -->
            <path d="M160,160 m60,-104 a120,120 0 1,1 -120,208" fill="none" stroke="#888" stroke-width="40" stroke-linecap="round" />
            <!-- Vision  -->
           <path d="M160,160 m-104,60 a120,120 0 1,1 208,-120" fill="none" stroke="#60a5fa" stroke-width="40" stroke-linecap="round" />

            <!-- Icons and labels -->
            <!-- Mission -->
            <g>
              <circle cx="240" cy="90" r="36" fill="#f59e42" />
              <foreignObject x="210" y="60" width="60" height="60">
                <div class="flex flex-col items-center justify-center w-full h-full">
                  <font-awesome-icon :icon="['fas', 'rocket']" class="text-white text-2xl mb-1" />
                  <span class="text-white text-base font-bold">Mission</span>
                </div>
              </foreignObject>
            </g>
            <!-- Values -->
            <g>
              <circle cx="160" cy="250" r="36" fill="#888" />
              <foreignObject x="130" y="220" width="60" height="60">
                <div class="flex flex-col items-center justify-center w-full h-full">
                  <font-awesome-icon :icon="['fas', 'coins']" class="text-white text-2xl mb-1" />
                  <span class="text-white text-base font-bold">Values</span>
                </div>
              </foreignObject>
            </g>
            <!-- Vision -->
            <g>
              <circle cx="80" cy="90" r="36" fill="#60a5fa" />
              <foreignObject x="50" y="60" width="60" height="60">
                <div class="flex flex-col items-center justify-center w-full h-full">
                  <font-awesome-icon :icon="['fas', 'eye']" class="text-white text-2xl mb-1" />
                  <span class="text-white text-base font-bold">Vision</span>
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket, faCoins, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faRocket, faCoins, faEye)

const { isIntersecting, target } = useIntersectionObserver({ threshold: 0.2 })
const show = ref(false)
const cardVisible = ref([false, false, false])

watch(isIntersecting, (val) => {
  if (val && !show.value) {
    show.value = true
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        cardVisible.value[i] = true
      }, 300 + i * 250)
    }
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
.fade-in-enter-active {
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-in-enter-from {
  opacity: 0;
  transform: translateY(60px);
}
.fade-in-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.row-stagger-enter-active {
  transition: all 0.9s cubic-bezier(.4,0,.2,1);
}
.row-stagger-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.row-stagger-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>