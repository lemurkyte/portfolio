<template>
  <section>
    <div>
      <p>Want to collaborate or have any questions? Write me a message!</p>
      <form name="contact" method="POST" data-netlify="true">
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