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
  top: 4rem;
  z-index: 1;
}

.section-three {
  position: sticky;
  top: 6rem;
  z-index: 1;
}

</style>
