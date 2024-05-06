<script>




export default {
  data() {
    return {
      showNav: false
    }
  },
  methods: {

    toggleNav() {
      this.showNav = !this.showNav;
      this.toggleBodyScrollLock();
    },
    toggleBodyScrollLock() {
      const body = document.querySelector('body');
      body.style.overflow = this.showNav ? 'hidden' : 'auto';
    },
    closeNav() {
      this.showNav = false;
      this.toggleBodyScrollLock();
    }
  }
}
</script>

<template>
  <header class="navigation">
    <div class="logo">
      <a href="/" class="logo-link">
        <img src="/static/img/LogoRqst.svg" alt="Logo">
      </a>
    </div>



    <div class="menu-icon" @click="toggleNav" v-show="!showNav">
      <img src="/static/img/HamburgerIcon.svg" alt="Open Menu">
    </div>

    <div class="menu-icon" @click="toggleNav" v-show="showNav">
      <img src="/static/img/CloseIcon.svg" alt="Close Menu">
    </div>

      <div class="nav-wrapper" v-if="showNav">
        <div class="close-icon" @click="toggleNav">
          <img src="/static/img/CloseIcon.svg" alt="Close Menu">
        </div>

        <div class="list-items-nav">
          <p class="bold-weight">menu</p>
          <ul class="nav-links">
            <li>
              <nuxt-link class="title-uppercase hover-underline-animation" to="/over-ons" @click="closeNav">Over ons</nuxt-link>
            </li>
            <li>
              <nuxt-link class="title-uppercase hover-underline-animation" to="/cases" @click="closeNav">Cases</nuxt-link>
            </li>
            <li>
              <nuxt-link class="title-uppercase hover-underline-animation" to="/contact" @click="closeNav">Contact</nuxt-link>
            </li>
          </ul>
          <div class="icon-social-container">
            <div>
            <a class="focus-underline-animation" href="https://www.linkedin.com/company/studio-rqst">
              <img src="/static/img/LinkdinIconYellow.svg" alt="Linkdin Link">
            </a>
            <a class="focus-underline-animation" href="https://www.instagram.com/studio.rqst/">
              <img src="/static/img/InstagramIconYellow.svg" alt="Instagram Link">
            </a>
            <a class="focus-underline-animation" href="mailto:info@rqst.studio">
              <img src="/static/img/MailIconYellow.svg" alt="Email Link">
            </a>
            </div>
          </div>
        </div>
      </div>
  </header>
</template>


<style scoped>

  img{
    width: 80%;
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--second-background);
    margin: 0 2rem;
    padding: 1rem 3rem;
    border-radius: 0 0 15px 15px;
  }

  .logo img {
    margin-top: 0.5rem;
    position: relative;
    z-index: 10000;
  }

  .logo a{
    line-height: 0;
  }

  .menu-icon img {
    cursor: pointer;
  }

  .close-icon {
    position: absolute;
    top: 2.5rem;
    right: 5rem;
    cursor: pointer;
    z-index: 10000;
  }

  .nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--second-background);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    overflow: hidden;
  }

  .nav-wrapper .list-items-nav {
    z-index: 9999;
  }

  .list-items-nav p {
    color: var(--secundair-color-l-purple);
    text-align: center;
    margin-bottom: 1rem;
  }

  .nav-links{
    list-style-type: none;
    text-align: center;
  }

  a{
    color: var(--teriary-color-yellow);
    font-size: 6rem;
    line-height: 8rem;
    text-transform: uppercase;
    text-decoration: none;
  }

  a:focus-visible {
    color: var(--primair-color-l-blue);
    outline: none;
    text-decoration: underline;
  }

  .icon-social-container {
    position: absolute;
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    bottom: 2rem;
    right: 5rem;
  }

  .icon-social-container img:hover{
    width: 90%;
  }

  /* FOCUS UNDERLINE  */

  .focus-underline-animation {
    display: inline-block;
    position: relative;
    color: var(--teriary-color-yellow)
  }

  .focus-underline-animation::after {
    content: '';
    position: absolute;
    width: 80%;
    transform: scaleX(0);
    height: 5px;
    bottom: 2rem;
    left: 0;
    border-radius: 25px;
    background-color: var(--primair-color-l-blue);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .focus-underline-animation:focus::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media screen and (max-width: 60rem) {

    .navigation{
      margin: 0 1rem;
    }

    p, a{
      font-size: 2rem;
      line-height: 3rem;
    }

    .title-uppercase{
      font-size: 4rem;
      line-height: 6rem;
    }

    .icon-social-container {
      position: absolute;

    }

  }


  @media screen and (max-width: 30rem) {

    .navigation{
      margin: 0 1rem;
    }
    
    p, a{
      font-size: 2rem;
      line-height: 3rem;
    }
  
    .title-uppercase{
      font-size: 3.5rem;
      line-height: 6rem;
    }

    .icon-social-container {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 0;
      right: 0;
      margin-bottom: 2rem;
    }

    .icon-social-container div {
      display: flex;
      gap: 1rem;
    }


    .icon-social-container img {
      width: 1.5rem;
    }
}

</style>
