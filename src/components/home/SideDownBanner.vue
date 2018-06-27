<template>
  <div class="banner">
    <div class="text">
      <p>Venha participar do processo seletivo e faça parte desse grande movimento.</p>
    </div>
    <div class="botao">
      <router-link to="Processoseletivo"><b-button size="lg"><p class="txt">INSCREVA-SE</p></b-button></router-link>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>

.banner {
  background-color: #ffd100;
  color: #1b1b1e;
  padding: 5% 10%;
}

.btn {
  background: transparent;
  border: solid 1px #1b1b1e;
  border-radius: 0;
  margin: 2% 0;
  color: #1b1b1e;
}
.btn:hover {
  background: #fefefe;
  border-color: #fefefe;
}
@media screen and (min-width: 400px) {
  .banner { padding: 5% 0 1% 5%; }
  .text { width: 65%; }
  .botao {
    width: 30%;
    text-align: right;
    display: inline-block;
    position: relative;
    top: -10px;
  }
}
@media screen and (min-width: 700px) {
  .banner { padding: 2% 0 1% 5%; }
  .text {
    width: 70%;
    float: left;
  }
  .botao {
    width: 20%;
    text-align: right;
    display: inline-block;
    position: static;

  }
}

@media screen and (min-width: 1100px) {
  .txt
  {
    font-size:1.5em;
  }
  .text p{
    font-size:2em;
    }
    .botao {
    width: 20%;
    text-align: right;
    display: inline-block;
    position: static;

  }
  }


    @media screen and (max-width: 1100px) {
      .txt{
        font-size: 1em;

      }
      .text p {
       font-size:1.5em;
     }
     .botao {
    width: 20%;
    text-align: left;
    display: inline-block;
    position: static;

  }
   }

   </style>
