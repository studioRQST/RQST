<template>
  <section>
    <div class="flex-container-text">
      <div class="hover-background">
        <a class="project-1 bold-weight" href=""><span>Project een</span></a>
      </div>
      <div class="hover-background">
        <a class="project-2 bold-weight" href=""><span>Project twee</span></a>
      </div>
        <div class="hover-background">
        <a class="project-3 bold-weight" href=""><span>Project drie</span></a>
        </div>
          <div class="hover-background">
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

  .hover-background {
    padding: 2rem 0 0 0;
  }

  .hover-background:hover {
    background-color: var(--secundair-color-l-purple);
    width: 100vw;
    text-align: center;
    transition: ease-in 0.3s;
  }

  .hover-background:hover a {
    color: var(--second-background);
    transition: ease-in 0.3s;
  }

  .hover-background:hover span {
    opacity: 0;
  }

  .project-1:hover:before {
    content: "Coming soon";
    position: absolute;
    opacity: 1;
    transition: opacity 0.3s ease-in;
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








</style>
<script setup lang="ts">
</script>