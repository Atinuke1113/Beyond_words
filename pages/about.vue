<template>
  <div class="w-full">
    <AboutHero></AboutHero>
    <AboutWhatWeStandFor></AboutWhatWeStandFor>
    <AboutStrategy></AboutStrategy>
    <AboutLeadership></AboutLeadership>
    
    
    

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
