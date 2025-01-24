<template>
  <div class="min-h-screen flex flex-col">
    <!-- Main Content -->
    <Nuxt />
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from "~/components/FooterSection.vue";

export default {
  components: {
    FooterSection,
  },
};
</script>

<style scoped>
.min-h-screen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
