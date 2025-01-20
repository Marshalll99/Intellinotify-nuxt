<template>
  <div
    class="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-800 text-white flex flex-col items-center justify-center"
  >
    <!-- Loading Spinner -->
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-white"
    >
      <div class="flex flex-col items-center space-y-4">
        <div
          class="animate-spin rounded-full h-20 w-20 border-t-4 border-indigo-600"
        ></div>
        <p class="text-gray-800 font-semibold text-lg">Launching NotifiAI...</p>
      </div>
    </div>

    <!-- Unified Landing Page Content -->
    <div v-else class="text-center space-y-12 px-6 max-w-6xl">
      <!-- Hero Section -->
      <div
        class="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-lg shadow-xl py-16 px-8 text-white"
      >
        <!-- Decorative Blurs -->
        <div
          class="absolute inset-0 flex justify-center items-center pointer-events-none"
        >
          <div
            class="w-96 h-96 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"
          ></div>
          <div
            class="w-72 h-72 bg-white bg-opacity-20 rounded-full blur-2xl animate-pulse"
          ></div>
        </div>

        <!-- Hero Content -->
        <div class="relative z-10">
          <h1 class="text-5xl sm:text-6xl font-extrabold">
            Welcome to
            <span class="text-yellow-300">NotifiAI</span>
          </h1>
          <p class="mt-4 text-lg sm:text-xl font-light">
            Revolutionizing notifications with AI: Summaries, real-time updates,
            and seamless interactions—personalized for you.
          </p>
          <!-- Call to Action Buttons -->
          <div class="mt-8 flex justify-center space-x-4">
            <button
              class="px-8 py-4 bg-yellow-300 text-indigo-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
            >
              Get Started
            </button>
            <button
              class="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105"
        >
          <h3 class="text-xl font-semibold text-indigo-600">AI Summaries</h3>
          <p class="mt-2 text-sm">
            Instant insights with powerful summarization AI, saving you time and
            effort.
          </p>
        </div>
        <div
          class="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105"
        >
          <h3 class="text-xl font-semibold text-indigo-600">
            Smart Notifications
          </h3>
          <p class="mt-2 text-sm">
            Stay informed with intelligent notifications across academics, jobs,
            and more.
          </p>
        </div>
        <div
          class="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105"
        >
          <h3 class="text-xl font-semibold text-indigo-600">
            Chatbot Assistance
          </h3>
          <p class="mt-2 text-sm">
            Engage effortlessly with our AI-powered chatbot for real-time
            answers.
          </p>
        </div>
      </div>

      <!-- Call-to-Action -->
      <div>
        <button
          class="px-10 py-4 bg-indigo-500 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-600 transition"
        >
          Explore NotifiAI
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true, // Simulate loading state
    };
  },
  mounted() {
    // Simulate loading for 3 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },
};
</script>

<style>
/* Optional styles for loading spinner */
.animate-spin {
  border-right-color: transparent;
  border-radius: 50%;
}
</style>
