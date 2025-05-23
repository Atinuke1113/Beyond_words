<template>
  <section class="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-10 blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-20">
        <h2 
          class="text-4xl font-bold text-gray-800 mb-6"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          Our Strategic Approach
        </h2>
       
      </div>

      <!-- Strategy Items -->
      <div class="space-y-24">
        <div 
          v-for="(strategy, index) in strategies" 
          :key="strategy.title"
          class="relative"
        >
          <!-- Strategy Content -->
          <div 
            class="flex flex-col lg:flex-row items-center gap-12"
            v-motion
            :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }"
            :enter="{ opacity: 1, x: 0 }"
            :delay="300"
          >
            <!-- Icon Section -->
            <div :class="`lg:w-1/3 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`">
              <div 
                class="w-32 h-32 mx-auto rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-500"
                :class="`bg-${strategy.color}-100`"
              >
                <i :class="`${strategy.icon} text-5xl text-${strategy.color}-400`"></i>
              </div>
            </div>

            <!-- Text Content -->
            <div :class="`lg:w-2/3 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`">
              <h3 class="text-3xl font-bold mb-6 text-gray-800">{{ strategy.title }}</h3>
              <p class="text-lg text-gray-600 mb-8">{{ strategy.description }}</p>
              
              <div class="grid md:grid-cols-2 gap-4">
                <div 
                  v-for="point in strategy.points" 
                  :key="point"
                  class="flex items-start space-x-3 group"
                >
                  <div :class="`flex-shrink-0 w-8 h-8 rounded-full bg-${strategy.color}-100 flex items-center justify-center transform group-hover:scale-110 transition-transform`">
                    <i :class="`fas fa-check text-sm text-${strategy.color}-600`"></i>
                  </div>
                  <span class="text-gray-600">{{ point }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Connecting Line -->
          <div 
            v-if="index !== strategies.length - 1"
            class="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full"
          >
            <div class="w-px h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const strategies = [
  {
    title: 'Advocacy and Policy Engagement',
    description: 'We work closely with government agencies, civil society organizations, and community leaders to advocate for meaningful policy changes and ensure effective implementation.',
    icon: 'fas fa-gavel',
    color: 'blue',
    points: [
      'Policy research and development',
      'Stakeholder engagement',
      'Legislative advocacy',
      'Implementation monitoring'
    ]
  },
  {
    title: 'Education and Training',
    description: 'Our comprehensive training programs focus on building capacity among educators, community leaders, and youth to promote inclusive education and sustainable development.',
    icon: 'fas fa-graduation-cap',
    color: 'orange',
    points: [
      'Teacher development programs',
      'Youth leadership training',
      'Environmental education',
      'Digital skills workshops'
    ]
  },
  {
    title: 'Community Engagement',
    description: 'Through targeted community initiatives, we raise awareness and promote active participation in social justice, human rights, and environmental sustainability.',
    icon: 'fas fa-hands-helping',
    color: 'blue',
    points: [
      'Awareness campaigns',
      'Community workshops',
      'Local initiatives',
      'Grassroots movements'
    ]
  },
  {
    title: 'Partnerships and Collaborations',
    description: 'We build strategic partnerships with local and international organizations to maximize our impact and create sustainable change.',
    icon: 'fas fa-handshake',
    color: 'orange',
    points: [
      'Resource sharing',
      'Knowledge exchange',
      'Joint programs',
      'Network building'
    ]
  }
]
</script>