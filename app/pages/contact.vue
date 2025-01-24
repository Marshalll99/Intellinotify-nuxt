<template>
  <div class="contact-page py-16 bg-white">
    <div
      class="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center"
    >
      <!-- Text Section -->
      <div class="text-section md:w-1/2">
        <h2 class="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <p class="text-gray-700 mb-4">
          Have questions or need support? Reach out to us, and we'll get back to
          you as soon as possible.
        </p>
        <div class="contact-info mt-4">
          <p class="text-gray-700"><strong>Email:</strong> support@notifi.ai</p>
          <p class="text-gray-700"><strong>Phone:</strong> +123 456 7890</p>
        </div>
      </div>
      <!-- Image Section -->
      <div class="image-section md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3416/3416048.png"
          alt="Contact Us"
          class="w-full max-w-md object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  background-color: #ffffff;
}
.image-section img {
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}
.image-section img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
