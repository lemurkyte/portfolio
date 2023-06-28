<script setup>
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to collaborate or
        have any questions? Write me a message!</p>
        <form name="contact" method="POST" action="/success" id="form1"  data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
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