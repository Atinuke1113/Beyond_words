<template>
  <section class="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-float-slow"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-green-100 rounded-full opacity-20 animate-float-medium"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 
          class="text-4xl font-bold text-gray-800 mb-6"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          SDG Alignment
        </h2>
        <p 
          class="text-lg text-gray-600"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
          :delay="200"
        >
          Beyond Words Network NG is committed to advancing the following Sustainable Development Goals (SDGs)
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- SDG 1: No Poverty -->
        <div 
          class="group cursor-pointer"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1 }"
          :delay="300"
        >
          <div class="bg-white rounded-2xl p-6 py-9 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            
            <div class="relative">
              <img 
                src="/images/sdg_1.png" 
                alt="SDG 1" 
                class="w-24 h-24 mb-4 mx-auto transform group-hover:scale-110 transition-transform"
              >
              <h3 class="text-xl font-bold mb-3 text-gray-800">No Poverty</h3>
              <p class="text-gray-600">
                Collaborate with local and international organisations to eradicate poverty.
              </p>
            </div>
          </div>
        </div>

        <!-- SDG 4: Quality Education -->
        <div 
          class="group cursor-pointer"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1 }"
          :delay="500"
        >
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            
            <div class="relative">
              <img 
                src="/images/sdg_2.png" 
                alt="SDG 4" 
                class="w-24 h-24 mb-4 mx-auto transform group-hover:scale-110 transition-transform"
              >
              <h3 class="text-xl font-bold mb-3 text-gray-800">Quality Education</h3>
              <p class="text-gray-600">
                Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
              </p>
            </div>
          </div>
        </div>

        <!-- SDG 5: Gender Equality -->
        <div 
          class="group cursor-pointer"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1 }"
          :delay="700"
        >
          <div class="bg-white rounded-2xl p-6 py-12 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            
            <div class="relative">
              <img 
                src="/images/sdg_3.png" 
                alt="SDG 5" 
                class="w-24 h-24 mb-4 mx-auto transform group-hover:scale-110 transition-transform"
              >
              <h3 class="text-xl font-bold mb-3 text-gray-800">Gender Equality</h3>
              <p class="text-gray-600">
                Achieve gender equality and empower all women and girls.
              </p>
            </div>
          </div>
        </div>

        <!-- SDG 13: Climate Action -->
        <div 
          class="group cursor-pointer"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1 }"
          :delay="900"
        >
          <div class="bg-white rounded-2xl p-6 py-12 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            
            <div class="relative">
              <img 
                src="/images/sdg_4.png" 
                alt="SDG 13" 
                class="w-24 h-24 mb-4 mx-auto transform group-hover:scale-110 transition-transform"
              >
              <h3 class="text-xl font-bold mb-3 text-gray-800">Climate Action</h3>
              <p class="text-gray-600">
                Take urgent action to combat climate change and its impacts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Progress Bars -->
      <div class="mt-20 grid md:grid-cols-2 gap-12">
        <div 
          v-for="(goal, index) in goals" 
          :key="index"
          v-motion
          :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="index * 200"
          class="bg-white p-6 rounded-lg shadow-md"
        >
          <div class="flex justify-between mb-2">
            <span class="font-semibold text-gray-700">{{ goal.name }}</span>
            <span class="text-blue-400">{{ goal.progress }}%</span>
          </div>
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              class="h-full bg-blue-400 rounded-full transition-all duration-1000"
              :style="{ width: `${goal.progress}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const goals = [
  { name: 'Poverty Reduction', progress: 75 },
  { name: 'Education Access', progress: 85 },
  { name: 'Gender Equality', progress: 80 },
  { name: 'Climate Action', progress: 70 }
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