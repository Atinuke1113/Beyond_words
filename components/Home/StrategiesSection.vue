<template>
  <section ref="target" class="max-w-5xl mx-auto py-8">
    <!-- Heading -->
    <transition name="slide-left" appear>
      <h2 v-if="show" class="text-4xl font-extrabold text-center text-gray-700 mb-2">Our Strategies</h2>
    </transition>
     <span class="block h-1 w-16 bg-orange-400 rounded-full mx-auto mt-2 animate-underline"></span>
    <!-- Subheading -->
    <transition name="slide-left" appear>
      <p v-if="show" class="text-xl text-center text-gray-500 mt-2 mb-8 delay-200">How we drive impact and innovation</p>
    </transition>
    <!-- Content Row -->
    <div class="flex flex-col md:flex-row items-center gap-8 mt-8">
      <!-- Image -->
      <transition name="slide-up" appear>
        <img
          v-if="show"
          src="/images/about_1.jpg"
          alt="Strategies"
          class="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64 md:h-80"
        />
      </transition>
      <!-- Strategies List -->
      <transition name="slide-up" appear>
        <ul v-if="show" class="w-full md:w-1/2 text-lg text-gray-800 space-y-4 bg-white bg-opacity-80 p-6 rounded-lg shadow">
          <li><span class="font-bold text-blue-600">
            1.</span>  Advocacy and Policy Engagement: Collaborate with
            government agencies, civil society organizations, and
            community leaders to advocate for policy changes and
            implementation.
            </li>
          <li><span class="font-bold text-blue-600">
            2.</span> Education and Training: Provide training and capacitybuilding 
            programs for educators, community leaders, andyoung people on inclusive education, gender equality, and
            climate action.</li>
          <li><span class="font-bold text-blue-600">
            3.</span> Community Engagement: Organize community events,
            campaigns, and initiatives to raise awareness and
            promote social justice, human rights, and environmental
            sustainability</li>
          <li><span class="font-bold text-blue-600">
            4.</span> Partnerships and Collaborations: Foster partnerships
            with local and international organizations to leverage
            resources, expertise, and networks.</li>
        </ul>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

const { isIntersecting, target } = useIntersectionObserver({ threshold: 0.2 })
const show = computed(() => isIntersecting.value)
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
.slide-up-enter-active {
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(60px);
}
.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style> 