<template>
  <div>
    <!-- Loading Spinner -->
    <LoadingSpinner v-if="isLoading" />

    <!-- Landing Page Content -->
    <div v-else>
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import HeroSection from "@/components/HeroSection.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import CallToAction from "@/components/CallToAction.vue";

export default {
  components: {
    LoadingSpinner,
    HeroSection,
    FeaturesSection,
    CallToAction,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 10); // Simulate a loading state for 1.5 seconds
  },
};
</script>
