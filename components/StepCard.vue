<template>
  <div class="bg-white p-6 rounded-lg shadow-lg flex items-start">
    <div class="text-4xl font-bold text-indigo-500 mr-6">{{ number }}</div>
    <div>
      <h3 class="text-xl font-bold text-gray-800">{{ title }}</h3>
      <p class="mt-2 text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: String,
    title: String,
    description: String,
  },
};
</script>
