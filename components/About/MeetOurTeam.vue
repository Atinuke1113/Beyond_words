<template>
  <section ref="target" class="py-16 px-4 bg-white">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <transition name="slide-left" appear>
          <h2 v-if="show" class="text-4xl font-extrabold text-gray-700 mb-2">Meet Our Team</h2>
        </transition>
        <span class="block h-1 w-16 bg-orange-400 rounded-full mx-auto mt-2 animate-underline"></span>
        <transition name="slide-left" appear>
          <p v-if="show" class="text-lg text-gray-500 max-w-2xl mx-auto mt-2">Passionate professionals dedicated to making a difference.</p>
        </transition>
      </div>
      <div class="relative">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500" :style="carouselStyle">
            <div
              v-for="(member, i) in team"
              :key="member.name"
              class="relative bg-white border-2 border-orange-300 rounded-xl shadow-lg flex flex-col items-center px-4 py-4 text-center group overflow-hidden min-w-[240px] max-w-[280px] mx-2 flex-shrink-0"
            >
              <!-- Social icons vertical, slide in from left on hover -->
              <div class="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 pl-2 z-10">
                <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener" tabindex="0"
                  class="block mb-2 icon-slide-hidden group-hover:icon-slide-in group-focus:icon-slide-in">
                  <font-awesome-icon :icon="['fab', 'linkedin']" class="text-gray-400 text-2xl group-hover:text-[#0a66c2] group-focus:text-[#0a66c2] transition-colors duration-200" />
                </a>
                <a v-if="member.twitter" :href="member.twitter" target="_blank" rel="noopener" tabindex="0"
                  class="block mb-2 icon-slide-hidden group-hover:icon-slide-in group-focus:icon-slide-in">
                  <font-awesome-icon :icon="['fab', 'twitter']" class="text-gray-400 text-2xl group-hover:text-[#1da1f2] group-focus:text-[#1da1f2] transition-colors duration-200" />
                </a>
                <a v-if="member.instagram" :href="member.instagram" target="_blank" rel="noopener" tabindex="0"
                  class="block icon-slide-hidden group-hover:icon-slide-in group-focus:icon-slide-in">
                  <font-awesome-icon :icon="['fab', 'instagram']" class="text-gray-400 text-2xl group-hover:text-[#e1306c] group-focus:text-[#e1306c] transition-colors duration-200" />
                </a>
              </div>
              <img :src="member.img" :alt="member.name" class="w-32 h-32 rounded-full object-cover mb-4 border-4 border-orange-200 shadow z-0" />
              <h3 class="text-xl font-bold text-gray-800 mb-1">{{ member.name }}</h3>
              <p class="text-orange-500 font-medium mb-2">{{ member.role }}</p>
            </div>
          </div>
        </div>
        <!-- Carousel navigation -->
        <div class="flex justify-center mt-8 gap-8">
          <button @click="prev" :disabled="currentIndex === 0" class="bg-orange-400 text-white rounded-full w-10 h-10 flex items-center justify-center shadow transition" :class="{ 'opacity-40 cursor-not-allowed': currentIndex === 0 }">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button @click="next" :disabled="currentIndex >= team.length - visibleCount" class="bg-orange-400 text-white rounded-full w-10 h-10 flex items-center justify-center shadow transition" :class="{ 'opacity-40 cursor-not-allowed': currentIndex >= team.length - visibleCount }">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faTwitter, faInstagram)

const team = [
  { name: 'Alice Johnson', role: 'Project Lead', img: '/images/headshot1.jpg', linkedin: '#', twitter: '#', instagram: '#' },
  { name: 'Brian Smith', role: 'Developer', img: '/images/headshot2.jpg', linkedin: '#', twitter: '#', instagram: '#' },
  { name: 'Cynthia Lee', role: 'Designer', img: '/images/headshot1.jpg', linkedin: '#', twitter: '#', instagram: '#' },
  { name: 'David Kim', role: 'Community Manager', img: '/images/headshot1.jpg', linkedin: '#', twitter: '#', instagram: '#' },
  { name: 'Ella Brown', role: 'Researcher', img: '/images/headshot2.jpg', linkedin: '#', twitter: '#', instagram: '#' },
  { name: 'Frank Green', role: 'Outreach Lead', img: '/images/headshot1.jpg', linkedin: '#', twitter: '#', instagram: '#' },
  { name: 'Grace Lin', role: 'Digital Strategist', img: '/images/headshot2.jpg', linkedin: '#', twitter: '#', instagram: '#' },
  { name: 'Henry Osei', role: 'Support Specialist', img: '/images/headshot1.jpg', linkedin: '#', twitter: '#', instagram: '#' }
]

const { isIntersecting, target } = useIntersectionObserver({ threshold: 0.2 })
const show = ref(false)
const cardVisible = ref(Array(team.length).fill(false))

watch(isIntersecting, (val) => {
  if (val && !show.value) {
    show.value = true
    team.forEach((_, i) => {
      setTimeout(() => {
        cardVisible.value[i] = true
      }, 300 + i * 150)
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
.icon-slide-hidden {
  opacity: 0;
  transform: translateX(-40px);
}
.group:hover .icon-slide-hidden,
.group:focus-within .icon-slide-hidden {
  opacity: 1 !important;
  transform: translateX(0) !important;
}
.group:hover .fa-linkedin,
.group:focus-within .fa-linkedin {
  color: #0a66c2 !important;
}
.group:hover .fa-twitter,
.group:focus-within .fa-twitter {
  color: #1da1f2 !important;
}
.group:hover .fa-instagram,
.group:focus-within .fa-instagram {
  color: #e1306c !important;
}
</style> 