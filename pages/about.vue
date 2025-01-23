<template>
  <section
    class="bg-gradient-to-b from-indigo-50 to-indigo-100 py-16 px-8 lg:px-16"
  >
    <div class="max-w-7xl mx-auto text-center space-y-10">
      <!-- Heading -->
      <h1 class="text-4xl md:text-5xl font-extrabold text-indigo-700">
        About <span class="text-yellow-500">NotifiAI</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
        NotifiAI is revolutionizing how you stay updated. With AI-driven
        notifications, real-time summaries, and smart interactions, we bring you
        closer to the information you need.
      </p>

      <!-- Features Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Our Mission"
          description="Empowering individuals and organizations with real-time, personalized notifications."
        />
        <FeatureCard
          title="Our Vision"
          description="A world where you never miss an update that matters, driven by intelligent technology."
        />
        <FeatureCard
          title="Core Values"
          description="Innovation, transparency, and user-centric solutions at every step."
        />
      </div>

      <!-- Call to Action -->
      <div class="mt-12">
        <NuxtLink
          to="/contact"
          class="px-10 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition"
        >
          Contact Us
        </NuxtLink>
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

<style scoped>
h1 {
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
}
p {
  margin-bottom: 2rem;
}
</style>
