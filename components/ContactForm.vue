<script setup>
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to collaborate or
        have any questions? Write me a message!</p>
        <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="ContactForm" />
        <div>
          <label >Your email</label>
          <input type="email" name="email"
            
            placeholder="name@flowbite.com" required>
        </div>
        <div>
          <label >Subject</label>
          <input type="text" id="subject"
            placeholder="Let me know how I can help you" required>
        </div>
        <div class="sm:col-span-2">
          <label >Your
            message</label>
          <textarea name="message" id="message" rows="6"
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

button {
  width: 150px;
  color: #333447;
  background: #D1C0A8;
  border-radius: 5px;
  border: solid 1px #D1C0A8;
  padding: 10px;
  margin-top: 20px;
  font-weight: 400;
}

button:hover {
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