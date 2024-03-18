<template>
  <section>
    <div class="flex-container-text">
      <div class="hover-background-1">
        <a class="project-1 bold-weight" href=""><span>Project een</span></a>
      </div>
      <div class="hover-background-2">
        <a class="project-2 bold-weight" href=""><span>Project twee</span></a>
      </div>
        <div class="hover-background-3">
        <a class="project-3 bold-weight" href=""><span>Project drie</span></a>
        </div>
          <div class="hover-background-4">
        <a class="project-4 bold-weight" href=""><span>Project vier</span></a>
          </div>
    </div>
  </section>
</template>

<style scoped>

  section {
      margin: 2rem;
      padding: 3rem;
      border-radius: 15px;
      height: 150vh;
  }

  .flex-container-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 5rem 0;
  }

  a{
    color: var(--teriary-color-yellow);
    text-transform: uppercase;
    font-size: 8rem;
    line-height: 8rem;
    text-decoration: none;

  }

  [class^="hover-background"] {
    padding: 2rem 0 0 0;
    text-align: center;
  }

  [class^="hover-background"]:hover {
    background-color: var(--secundair-color-l-purple);
    width: 100vw;
    text-align: center;
    transition: ease-in 0.3s;
  }

  [class^="hover-background"]:hover a {
    color: var(--second-background);
    transition: ease-in 0.3s;
  }

  [class^="hover-background"]:hover span {
    opacity: 0;
  }

  .project-1:hover:before {
    content: "Coming soon";
    position: absolute;
    opacity: 1;
    transition: opacity 0.3s;
    z-index: 1;
  }

  .project-2:hover:before{
    content: "Coming soon";
    position: absolute;
    opacity: 1;
    transition: opacity 0.3s ease-in;
    z-index: 1;
  }

  .project-3:hover:before{
    content: "Coming soon";
    position: absolute;
    opacity: 1;
    transition: opacity 0.3s ease-in;
    z-index: 1;
  }

  .project-4:hover:before{
    content: "Coming soon";
    position: absolute;
    opacity: 1;
    transition: opacity 0.3s ease-in;
    z-index: 1;
  }


  /* Media queries voor verschillende schermformaten */

  /* LAPTOP */
  @media screen and (max-width: 80rem) {
    a {
      font-size: 6rem;
    }

  [class^="hover-background"] {
    padding: 0;
  }

  }

  /* TABLET */
  @media screen and (max-width: 60rem) {
    a {
      font-size: 5rem;
    }
  }

  /* MOBILE L */
  @media screen and (max-width: 30rem) {
    section {
      height: 110vh;
    }


    a {
      font-size: 2rem;
    }

    .flex-container-text {
      padding: 0;
      gap: 2rem;

    }
  }





</style>
<script setup lang="ts">
</script>