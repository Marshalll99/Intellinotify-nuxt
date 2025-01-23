<template>
  <div
    class="bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105"
  >
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Feature Image"
      class="w-20 h-20 mx-auto mb-4 object-cover"
    />
    <h3 class="text-xl font-semibold text-indigo-600">{{ title }}</h3>
    <p class="mt-2 text-sm text-gray-600">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: null, // Handle cases where the image URL is missing
    },
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
