<template>
  <div class="min-h-screen flex flex-col">
    <div class="bg-indigo-600 text-white py-16 text-center">
      <h1 class="text-5xl font-bold">Get Started</h1>
      <p class="mt-4 text-lg">
        Begin your journey with NotifiAI in a few simple steps.
      </p>
    </div>
    <div class="container mx-auto py-12 px-6 lg:px-12 space-y-8">
      <StepCard
        number="1"
        title="Sign Up"
        description="Create your account to access personalized notifications and features."
      />
      <StepCard
        number="2"
        title="Customize"
        description="Set your preferences to tailor your experience."
      />
      <StepCard
        number="3"
        title="Enjoy"
        description="Sit back and let NotifiAI handle the rest."
      />
    </div>
  </div>
</template>

<script>
import StepCard from "@/components/StepCard.vue";

export default {
  components: {
    StepCard,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
