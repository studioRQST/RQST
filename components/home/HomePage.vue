<template>
  <div>
    <homePijlers/>

    <div class="container">
      <div class="section-one">
        <HomeSectionOne/>
      </div>
      <div class="section-two">
        <HomeSectionTwo/>
      </div>
      <div class="section-three">
        <HomeSectionThree/>
      </div>
      <div class="section-four">
        <HomeSectionFour/>
      </div>
    </div>
  </div>


</template>

<style>

.container {
  position: relative;
}

.section-one {
  position: sticky;
  top: 2rem;
  z-index: 1;
}

.section-two {
  position: sticky;
  top: 2rem;
  z-index: 1;
}

.section-three {
  position: sticky;
  top: 2rem;
  z-index: 1;
}

.section-four {
  position: sticky;
  top: 2rem;
  z-index: 1;
}

@media screen and (max-width: 40rem) {
  .section-three {
    background-color: var(--background-dark-purple);
    height: 220vh;
    position: inherit;
    top: 2rem;
    z-index: 1; /* Reset z-index */
    border-radius: 15px 15px 0 0;
    margin: 1rem 1rem 0 1rem;
  }

  .section-four {
    position: sticky; /* Change to relative */
    top: 2rem;
    z-index: 1; /* Reset z-index */


  }
}


</style>
