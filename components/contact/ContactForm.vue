<script setup lang="ts">

</script>

<template>
  <form action="https://api.web3forms.com/submit" method="POST">

    <input type="hidden" name="access_key" value="344c1a49-5984-48fa-9681-609c3baeb98c">

    <div class="flex-container-contact-form">

      <div class="flex-1">
        <div>
          <label for="naam">Naam:</label>
          <input type="text" id="naam" name="naam" required>
        </div>

        <div>
          <label for="bedrijf">Bedrijf/Instelling:</label>
          <input type="text" id="bedrijf" name="bedrijf">
        </div>
      </div>

      <div class="flex-2">
        <div>
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required>
        </div>

        <div>
          <label for="telefoonnummer">Telefoonnummer:</label>
          <input type="tel" id="telefoonnummer" name="telefoonnummer">
        </div>
      </div>

      <div>
        <label for="bericht">Bericht:</label>
        <textarea id="bericht" name="bericht" rows="4" cols="50" required></textarea>
      </div>

      <!-- hCaptcha Spam Protection -->
      <div class="h-captcha" data-captcha="true"></div>

      <button type="submit">Verstuur</button>
    </div>
  </form>
</template>

<style scoped>

form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-container-contact-form {
  display: flex;
  flex-direction: column;
}

.flex-1, .flex-2 {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}

label {
  display: block;
}

input {

}

textarea {
  resize: none;
}


</style>