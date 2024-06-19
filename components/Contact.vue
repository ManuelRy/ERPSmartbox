<template>
  <section class="bg-white font-poppins">
    <div
      class="container mx-auto overflow-hidden px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
    >
      <div class="flex justify-center">
        <div class="text-center md:max-w-xl lg:max-w-3xl">
          <h1
            class="my-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-blue-900 dark:text-white"
          >
            Contact Us
          </h1>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center">
        <form @submit.prevent="handleSubmit" class="w-full sm:w-10/12 md:w-7/12 lg:w-5/12 sm:px-3 lg:px-6">
          <div class="mb-4 w-full">
            <label class="block font-medium mb-1 text-black" for="nameInput">
              Name
            </label>
            <input
              v-model="name"
              type="text"
              class="px-4 py-2 border w-full outline-none rounded-md"
              id="nameInput"
              placeholder="Name"
            />
          </div>

          <div class="mb-4 w-full">
            <label class="block font-medium mb-1 text-black" for="emailInput">
              Email
            </label>
            <input
              v-model="email"
              type="email"
              class="px-4 py-2 border w-full outline-none rounded-md"
              id="emailInput"
              placeholder="Enter your email address"
            />
          </div>

          <div class="mb-4 w-full">
            <label class="block font-medium mb-1 text-black" for="messageInput">
              Message
            </label>
            <textarea
              v-model="message"
              class="px-4 py-2 border rounded-md w-full outline-none resize-none"
              id="messageInput"
              placeholder="Enter your message"
              rows="6"
            ></textarea>
          </div>

          <button
            type="submit"
            class="inline-block w-full px-6 py-3 mb-4 rounded bg-orange-400 text-white font-medium uppercase leading-normal hover:shadow-md hover:bg-orange-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });

        const result = await response.json();
        if (result.success) {
          alert('Message sent successfully!');
          this.name = '';
          this.email = '';
          this.message = '';
        } else {
          alert('Failed to send message: ' + result.error);
        }
      } catch (error) {
        alert('Failed to send message: ' + error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
