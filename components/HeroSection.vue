<template>
  <div
    class="relative text-white bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-500 p-16 rounded-lg shadow-lg overflow-hidden"
  >
    <!-- Animated Background Blobs -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="bg-yellow-300 opacity-20 blur-3xl rounded-full w-96 h-96 animate-blob"
      ></div>
      <div
        class="bg-purple-400 opacity-30 blur-2xl rounded-full w-72 h-72 animate-blob2"
      ></div>
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 text-center">
      <h1 class="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
        Welcome to <span class="text-yellow-300">NotifiAI</span>
      </h1>
      <p class="text-lg sm:text-xl font-light mb-8">
        Revolutionizing notifications with AI: Personalized summaries, real-time
        updates, and effortless interactions.
      </p>
      <div class="flex justify-center space-x-4">
        <a
          href="/get-started"
          class="px-6 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition"
        >
          Get Started
        </a>
        <a
          href="/about"
          class="px-6 py-3 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes blob {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(20px) translateY(-20px);
  }
}
.animate-blob {
  animation: blob 6s infinite;
}
.animate-blob2 {
  animation: blob 8s infinite;
}
</style>
