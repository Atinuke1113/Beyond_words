<template>
  <div class="w-full">
    <HomeHero></HomeHero>
    <HomeCtaBanner />
    <HomeIntro></HomeIntro>
    <HomeSdg></HomeSdg>
    <HomeStrategiesSection></HomeStrategiesSection>
    <HomeFeaturedInitiatives></HomeFeaturedInitiatives>
    <HomePartners></HomePartners>
  <HomeVideoSection></HomeVideoSection>
  </div>
</template>

<script>
export default {
  components: {
    HomeCtaBanner: () => import('~/components/Home/CtaBanner.vue'),
  },
  setup() {
    definePageMeta({
      layout: "default",
      // middleware: ["authguard"],
    });
  },
  data: () => ({}),
  mounted() {},
};
</script>

<style></style>
