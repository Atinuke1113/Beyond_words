<template>
  <section class="relative w-full h-80 overflow-hidden flex items-center justify-center my-8">
    <!-- Background Video -->
    <video
      class="absolute inset-0 w-full h-full object-cover"
      src="/images/donate.mp4"
      autoplay
      loop
      muted
      playsinline
    ></video>
    <!-- Overlay for readability -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <!-- Content -->
    <div class="relative z-10 text-center text-white px-4">
      <h2 class="text-4xl font-bold mb-2">Get Involved Today, Volunteer, Give and Connect</h2>
      <p class="text-xl mb-4">Join us in making a difference. Your support can change lives!</p>
      <button class="bg-blue-500 hover:bg-blue-400 text-white  font-semibold py-2 px-6 rounded-full shadow">
       Make a Donation
      </button>
    </div>
  </section>
</template>

<script setup>
// No script needed unless you want interactivity
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style> 