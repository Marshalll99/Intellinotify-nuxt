<template>
  <section class="py-16 px-8 bg-gray-50">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold text-indigo-700 mb-8">Our Features</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="AI Summaries"
          description="Instant insights with powerful summarization AI, saving you time and effort."
          imageUrl="https://cdn-icons-png.flaticon.com/512/1021/1021220.png"
        />
        <FeatureCard
          title="Smart Notifications"
          description="Stay informed with intelligent notifications across academics, jobs, and more."
          imageUrl="https://cdn-icons-png.flaticon.com/512/3260/3260307.png"
        />
        <FeatureCard
          title="Chatbot Assistance"
          description="Engage effortlessly with our AI-powered chatbot for real-time answers."
          imageUrl="https://cdn-icons-png.flaticon.com/512/5994/5994892.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FeatureCard from "@/components/FeatureCard.vue";

export default {
  components: {
    FeatureCard,
  },
};
</script>
