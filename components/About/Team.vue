<template>
  <section class="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-float-slow"></div>
      <div class="absolute bottom-20 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-20 animate-float-medium"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-16">
        <h2 
          class="text-4xl font-bold text-gray-800 mb-6"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
        >
          Meet Our Team
        </h2>
        <p 
          class="text-lg text-gray-600 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
          :delay="200"
        >
          Dedicated professionals working together to create positive change
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div 
          v-for="(member, index) in team" 
          :key="member.name"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="300 + (index * 100)"
          class="group"
        >
          <div class="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <!-- Image Container -->
            <div class="relative h-80 overflow-hidden">
              <img 
                :src="member.image" 
                :alt="member.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Social Links -->
              <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="flex justify-center space-x-4">
                  <a 
                    v-for="social in member.socials" 
                    :key="social.icon"
                    :href="social.link"
                    class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    <i :class="social.icon"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ member.name }}</h3>
              <p class="text-blue-600 mb-4">{{ member.role }}</p>
              <p class="text-gray-600">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [
  {
    name: 'Dr. Jane Doe',
    role: 'Founder & Executive Director',
    bio: 'With over 15 years of experience in community development and education, Dr. Doe leads our strategic initiatives.',
    image: '/images/team/member1.jpg',
    socials: [
      { icon: 'fab fa-linkedin', link: '#' },
      { icon: 'fab fa-twitter', link: '#' },
      { icon: 'fas fa-envelope', link: 'mailto:jane@example.com' }
    ]
  },
  {
    name: 'John Smith',
    role: 'Program Director',
    bio: 'John brings extensive experience in program management and community engagement to our organization.',
    image: '/images/team/member2.jpg',
    socials: [
      { icon: 'fab fa-linkedin', link: '#' },
      { icon: 'fab fa-twitter', link: '#' },
      { icon: 'fas fa-envelope', link: 'mailto:john@example.com' }
    ]
  },
  {
    name: 'Sarah Johnson',
    role: 'Community Relations Manager',
    bio: 'Sarah specializes in building strong community partnerships and implementing outreach programs.',
    image: '/images/team/member3.jpg',
    socials: [
      { icon: 'fab fa-linkedin', link: '#' },
      { icon: 'fab fa-twitter', link: '#' },
      { icon: 'fas fa-envelope', link: 'mailto:sarah@example.com' }
    ]
  }
]
</script>