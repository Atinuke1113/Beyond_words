<template>
  <section class="py-18 pb-5 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-40 h-40 bg-red-100 rounded-full opacity-30 animate-float-slow"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-30 animate-float-medium"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-16">
        <h2 
          class="text-4xl font-bold text-gray-800"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          Our Vision & Mission
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Vision Card -->
        <div 
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="200"
        >
          <div class="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          
          <div class="relative">
            <div class="text-orange-500 text-4xl mb-6">
              <i class="fas fa-eye"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Vision</h3>
            <p class="text-gray-600 leading-relaxed">
             Empowering a society where inclusive education, gender equality, and sustainable practices thrive, fostering a brighter future for all Nigerians.
            </p>
          </div>
        </div>

        <!-- Mission Card -->
        <div 
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          
          <div class="relative">
            <div class="text-blue-400 text-4xl mb-6">
              <i class="fas fa-rocket"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Mission</h3>
            <p class="text-gray-600 leading-relaxed">
            "Beyond Words Network NG" is committed to advancing the United
Nations' Sustainable Development Goals (SDGs), with a focus on quality
education (SDG 4), gender equality (SDG 5), and climate action (SDG
13). We strive to create a culture of inclusivity, social justice, and
environmental stewardship through advocacy, education, and
community engagement.
            </p>
          </div>
        </div>

        <!-- Objectives Card -->
        <div 
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="600"
        >
          <div class="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          
          <div class="relative">
            <div class="text-orange-500 text-4xl mb-6">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Core Objectives</h3>
            <ul class="text-gray-600 space-y-3">
              <li class="flex items-center">
                <i class="fas fa-check text-blue-400 mr-2"></i>
               Improve access to quality education for marginalized
communities, particularly girls and women
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-blue-400 mr-2"></i>
                . Promote gender equality and challenge discriminatory norms
and practices.
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-blue-400 mr-2"></i>
           Support climate action and environmental sustainability
initiatives in Nigeria.
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-blue-400 mr-2"></i>
           Strengthen community engagement and social justice
movements in Nigeria.
              </li>
            </ul>
          </div>
        </div>
      </div>

      

    </div>
  </section>
</template>

<script setup>
const stats = [
  { number: '1000', label: 'Teachers Trained' },
  { number: '500', label: 'Businesses Launched' },
  { number: '50', label: 'Partner Organizations' },
  { number: '2', label: 'Years of Impact' },
]
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 10px 30px -3px rgba(0, 0, 0, 0.1);
}

.shadow-xl {
  box-shadow: 0 20px 40px -3px rgba(0, 0, 0, 0.15);
}
</style>