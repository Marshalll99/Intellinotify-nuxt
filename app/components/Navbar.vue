<template>
  <nav class="bg-indigo-600 text-white shadow-md">
    <div class="container mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <div class="text-2xl font-bold tracking-wide">
        <a href="/">Notifi<span class="text-yellow-400">AI</span></a>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <a href="/" class="hover:text-yellow-400">Home</a>
        <a href="/about" class="hover:text-yellow-400">About</a>
        <a href="/features" class="hover:text-yellow-400">Features</a>
        <a href="/contact" class="hover:text-yellow-400">Contact</a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="md:hidden focus:outline-none" @click="toggleMenu">
        <span :class="menuOpen ? 'text-yellow-400' : ''">☰</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-indigo-700 text-white space-y-4 p-4"
    >
      <a href="/" class="block hover:text-yellow-400">Home</a>
      <a href="/about" class="block hover:text-yellow-400">About</a>
      <a href="/features" class="block hover:text-yellow-400">Features</a>
      <a href="/contact" class="block hover:text-yellow-400">Contact</a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
