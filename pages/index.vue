<template>
  <div class="w-full">
    <HomeHero></HomeHero>
    <HomeIntro></HomeIntro>
    <HomeMission></HomeMission>
    <HomeSdg></HomeSdg>
    <HomeImpacts></HomeImpacts>
    <HomeCta></HomeCta>
    
    
    

  </div>
</template>

<script>
export default {
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
