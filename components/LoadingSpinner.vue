<template>
  <div
    class="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-indigo-700 to-purple-800"
  >
    <div class="flex flex-col items-center space-y-4">
      <div
        class="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400"
      ></div>
      <p class="text-white font-semibold text-lg">Launching NotifiAI...</p>
    </div>
  </div>
</template>

<style scoped>
.animate-spin {
  border-right-color: transparent;
  border-radius: 50%;
}
</style>
