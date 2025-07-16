<template>
  <div>
    <!-- Top Bar -->
<div :class="['w-full bg-blue-400 px-5 py-2 hidden md:block', !isAtHero ? 'hidden' : '']">
  <div class="container mx-auto px-4 flex justify-between items-center">
    <div class="flex items-center space-x-6">
      <div class="flex items-center space-x-2">
        <i class="fas fa-map-marker-alt text-white"></i>
        <span class="text-white">Ado-Ekiti, Nigeria</span>
      </div>
      <div class="flex items-center space-x-2">
        <i class="fas fa-envelope text-white"></i>
        <span class="text-white">richmargeducationalconsult@gmail.com</span>
      </div>
      <div class="flex items-center space-x-2">
        <i class="fas fa-phone text-white"></i>
        <span class="text-white">+234 9131712696</span>
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <a href="#" class="text-white hover:text-orange-400"><i class="fab fa-facebook"></i></a>
      <a href="#" class="text-white hover:text-orange-400"><i class="fab fa-twitter"></i></a>
      <a href="#" class="text-white hover:text-orange-400"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</div>

<!-- Main Navigation -->
<header :class="['py-4 transition-all duration-300', 
  isAtHero ? 'absolute py-0 bg-white left-0 right-0 top-10 z-50 overflow-hidden' : 'fixed top-0 left-0 z-50 w-full bg-white shadow-md']">
  <nav class="container mx-auto px-4">
    <div class="flex items-center justify-between">
      <NuxtLink to="/" class="flex text-white items-center">
        <img src="@/assets/images/logo_1.png" alt="Logo" class="h-16 w-20" />
      </NuxtLink>


      <div class="hidden lg:flex items-center space-x-8">
        <NuxtLink v-for="item in menuItems" 
          :key="item.title"
          :to="item.path"
          class="text-gray-400 hover:text-blue-400 transition-colors group relative py-2"
        >
          {{ item.title }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </NuxtLink>
      </div>
      <div class="hidden lg:flex items-center space-x-4">
        <NuxtLink to="/donate" class="bg-blue-400 text-white px-6 py-2 rounded-full hover:border-blue-400 hover:bg-white hover:text-blue-400 transition-colors">
          Donate Now
        </NuxtLink>
        <NuxtLink to="/join" class="border-2 border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:bg-blue-400 hover:text-white transition-colors">
          Join Us
        </NuxtLink>
      </div>

      <button @click="toggleMobileMenu" class="lg:hidden text-blue-400">
        <i class="fas fa-bars text-3xl"></i>
      </button>
    </div>
    </nav>
</header>

<!-- Mobile Menu -->
<!-- Mobile Menu -->
<div v-if="isMobileMenuOpen" class="lg:hidden fixed inset-0 bg-blue-400">
  <div class="h-full flex flex-col">
    <div class="p-4 flex justify-end">
      <button @click="toggleMobileMenu" class="text-white">
        <i class="fas fa-times text-3xl"></i>
      </button>
    </div>
    
    <div class="flex-1 flex flex-col px-8 py-4">
      <NuxtLink 
        v-for="item in menuItems" 
        :key="item.title"
        :to="item.path"
        class="text-white text-xl py-3 border-b border-blue-800 hover:text-orange-400 transition-colors"
        @click="toggleMobileMenu"
      >
        {{ item.title }}
      </NuxtLink>
      
      <!-- Social Media Icons -->
      <div class="mt-8">
        <div class="flex justify-center space-x-8">
          <a href="#" class="text-white hover:text-orange-400 text-2xl"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white hover:text-orange-400 text-2xl"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white hover:text-orange-400 text-2xl"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white hover:text-orange-400 text-2xl"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>

    <main>
      <slot />
    </main>


  <!-- Footer -->
    <footer class="bg-gray-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div>
            <img src="@/assets/images/logo_1.png" alt="Logo" class="h-20 mb-4">
            <p class="text-gray-400">
              Empowering communities through strategic initiatives and sustainable development.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors">About Us</NuxtLink></li>
              <li><NuxtLink to="/initiatives" class="text-gray-400 hover:text-white transition-colors">Our Initiatives</NuxtLink></li>
              <li><NuxtLink to="/impact" class="text-gray-400 hover:text-white transition-colors">Our Impact</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</NuxtLink></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <ul class="space-y-2  text-gray-400">
              <li class="flex items-center">
                <i class="fas fa-map-marker-alt w-6 "></i>
                19. Igbalaye Street Opposite EKUSUTH,
Adebayo Road, Ado-Ekiti
Ekiti State, Nigeria 
              </li>
              <li class="flex items-center">
                <i class="fas fa-phone w-6"></i>
                +234 9131712696
              </li>
              <li class="flex items-center">
                <i class="fas fa-envelope w-6"></i>
                richmargeducationalconsult@gmail.com
              </li>
            </ul>
          </div>

          <!-- Social Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-800 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400">© 2025 Beyond Words Network. All rights reserved.</p>
            <div class="flex space-x-4 mt-4 md:mt-0">
              <NuxtLink to="/privacy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</NuxtLink>
              <NuxtLink to="/terms" class="text-gray-400 hover:text-white transition-colors">Terms of Service</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isScrolled = ref(false)
const isAtHero = ref(true)
const isMobileMenuOpen = ref(false)


const menuItems = [
  { title: 'ABOUT', path: '/about' },
  { title: 'THE BYW INITIATIVE', path: '/fate-school' },
  { title: 'INSIGHTS', path: '/fate-institute' },
  { title: 'OUR IMPACTS', path: '/fate-giving' },
  { title: 'DONATION', path: '/resources' },
  { title: 'CONTACT', path: '/media' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    const heroHeight = window.innerHeight
    isScrolled.value = window.scrollY > 50
    isAtHero.value = window.scrollY < heroHeight
  })
})
</script>