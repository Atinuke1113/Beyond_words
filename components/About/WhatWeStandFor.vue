<template>
  <section class="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-float-slow"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-20 animate-float-medium"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-16">
        <h2 
          class="text-4xl font-bold text-gray-800 mb-6"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          What We Stand For
        </h2>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Vision Card -->
        <div 
          class="relative group"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="200"
        >
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-blue-400">
            <div class="text-blue-400 text-4xl mb-6">
              <i class="fas fa-eye"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
            <div class="space-y-4 text-gray-600">
              <p>Empowering a society where inclusive education, gender equality, and
sustainable practices thrive, fostering a brighter future for all Nigerians.</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-400 mt-1 mr-2"></i>
                  <span>Creating lasting positive change</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-400 mt-1 mr-2"></i>
                  <span>Building resilient communities</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-400 mt-1 mr-2"></i>
                  <span>Fostering sustainable development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Mission Card -->
        <div 
          class="relative group"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-orange-500">
            <div class="text-orange-500 text-4xl mb-6">
              <i class="fas fa-rocket"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <div class="space-y-4 text-gray-600">
              <p>To empower individuals and communities through innovative programs and sustainable solutions. We strive to create a culture of inclusivity, social justice, and
environmental stewardship through advocacy, education, and
community engagement.</p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-orange-500 mt-1 mr-2"></i>
                  <span>Promoting inclusive and equitable quality education (SDG 1)</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-orange-500 mt-1 mr-2"></i>
                  <span>Advocating for gender equality and women's empowerment(SDG 4)</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-orange-500 mt-1 mr-2"></i>
                  <span>Supporting climate action and environmental sustainability (SDG 5)</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-orange-500 mt-1 mr-2"></i>
                  <span>Fostering a culture of social justice, human rights, and community engagement(SDG 13)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Objectives Card -->
        <div 
          class="relative group"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="600"
        >
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-blue-400">
            <div class="text-blue-400 text-4xl mb-6">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Our Objectives</h3>
            <div class="space-y-4 text-gray-600">
              <ul class="space-y-2">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-400 mt-1 mr-2"></i>
                  <span>Improve access to quality education for marginalized communities, particularly girls and women.</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-400 mt-1 mr-2"></i>
                  <span>Promote gender equality and challenge discriminatory norms and practices.</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-400 mt-1 mr-2"></i>
                  <span>Support climate action and environmental sustainability initiatives in Nigeria.</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-400 mt-1 mr-2"></i>
                  <span>Strengthen community engagement and social justice movements in Nigeria.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>