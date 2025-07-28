<template>
  <section class="relative w-full py-4 bg-gradient-to-r from-blue-200/60 via-white/60 to-orange-200/60 overflow-hidden">
    <div class="absolute inset-0 backdrop-blur-md bg-white/30 z-0 rounded-xl"></div>
    <div class="relative z-10">
      <div class="marquee whitespace-nowrap flex items-center">
        <span class="mx-8 text-xl md:text-2xl font-semibold text-blue-700 flex items-center">
          <i class="fas fa-bolt text-orange-400 mr-2"></i> Empowering Communities
        </span>
        <span class="mx-8 text-xl md:text-2xl font-semibold text-orange-500 flex items-center">
          <i class="fas fa-leaf text-green-500 mr-2"></i> Sustainable Development
        </span>
        <span class="mx-8 text-xl md:text-2xl font-semibold text-pink-600 flex items-center">
          <i class="fas fa-users text-blue-400 mr-2"></i> Join Us Today!
        </span>
        <span class="mx-8 text-xl md:text-2xl font-semibold text-blue-700 flex items-center">
          <i class="fas fa-bolt text-orange-400 mr-2"></i> Empowering Communities
        </span>
        <span class="mx-8 text-xl md:text-2xl font-semibold text-orange-500 flex items-center">
          <i class="fas fa-leaf text-green-500 mr-2"></i> Sustainable Development
        </span>
        <span class="mx-8 text-xl md:text-2xl font-semibold text-pink-600 flex items-center">
          <i class="fas fa-users text-blue-400 mr-2"></i> Join Us Today!
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
.marquee {
  display: flex;
  width: max-content;
  animation: marquee 18s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
section {
  border-radius: 1rem;
}
</style> 