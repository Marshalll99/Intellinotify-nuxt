<template>
  <header
    class="relative bg-gradient-to-r from-blue-800 via-purple-700 to-indigo-700 text-white py-16"
  >
    <!-- Decorative Background -->
    <div class="absolute inset-0 opacity-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        class="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.1" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
          </radialGradient>
        </defs>
        <circle cx="400" cy="300" r="300" fill="url(#grad)" />
      </svg>
    </div>

    <!-- Header Content -->
    <div
      class="relative z-10 container mx-auto flex flex-col items-center text-center space-y-8 px-6"
    >
      <!-- Tagline -->
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide"
      >
        Notifications, <span class="text-yellow-400">Reimagined</span>
      </h1>
      <p class="text-lg md:text-xl font-light max-w-2xl">
        Personalize your updates with NotifiAI. Smarter, faster, and tailored
        for every moment.
      </p>

      <!-- Call-to-Action Buttons -->
      <div class="flex justify-center space-x-4">
        <a
          href="/explore"
          class="px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-200"
        >
          Explore Now
        </a>
        <a
          href="/features"
          class="px-6 py-3 bg-indigo-100 text-indigo-800 font-semibold rounded-lg shadow-lg hover:bg-indigo-200 transition duration-200"
        >
          Learn More
        </a>
      </div>

      <!-- Dynamic Message -->
      <div
        class="mt-10 bg-indigo-800 bg-opacity-50 px-6 py-4 rounded-lg shadow-md"
      >
        <p class="text-sm sm:text-base font-medium">
          Did you know? NotifiAI analyzes over
          <span class="text-yellow-400 font-bold">{{ dynamicNumber }}</span>
          notifications every day to simplify your life.
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      dynamicNumber: this.generateDynamicNumber(),
    };
  },
  methods: {
    generateDynamicNumber() {
      // Generate a dynamic number for engaging content
      return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000; // Random number between 1,000 and 10,000
    },
  },
  mounted() {
    // Optionally refresh the number periodically (e.g., every 10 seconds)
    setInterval(() => {
      this.dynamicNumber = this.generateDynamicNumber();
    }, 10000);
  },
};
</script>

<style scoped>
/* Styling to ensure visuals stand out */
header {
  position: relative;
  overflow: hidden;
}
</style>
