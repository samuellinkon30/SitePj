<template>
    <div class="differentials">
      <h3>NOSSO <b>BLOG</b></h3>
      <div class="block-group">
        <div class="block">
          <a href="http://polijuniorengenharia.com.br/bloog/2018/05/12/combate-a-incendio/">
          <img  class="ftblog" src="../../assets/img/Combate.png">
          <h4 class="block-text-title">Combate a Incêndio</h4></a>
        </div>
      </div>
      <div class="block">
        <a href="http://polijuniorengenharia.com.br/bloog/2018/05/06/iot/"> <img  class="ftblog" src="../../assets/img/IOT.png">
        <h4 class="block-text-title">IOT</h4></a>
      </div>
      <div class="block">
        <a href="http://polijuniorengenharia.com.br/bloog/2018/05/08/sistemas-de-protecao-contra-descargas-atmosfericas-spda/"><img  class="ftblog" src="../../assets/img/SPDA.png">
        <div class="block-text">
          <h4 class="block-text-title">Sistemas de Proteção contra Descargas Atmosféricas (SPDA)</h4>
        </div></a>
      </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.differentials
{
  padding: 7%;
  background: url('../../assets/img/circles-light.png');
  background-attachment: fixed;
}
.block-group
{
  text-align: center;
}
.block
{
  text-align: center;
  margin: 40px auto 0;
  background-color: transparent;
}
.block-downside
{
  text-align: center;
  margin: 40px auto 0;
  background-color: transparent;
}
.ftblog
{
  width: 290px;
  border-style: dotted;

}
.block-text-title
{
  margin-top: 20px;
  padding: %;
}

@media screen and (max-width: 700px)
{

  .ftblog
  {
    width: 250px;
  }
}
@media screen and (min-width: 700px)
{
  .differentials
  {
    padding: 5%;
    text-align: left;
  }
  .block
  {
    width: 300px;
    display: inline-block;
  }
  .block-downside
  {
    width: 300px;
    display: inline-block;
  }
}
@media screen and (min-width: 1000px)
{
  .differentials
  {
    overflow: hidden;
  }
  .block
  {
    width: 33.33%;
    float: left;
  }
    .block-downside
  {
    width: 33.33%;
    float: left;
  }
  .ftblog
  {
    width: 370px;
    padding: 1%;
    border-radius: 10%;

  }
}
</style>
