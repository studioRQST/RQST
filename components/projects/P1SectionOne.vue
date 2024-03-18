<template>
  <section>
    <div class="container-left">
      <div class="flex-container-text">
        <p class="title-uppercase">Case</p>
        <h2>Annemou</h2>
        <p class="title-uppercase">Expertise</p>
        <div class="sub-tags">
          <div class="tag-line">
            <p>Webdesign</p>
          </div>
          <div class="tag-line">
            <p>Webdevelopment</p>
          </div>
        </div>
      </div>
    </div>
    <div class="image_wrapper">
      <img src="/static/img/annemou-mockup-devices.png" alt="Impressie Website Annemou">
      <div class="overlay overlay_0"></div>
    </div>
  </section>
</template>

<style scoped>

  section {
    background-color: var(--secundair-color-l-purple);
    margin: 2rem;
    border-radius: 15px;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
  }

  p {
    color: var(--background-dark-purple);
  }

  h2 {
    color: var(--background-dark-purple);
    text-transform: uppercase;
    text-align: left;
  }

  .sub-tags{
    display: flex;
    gap: 1rem;
    margin-top: -3rem;
  }

  .tag-line{
    text-transform: lowercase;
    padding: 0.3rem 1.5rem 0.1rem 1.5rem;
    border: solid 2px var(--background-dark-purple);
    border-radius: 25px;
    max-width: fit-content;
  }

  .tag-line p{
    font-size: 1.2rem;
  }

  .container-left {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 15rem;
  }

  .flex-container-text {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: 5rem;
    z-index: 1; 
  }

  .image_wrapper {
    position: relative;
    width: 50%;
    height: 100%;
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100vh;
  }

  .overlay {
    position: absolute;
  }

  .overlay_0 {
    inset: 0;
    opacity: 0.4;
    background: var(--teriary-color-yellow)
  }
 
    /* Media queries voor verschillende schermformaten */
  
    /* LAPTOP */
    @media screen and (max-width: 80rem) {
      h2 {
        font-size: 6rem;
      }
    }
  
    /* TABLET */
    @media screen and (max-width: 60rem) {
      h2 {
        font-size: 5rem;
      }

      section {
        flex-direction: column;
        height: 100vh;
      }

      .container-left {
        position: relative;
        width: 100%;
        height: 60%;
      }

      .image_wrapper {
        width: 100%;
        height: 40%;
      }

      img {
        width: 100%;
        height: 100%;
      }

      .flex-container-text {
        position: absolute;
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%);
      }
    }
  
    /* MOBILE L */
    @media screen and (max-width: 30rem) {
      section {
        margin: 1rem 1rem 0 1rem;
      }
  
      h2 {
        font-size: 3rem;
      }

      .sub-tags{
        flex-direction: column;
      }

      .flex-container-text{
        max-width: fit-content;
      }

    }

  </style>