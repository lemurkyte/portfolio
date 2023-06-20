<script setup>
import { onMounted } from 'vue';

// Add an onMounted hook to initialize the Netlify form submission
onMounted(() => {
  const form = document.querySelector('form[name="contact"]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Submit the form via Netlify's form submission API
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        // Handle the successful form submission (e.g., show a success message)
        console.log('Form submitted successfully!');
      })
      .catch((error) => {
        // Handle the form submission error (e.g., display an error message)
        console.error('Form submission error:', error);
      });
  });
});
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to collaborate or have any questions? Write me a message!</p>
      <form name="contact" netlify netlify-honeypot="bot-field" class="space-y-8">
        <!-- Add a hidden input field for Netlify form handling -->
        <input type="hidden" name="form-name" value="contact">
        <!-- Add a hidden input field for Netlify form handling -->
        <div style="display: none;">
          <label>Don't fill this out if you're human: <input name="bot-field"></label>
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input type="email" id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com" required>
        </div>
        <div>
          <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
          <input type="text" id="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you" required>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
            message</label>
          <textarea id="message" rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."></textarea>
        </div>
        <button type="submit" class="button">Send message</button>
      </form>
    </div>
  </section>
</template>



<style scoped>
p {
  color: black;
}

.button {
  width: 150px;
  color: #333447;
  background: #D1C0A8;
  border-radius: 5px;
  border: solid 1px #D1C0A8;
  padding: 10px;
  margin-top: 20px;
  font-weight: 400;
}

.button:hover {
  width: 150px;
  color: white;
  background-color: #333447;
  border-radius: 6px;
  padding: 10px;
  border: none;
  margin-top: 20px;
  font-weight: 400;
}
</style>