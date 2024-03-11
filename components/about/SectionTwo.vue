<script>


</script>

<template>
  <section>
    <div class="flex-container">
      <div data-aos="zoom-in-right"
           data-aos-duration="1500"
           class="about-us-text">
        <p class="title-uppercase">Over ons</p>
        <p>
          Welkom bij Studio RQST! Wij zijn een creatief webbureau gespecialiseerd in webdesign, development en branding.
          Ons team is gepassioneerd door het creëren van boeiende digitale ervaringen die jouw merk doen opvallen en
          impact maken.
        </p>
      </div>
      <div data-aos="zoom-in-right"
           data-aos-duration="1500"
           class="mission-text">
        <p class="title-uppercase">Onze missie</p>
        <p>
          Bij Studio RQST streven we ernaar om de visie van onze klanten om te zetten in werkelijkheid door middel van
          innovatieve en op maat gemaakte digitale oplossingen. Onze missie is om krachtige en doelgerichte online
          ervaringen te leveren die zowel inspireren als verbinden.
        </p>
      </div>
    </div>
    <img src="/static/img/over-ons-image.png" alt="Over ons afbeelding">
  </section>
</template>

<style scoped>

section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10rem 8rem 10rem 8rem;
  height: 100vh;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.about-us-text {
  color: var(--teriary-color-yellow);
  max-width: 35rem;
  margin-bottom: 5rem;
}

.mission-text {
  color: var(--secundair-color-l-purple);
  max-width: 35rem;
}

.title-uppercase {
  font-size: 3rem;
  margin-bottom: 2rem;
}

p {
  font-size: 1.2rem;
}

img {
  width: 40%;
  margin-left: auto;
}

</style>