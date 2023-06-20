<template>
  <section>
    <div>
      <p>Want to collaborate or have any questions? Write me a message!</p>
      <form name="contact" method="POST" data-netlify="true" action="#" class="space-y-8">
        <div>
          <label for="email">Your email</label>
          <input type="email" id="email" name="email" placeholder="name@flowbite.com" required>
        </div>
        <div>
          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Let us know how we can help you" required>
        </div>
        <div>
          <label for="message">Your message</label>
          <textarea id="message" name="message" rows="6" placeholder="Leave a comment..."></textarea>
        </div>
        <div>
          <button type="submit">Send message</button>
        </div>
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