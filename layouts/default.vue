<template>
  <div>
    <header :class="['w-full py-4 transition-all duration-300', isScrolled ? 'fixed top-0 left-0 z-50 bg-white shadow-md' : '']">
      <nav class="container mx-auto px-4 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center">
          <img src="@/assets/images/logo.jpg" alt="Logo" class="h-16 w-20" />
        </NuxtLink>

        <div class="hidden lg:flex items-center space-x-10">
          <NuxtLink v-for="item in menuItems" 
            :key="item.title"
            :to="item.path"
            class="text-gray-700 hover:text-blue-400 transition-colors group relative"
          >
            {{ item.title }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </div>

        <div class="hidden lg:flex items-center space-x-4">
          <a href="tel:+2349131712696" class="text-blue-400">
            <i class="fas fa-phone-alt"></i>
          </a>
          <a href="richmargeducationalconsult@gmail.com" class="text-blue-400">
            <i class="fas fa-envelope"></i>
          </a>
        </div>

        <button @click="toggleMobileMenu" class="lg:hidden text-blue-400">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </nav>
    </header>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="lg:hidden fixed inset-0 z-50 bg-white">
      <div class="p-4">
        <button @click="toggleMobileMenu" class="absolute top-4 right-4 text-gray-700">
          <i class="fas fa-times text-2xl"></i>
        </button>
        <div class="flex flex-col space-y-4 mt-16">
          <NuxtLink v-for="item in menuItems" 
            :key="item.title"
            :to="item.path"
            class="text-gray-700 hover:text-orange-500 transition-colors py-2"
            @click="toggleMobileMenu"
          >
            {{ item.title }}
          </NuxtLink>
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
const isMobileMenuOpen = ref(false)

const menuItems = [
  { title: 'About', path: '/about' },
  { title: 'The BYW Iniatives', path: '/fate-school' },
  { title: 'Insights', path: '/fate-institute' },
  { title: 'Our Impacts', path: '/fate-giving' },
  { title: 'Donation', path: '/resources' },
  { title: 'Contact', path: '/media' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>