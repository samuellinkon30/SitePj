<template>
  <header class="header">
    <router-link to="/">
      <b-img :src="require('../assets/img/logonovo.png')" class="logo"></b-img>
    </router-link>
    <b-button class="menu-icon" @click="openMenu">
      <icon name="bars" scale="1.4"></icon>
    </b-button>
    <div class="menu">
      <router-link class="menu-item" to="/">Inicio</router-link>
      <router-link class="menu-item" to="/about">Institucional</router-link>
      <router-link class="menu-item" to="/solutions">Soluções</router-link>
      <router-link class="menu-item" to="/contact">Contato</router-link>
       <router-link class="menu-item" to="/processoseletivo">Processo Seletivo</router-link>
       <a class="menu-item" href="http://polijuniorengenharia.com.br/bloog">Nosso Blog</a>

    </div>
    <div class="menu-drop" :class="view">
      <div class="menu-drop-item quit" @click="hideMenu"><icon name="times" scale="1.4"></icon></div>
      <router-link class="menu-drop-item" to="/"><div @click="hideMenu">Inicio</div></router-link>
      <router-link class="menu-drop-item" to="/about"><div @click="hideMenu">Institucional</div></router-link>
      <router-link class="menu-drop-item" to="/solutions"><div @click="hideMenu">Soluções</div></router-link>
      <router-link class="menu-drop-item" to="/contact"><div @click="hideMenu">Contato</div></router-link>
      <router-link class="menu-drop-item" to="/processoseletivo"><div @click="hideMenu">Processo Seletivo</div></router-link>
       <a class="menu-drop-item" href="http://polijuniorengenharia.com.br/bloog">Nosso Blog</a>

    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      view: 'hidden',
    };
  },
  methods: {
    openMenu() {
      if (this.view === 'hidden') {
        this.view = '';
      } else {
        this.view = 'hidden';
      }
    },
    hideMenu() {
      this.view = 'hidden';
    },
  },
};
</script>

<style scoped>

  a:hover, a:focus { text-decoration: none; }

  .header {
    padding: 15px 0;
    background-color: #fefefe;
    width: 100%;
    height: 90px;
    text-align: right;
  }

  .logo {
    margin-left: 5%;
    width: 100px;
    float: left;
  }

  .menu {
    display: none;
    float: right;
    margin: 12px 5%;
    margin-top: 1%;
  }
  .menu-icon {
    background-color: transparent;
    color: #1b1b1e;
    display: inline-block;
    margin-right: 3%;
  }
  .menu-icon:hover { background-color: #ffd100; }
  .menu-item {
    color: #1b1b1e;
    margin-left: 15px;
    font-size: 1.3em;
  }

  .menu-drop {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    text-align: center;
    background-color: #1b1b1ef1;
  }

  .menu-drop-item {
    color: #fefefe;
    padding: 2%;
    display: block;
    margin: 9%;
    font-size: 2em;
  }
  .quit {
    float: right;
    margin: 0;
  }
  .menu-drop-item:hover {
    color: #dbdaea;
    cursor: pointer;
  }

  @media screen and (min-width: 700px) {
    .menu-drop {
      display: none;
    }
    .menu-icon {
      display: none;
    }
    .menu {
      display: block;
    }
  }
</style>

