<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <div class="container mx-auto py-12 px-6 lg:px-12">
      <!-- Page Title -->
      <h1 class="text-4xl font-bold text-center mb-8 text-indigo-600">
        Our Features
      </h1>
      <p class="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Discover the innovative features that make NotifiAI stand out. Explore
        how our platform transforms notifications and enhances your experience.
      </p>
      <!-- Feature Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="AI-Powered Summaries"
          description="Save time with instant AI-generated summaries tailored to your needs."
          icon="fas fa-brain"
        />
        <FeatureCard
          title="Smart Notifications"
          description="Get intelligent, real-time updates across various domains."
          icon="fas fa-bell"
        />
        <FeatureCard
          title="Interactive Chatbot"
          description="Engage with our AI chatbot for seamless interactions and insights."
          icon="fas fa-comments"
        />
        <FeatureCard
          title="Custom Alerts"
          description="Personalize alerts to keep track of what matters most to you."
          icon="fas fa-user-cog"
        />
        <FeatureCard
          title="Scalable Solutions"
          description="Designed to grow with your needs using advanced cloud infrastructure."
          icon="fas fa-cloud"
        />
        <FeatureCard
          title="Future-Ready Features"
          description="Stay ahead with continuous updates and cutting-edge AI tools."
          icon="fas fa-rocket"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FeatureCard from "@/components/FeatureCard.vue";

export default {
  components: {
    FeatureCard,
  },
};
</script>

<style>
/* Page-specific styles if needed */
</style>
