<template>
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto text-center">
      <p class="text-sm">
        © {{ new Date().getFullYear() }} NotifiAI. All rights reserved.
      </p>
      <div class="mt-2">
        <a href="/privacy" class="text-yellow-400 hover:underline"
          >Privacy Policy</a
        >
        |
        <a href="/terms" class="text-yellow-400 hover:underline"
          >Terms of Service</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Force footer to stick at the bottom */
footer {
  margin-top: auto;
}
</style>
