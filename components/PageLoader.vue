
<!-- NOG NIET AF  -->

<template>
    <div class="page-loader">
      <img src="/static/img/LogoRqst.svg" alt="Logo" class="logo" />
    </div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    mounted() {
      gsap.to('.page-loader', { opacity: 1, duration: 0.5 });
      this.fadeOut();
    },
    methods: {
      fadeOut() {
        setTimeout(() => {
          gsap.to('.page-loader', { opacity: 0, duration: 0.5, onComplete: this.removeLoader });
        }, 1500);
      },
      removeLoader() {
        this.$el.remove();
      },
    },
  };
  </script>
  
  <style scoped>
  
    .page-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--background-dark-purple);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10002;
    }
    
    .logo {
      width: 10%;
    }

  </style>
  