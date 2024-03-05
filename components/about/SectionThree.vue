<template>
  <section>
    <div>
      <h2>Wat we doen</h2>
    </div>
    <div class="flex-contain">
      <div class="container-1">
          <p class="title-uppercase">Webdesign</p>
          <hr>
          <p>
            Ons getalenteerde team van ontwerpers zet zich in voor het maken van verbluffende en intuïtieve webdesigns die de gebruikerservaring optimaliseren en de conversies verhogen.
          </p>
          <hr class="separator">
      </div>
      <div class="container-2">
          <p class="title-uppercase">Development</p>
          <hr>
          <p>
            Met onze expertise in development streven we ernaar om niet alleen functionele, maar ook geavanceerde en schaalbare websites en webapplicaties te bouwen die aan de behoeften van onze klanten voldoen.
          </p>
          <hr class="separator">
      </div>
      <div class="container-3">
          <p class="title-uppercase">Branding</p>
          <hr>
          <p>
            Wij geloven dat een sterk merk essentieel is voor succes. Daarom helpen we onze klanten bij het ontwikkelen van een consistente en onderscheidende merkidentiteit die resoneren met hun doelgroep.
          </p>
      </div>
    </div>
  </section>
</template>

<style scoped>

  section {
      display: flex;
      align-items: center;
      background-color: var(--secundair-color-l-purple);
      margin: 2rem;
      padding: 10rem 0rem;
      border-radius: 15px;
  }

  h2{
    color: var(--second-background);
    text-transform: uppercase;
    text-align: left;
    font-size: 10rem;
    line-height: 9rem;
    -webkit-text-stroke: 2px var(--second-background);
    -webkit-text-fill-color: transparent;
    margin: 0rem 3rem;
  }

  .flex-contain{
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .title-uppercase{
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--background-dark-purple);
  }

  hr{
    border: solid 3px;
    border-radius: 20px;
    max-width: 7rem;
    color: var(--second-background);
    margin-bottom: 2rem;
  }

  p{
    color: var(--background-dark-purple);
    font-size: 1.2rem;
    margin-bottom: 5rem;
    padding-right: 10rem;
  }

  .separator{
    min-width: 100%;
    border: solid 3px;
    border-radius: 20px;
    color: var(--second-background);
    margin-left: auto;
    opacity: 0.3;
  }

</style>