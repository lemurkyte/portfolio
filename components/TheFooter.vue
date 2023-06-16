<script setup lang="ts">
const route = useRoute()
</script>

    <template>
      <!--Footer container-->
<footer class="bg-neutral-900 text-center text-white">
  <div class="container px-6 pt-6">
    <div class="grid gap-4 lg:grid-cols-2">
      <div class="mb-6 md:mb-0">
        <h3 class="mb-2 text-white font-medium uppercase">Address</h3>

        <p class="mb-4 text-white">
          Herredsvej 9,<br>
          Aarhus V 8210 <br>
          Denmark
        </p>
      </div>

      <div class="mb-6 md:mb-0">
        <h3 class="mb-2 text-white font-medium uppercase">Contacts</h3>
        <div class="mb-2 text-white font-medium"> 
        <a href="tel:+4555276879">+45 55 27 68 79</a> <br>
        <a href="mailto:sil.ugne@gmail.com">sil.ugne@gmail.com</a>   <br>
        </div>

        <p class="mb-4 text-white">
          Let's connect and work together!
        </p>
      </div>
    </div>
    <div class="mb-6 flex justify-center">
      <a
        href="https://www.facebook.com/ugne.skarsgard/"
        aria-label="Link to my Facebook account"
        type="button"
        class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          alt="facebook-icon"
          xmlns="http://www.w3.org/2000/svg"
          class="mx-auto h-full w-4"
          fill="white"
          viewBox="0 0 24 24">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/ugnė-šileikytė-1351bb172"
        aria-label="Link to my LinkedIn profile"
        type="button"
        class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          alt="linkedin-icon"
          xmlns="http://www.w3.org/2000/svg"
          class="mx-auto h-full w-4"
          fill="white"
          viewBox="0 0 24 24">
          <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </a>

      <a
        href="https://github.com/lemurkyte"
        aria-label="Link to my GitHub account"
        type="button"
        class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          alt="github-icon"
          xmlns="http://www.w3.org/2000/svg"
          class="mx-auto h-full w-4"
          fill="white"
          viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
  </div>

  <!--Copyright section-->
  <div
    class="text-center">
    © 2023 Copyright:
      Ugne Sileikyte
  </div>
</footer>
       
    </template>

<style scoped>
h3 {
  font-size: 18px;
}
footer {
  background-color: #171717;
  display: flex;
  margin-top: auto;
  padding: 30px;
  text-align: center;
  color: white !important;
  justify-items: center;
  flex-direction: column;
}
.n-link-base {
   text-decoration: none;
   color: white;
   font-family: 'Montserrat', sans-serif; 
   font-size: 22px;
   padding: 20px;
}
a {
  text-decoration: none;
}
.text-center {
  padding: 15px;
  color: lightgray;
}
</style>