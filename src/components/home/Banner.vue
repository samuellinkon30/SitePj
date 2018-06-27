<template>
  <div class="banner">
    <h1 class="typer">{{typingText}}</h1>
    <router-link to="/contact"><b-button size="lg"><p class="txt">marque uma reunião</p></b-button></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
     typerText: 'Há mais de 10 anos vendendo soluções de impacto em engenharia.',
     typingText:'Há mais de 10 anos vendendo soluções de impacto em engenharia.',
   };
 },
 methods: {
  type() {
    this.typingText = "";
    const char = this.typerText.split('').reverse();
    setInterval(() => {
      if (char.length <= 0) {
        return clearInterval(this);
      }
      const a = char.pop();
      this.typingText += a;
      return 0;
    }, 100);
  },
},
mounted() {
  setTimeout(this.type, 0);
},
}
</script>

<style scoped>

.banner h1 {
  font-size: 2em;
  margin: 20px 0;
}
.typer { height: 250px;}
.banner {
  background: url('../../assets/img/engenharia.jpg') top;
  background-size: cover;
  background-attachment: fixed;
  padding: 10%;
  color: #fefefe;
}
.btn {
  background: transparent;
  border: solid 1px #fefefe;
  border-radius: 0;
  margin: 2% 0;
  padding: 10px;
}
a { color: #fefefe;}

.btn:hover, .btn:focus{
  background: #fefefe;
  color: #1b1b1e;
}
@media screen and (min-width: 700px) {
  .banner { padding: 10%; }
  .banner h1 {
    font-size: 3em;
  }


}
@media screen and (min-width: 1000px) {
  .banner { padding: 5% 10%; }
  .banner h1 {
    font-size: 4em;
    }}
    @media screen and (min-width: 1100px) {

      .txt{
        font-size:1.8em;
        }}
        @media screen and (max-width: 600px) {

          .txt{
            font-size:1em;
            }}

            </style>
