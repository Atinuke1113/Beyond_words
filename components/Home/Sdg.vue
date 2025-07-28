<template>
  <section ref="target" class="relative py-10 px-4 overflow-hidden bg-white">
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <transition name="slide-left" appear>
          <h2 v-if="show" class="text-4xl md:text-4xl font-extrabold text-gray-700 mb-1 tracking-tight relative inline-block">
            SDG Alignment
            <span class="block h-1 w-16 bg-orange-400 rounded-full mx-auto mt-2 animate-underline"></span>
          </h2>
        </transition>
        <transition name="slide-left" appear>
          <p v-if="show" class="text-lg text-gray-500 max-w-2xl mt-2 mx-auto">
            Beyond Words Network NG is committed to advancing the following Sustainable Development Goals (SDGs)
          </p>
        </transition>
      </div>
      <transition-group name="card-stagger" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        <div
          v-for="(sdg, index) in sdgs"
          :key="sdg.title"
          v-show="cardVisible[index]"
          class="relative flex flex-col items-center group"
        >
          <div class="w-40 h-40 md:w-48 md:h-48 bg-white/80 shadow-2xl border-4 border-white flex flex-col items-center justify-center transition-all duration-300 transform group-hover:-translate-y-3 group-hover:shadow-yellow-300/40 group-hover:scale-105 animate-pop-in">
            <span class="absolute -top-4 -right-4 bg-orange-500 text-white font-bold rounded-full px-4 py-1 shadow-lg text-lg border-2 border-white">{{ sdg.number }}</span>
            <img :src="sdg.img" :alt="sdg.title" class="w-20 h-20 object-contain mb-2 drop-shadow-lg" />
            <h3 class="text-lg font-bold text-blue-500 text-center">{{ sdg.title }}</h3>
          </div>
          <transition name="fade">
            <div v-if="sdg.desc" class="mt-4 bg-white/90 rounded-xl shadow-lg p-4 text-center text-blue-900 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              {{ sdg.desc }}
            </div>
          </transition>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

const sdgs = [
  {
    number: '1',
    title: 'No Poverty',
    img: '/images/sdg_1.png',
    desc: 'Collaborate with local and international organisations to eradicate poverty.'
  },
  {
    number: '4',
    title: 'Quality Education',
    img: '/images/sdg_2.png',
    desc: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.'
  },
  {
    number: '5',
    title: 'Gender Equality',
    img: '/images/sdg_3.png',
    desc: 'Achieve gender equality and empower all women and girls.'
  },
  {
    number: '13',
    title: 'Climate Action',
    img: '/images/sdg_4.png',
    desc: 'Take urgent action to combat climate change and its impacts.'
  }
]

const { isIntersecting, target } = useIntersectionObserver({ threshold: 0.2 })
const show = ref(false)
const cardVisible = ref([false, false, false, false])

watch(isIntersecting, (val) => {
  if (val && !show.value) {
    show.value = true
    // Stagger card appearance
    sdgs.forEach((_, i) => {
      setTimeout(() => {
        cardVisible.value[i] = true
      }, 300 + i * 250)
    })
  }
})
</script>

<style scoped>
.slide-left-enter-active {
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0);
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
@keyframes blob-move {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(30px) scale(1.05); }
}
@keyframes blob-move-reverse {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-30px) scale(1.08); }
}
.animate-blob-move {
  animation: blob-move 8s ease-in-out infinite;
}
.animate-blob-move-reverse {
  animation: blob-move-reverse 10s ease-in-out infinite;
}
@keyframes pop-in {
  0% { opacity: 0; transform: scale(0.7); }
  80% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
}
.animate-pop-in {
  animation: pop-in 0.7s cubic-bezier(.4,0,.2,1);
}
@keyframes underline {
  0% { width: 0; }
  100% { width: 4rem; }
}
.animate-underline {
  animation: underline 1s cubic-bezier(.4,0,.2,1) 0.5s both;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>