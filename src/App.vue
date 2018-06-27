<template>
  <div id="app">
    <c-contact-header/>
    <c-header/>
    <router-view/>
    <c-footer/>
  </div>
</template>

<script>
  import cContactHeader from './components/ContactHeader.vue';
  import cHeader from './components/Header.vue';
  import cFooter from './components/Footer.vue';
	export default {
	  name: 'app',
    components: {
      cContactHeader,
      cHeader,
      cFooter,
    },
	};
</script>

<style >
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  @import url('https://fonts.googleapis.com/css?family=Nunito');

  *, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  #app {
font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  li { list-style: none; }
  .btn:hover { cursor: pointer; }
  .hidden { display: none; }
</style>
