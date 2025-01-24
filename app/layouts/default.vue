<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-800">
    <!-- Navbar -->
    <Navbar />

    <!-- Conditionally Render Header Section -->
    <HeaderSection v-if="$route.name !== 'index'" />

    <!-- Main Content Wrapper -->
    <main class="flex-1 container mx-auto py-8 px-6 lg:px-12">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    HeaderSection,
    Footer,
  },
};
</script>

<style>
/* Ensure the footer sticks to the bottom when content is small */
html,
body {
  height: 100%;
}
</style>
