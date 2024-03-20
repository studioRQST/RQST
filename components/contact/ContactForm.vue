<template>
  <form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="344c1a49-5984-48fa-9681-609c3baeb98c">
    <input type="hidden" name="redirect" value="https://web3forms.com/success">
    <div class="flex-container-contact-form">
      <div class="flex-1">
        <div class="width">
          <label class="title-uppercase bold-weight" for="naam">Naam</label>
          <input type="text" id="naam" name="naam" placeholder="Jouw naam..." required aria-label="Naam">
        </div>
        <div class="width">
          <label class="title-uppercase bold-weight" for="bedrijf">Bedrijfsnaam</label>
          <input type="text" id="bedrijf" name="bedrijf" placeholder="Jouw bedrijfsnaam..." aria-label="Bedrijfsnaam">
        </div>
      </div>

      <div class="flex-2">
        <div class="width">
          <label class="title-uppercase bold-weight" for="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Jouw e-mailadres..." required aria-label="E-mailadres">
        </div>
        <div class="width">
          <label class="title-uppercase bold-weight" for="telefoonnummer">Telefoonnummer</label>
          <input type="tel" id="telefoonnummer" name="telefoonnummer" placeholder="Jouw telefoonnummer..." aria-label="Telefoonnummer">
        </div>
      </div>

      <div>
        <label class="title-uppercase bold-weight" for="bericht">Jouw Request</label>
        <textarea id="bericht" name="bericht" rows="10" cols="100" placeholder="Typ hier jouw request..." required aria-label="Bericht"></textarea>
      </div>

      <!-- hCaptcha Spam Protection -->
      <div class="h-captcha" data-captcha="true" aria-label="Captcha Spam Bescherming"></div>
      <button class="primary-button bold-weight" type="submit">Request Verzenden</button>
    </div>
  </form>
</template>

<style scoped>

    form {
      display: flex;
      justify-content: center;
    }

    .flex-container-contact-form {
      display: flex;
      flex-direction: column;
    }

    .flex-1, .flex-2 {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .width {
      width: 100%;
    }

    label {
      display: block;
      font-size: 1.5rem;
      color: var(--background-dark-purple);
      margin: 0 0 0.7rem 1rem;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    textarea {
      width: 100%;
      background-color: var(--secundair-color-l-purple);
      border: solid 2px var(--second-background);
      border-radius: 10px;
      padding: 1.3rem 1rem 1rem 1rem;
      color: var(--background-dark-purple);
      font-size: 1.2rem;
      font-variation-settings: "wdth" 115, "wght" 400;
      text-align: left;
    }

    input[type="text"]::placeholder,
    input[type="email"]::placeholder,
    input[type="tel"]::placeholder,
    textarea::placeholder {
      color: var(--background-dark-purple);
    }


    input:focus {
      outline: solid 2px var(--background-dark-purple);
    }

    textarea:focus {
      outline: solid 2px var(--background-dark-purple);
    }

    textarea {
      resize: none;
    }

    button {
      max-width: 20rem;
      margin: auto;
      background-color: var(--second-background);
      color: var(--teriary-color-yellow);
      border: solid 2px var(--second-background);
      margin-top: 3rem;
    }

    button:hover {
      background-color: var(--secundair-color-l-purple);
      color: var(--second-background);
      border: solid 2px var(--second-background);
    }

    /* MOBILE L */
    @media screen and (max-width: 30rem) {
      .flex-1, .flex-2{
        flex-direction: column;
      }
    }

</style>
