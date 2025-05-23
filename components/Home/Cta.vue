<template>
  <section class="py-24 bg-gradient-to-br from-blue-300 to-blue-600 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 left-10 w-40 h-40 bg-orange-500 rounded-full opacity-5 animate-float-slow"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-white rounded-full opacity-5 animate-float-medium"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="max-w-4xl mx-auto">
        <!-- Newsletter Subscription -->
        <div 
          class="text-center mb-20"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          <h2 class="text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p class="text-blue-100 text-lg mb-8">
            Stay updated with our latest initiatives and make a difference in your community
          </p>
          
          <form @submit.prevent="subscribeNewsletter" class="max-w-lg mx-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                v-model="email"
                placeholder="Enter your email address"
                class="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
              <button 
                type="submit"
                class="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <!-- Volunteer & Donation Cards -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Volunteer Card -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0 }"
            :delay="300"
            class="group"
          >
            <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="text-4xl text-orange-500 mb-6">
                <i class="fas fa-hands-helping"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Become a Volunteer</h3>
              <p class="text-blue-100 mb-6">
                Join our team of dedicated volunteers and make a direct impact in your community.
              </p>
              <button 
                @click="openVolunteerForm"
                class="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 flex items-center"
              >
                Join as Volunteer
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </button>
            </div>
          </div>

          <!-- Donation Card -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0 }"
            :delay="500"
            class="group"
          >
            <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="text-4xl text-orange-500 mb-6">
                <i class="fas fa-gift"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Make a Donation</h3>
              <p class="text-blue-100 mb-6">
                Support our initiatives through donations and help us create lasting change.
              </p>
              <button 
                @click="openDonationForm"
                class="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 flex items-center"
              >
                Donate Now
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const email = ref('')

const subscribeNewsletter = () => {
  // Handle newsletter subscription
  console.log('Newsletter subscription:', email.value)
  email.value = ''
}

const openVolunteerForm = () => {
  // Handle volunteer form opening
  console.log('Opening volunteer form')
}

const openDonationForm = () => {
  // Handle donation form opening
  console.log('Opening donation form')
}
</script>