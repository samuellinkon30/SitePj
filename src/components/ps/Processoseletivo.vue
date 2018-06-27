<template>
<div>
    <div>
     <b-jumbotron class="title">
      <h1>PROCESSO SELETIVO</h1>
    </b-jumbotron>
  </div>

  <div align="center">
    <img class="ft" src="../../assets/img/logonovo.png">
  </div>

  <div class="txt">
    <br><br>
    <div class="txt-Corpo" v-for="txt in Texto"><p>{{txt.Corpo}}</p></div>
  </div>
</div>
</template>

<script>
export default
{
  data()
  {
    return{
      Texto:[
      {
        Corpo:'Processo Seletivo Poli Júnior Engenharia'
      },
      {
        Corpo:'Desde o momento em que ingressamos em um curso de Engenharia, somos advertidos sobre as características essenciais de um engenheiro no mercado de trabalho, tais como: liderança, trabalho em equipe, empreendedorismo, entre tantas outras.'
      },
      {
        Corpo:'A grande questão neste caso é: somos preparados como líderes e empreendedores na mesma proporção que somos treinados na área técnica? Movimento Empresa Júnior (MEJ), considerado o maior movimento de empreendedorismo universitário do mundo, visa oferecer serviços que ajudam a desenvolver o empreendedorismo no país, além de fornecer crescimento profissional a seus membros.'
      },
      {
        Data:'Inscrições entre 26/05 e 03/06.'
      },
      ],
    };
  }
};
</script>

<style scoped>
.global
{
  background-position: relative;
  background-size: 100%;
  padding-bottom:
}
.txt
{
    padding-bottom: 10%;
}
.texto
{
  color: white;
}
.ft
{
  height: 300px;
  margin-top: 2%;
}
.b button
{
  padding-right: 5%;
}
.incricao
{
  background-color: #ffd100;
  background-size: cover;
  width: 100%;
  margin-top: 5%;
  padding-top: 1%;
  height: 100px;
  color: white;
}
.incricao h1
{
  font-size: 1.5em;
}
.botao
{
  padding-top: 5%;
  padding-bottom: 5%;
  text-align: center;
}
.btn {
  background-color: #ffd100;
  border-radius: 0;
  margin: 2% 0;
  color: black;
}
.btn {
  border: solid 1px #1b1b1e;
  border-radius: 0;
  margin: 2% 0;
  color: #1b1b1e;
}
.btn:hover {
  background: black;
  border-color: #fefefe;
}
.txt
{
  text-align: center;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 2em;
  color: black;
}
.title {
  background: url('../../assets/img/about.png');
  background-size: cover;
  padding-left: 15%;
  margin-bottom: 0;
  color: #fefefe;
}
.texto
{
  font-size: 2em;
}
@media screen and (max-width: 600px)
{
  .txt
  {
    font-size: 1em;
  }
  .texto
  {
    font-size: 1.5em;
  }
    .ft
  {
    height: 100px;
  }
  .incricao
{
  height: 70px;
}
}
@media screen and (min-width: 1000px){
  .incricao h1
  {
    font-size: 2em;
  }
}
</style>
