<template>
  <div>
    <!-- Landing Page Content -->
    <div>
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
    </div>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import CallToAction from "@/components/CallToAction.vue";

export default {
  components: {
    HeroSection,
    FeaturesSection,
    CallToAction,
  },
};
</script>
