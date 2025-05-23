<template>
  <section class="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 right-10 w-40 h-40 bg-orange-100 rounded-full opacity-20 animate-float-slow"></div>
      <div class="absolute bottom-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float-medium"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="max-w-5xl mx-auto">
        <!-- Quote Mark -->
        <div 
          class="text-9xl text-orange-200 absolute -top-10 left-0"
          v-motion
          :initial="{ opacity: 0, scale: 0.5 }"
          :enter="{ opacity: 1, scale: 1 }"
        >
          "
        </div>

        <div class="grid lg:grid-cols-5 gap-12 items-center">
          <!-- Leader Image -->
          <div 
            class="lg:col-span-2"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0 }"
          >
            <div class="relative">
              <div class="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/Richmarg.jpeg" 
                  alt="Founder" 
                  class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                >
              </div>
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full opacity-10"></div>
            </div>
          </div>

          <!-- Message Content -->
          <div 
            class="lg:col-span-3 space-y-6"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0 }"
            :delay="200"
          >
            <h2 class="text-4xl font-bold text-gray-800 mb-8">A Message from Our Founder</h2>
            
            <div class="space-y-6 text-gray-600 leading-relaxed">
              <p>
                We are dedicated to addressing the socio-economic challenges within our community by empowering indigent individuals with life-changing skills and social aid, while extending care and support to retired teachers living in challenging conditions due to the current harsh economy.
              </p>
              
              <p>
                This initiative will create a ripple effect of transformation by uplifting vulnerable individuals and honoring the invaluable contributions of our educators.
              </p>
              
              <p class="text-lg font-medium text-gray-700">
                We are calling on philanthropists, corporate entities, and community leaders to partner with us in this noble cause. Be a part of something bigger than our individual interest and let's collectively bring hope to the lives of these beneficiaries and give them a reason to believe in humanity.
              </p>
            </div>

            <!-- Signature Area -->
            <div class="pt-4 space-y-2">
              <img 
                src="/images/signature.png" 
                alt="Signature" 
                class="h-16 mb-2"
              >
              <h3 class="text-xl font-bold text-gray-800">Mr. Richard Idemudia</h3>
              <p class="text-gray-600">Founder & Executive Director</p>
            </div>

            <!-- Call to Action -->
            <div class="pt-4">
              <button class="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors group">
                Join Our Cause
                <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>