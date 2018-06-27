<template>
  <div class="differentials">
     <h3>POR QUE A <b>POLI JÚNIOR ENGENHARIA?</b></h3>
     <br><br>
    <div >
      <h3 class="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ipsum vel sem tristique sollicitudin. In vehicula leo pellentesque tellus efficitur, eu fermentum lorem tincidunt. Vivamus ullamcorper elit eget tempor aliquet. Vivamus ac libero lacinia, sagittis nisl sit amet, rhoncus justo. Suspendisse volutpat, nisi et porta tempor, ante enim consectetur elit, in placerat metus turpis eu ante. Cras sit amet mattis ligula. Donec feugiat sed quam vitae maximus. Pellentesque quis orci eu est porttitor rutrum ut nec diam. Sed sed scelerisque risus. Aenean a nisl quis eros euismod efficitur. Sed pretium, tortor sed aliquam accumsan, arcu erat ultrices felis, non vestibulum neque purus vitae ligula. Nullam mollis quis magna nec auctor. Nam tempor placerat nisl in suscipit. Aliquam vitae nulla quis enim blandit aliquam in euismod nulla.</h3>
    </div>
    <br><br>
      <h3>NOSSO <b>DIFERENCIAL</b></h3>
      <div class="block-group">
        <div class="block">
            <b-img width="150" center :src="require('../../assets/img/qualidade.png')"></b-img>
            <div class="block-text">
              <br>
                <h4 class="block-text-title">QUALIDADE</h4>
                <br>
                <h3 class="txt">Revisão feita por consultores e especialistas</h3>
            </div>
        </div>
        <div class="block">
            <b-img width="150" center :src="require('../../assets/img/preco.png')"></b-img>
            <div class="block-text">
              <br>
                <h4 class="block-text-title">PREÇOS COMPETITIVOS</h4>
                <br>
                <h3 class="txt">O melhor custo-benefício em serviços de engenharia</h3>
            </div>
        </div>
        <div class="block block-downside">
            <b-img width="150" center :src="require('../../assets/img/paixao.png')"></b-img>
            <div class="block-text">
                 <br>
                <h4 class="block-text-title">PAIXÃO</h4>
                <br>
                <h3 class="txt">Projetos feitos com engajamento e comprometimento</h3>
            </div>
        </div>
      </div>
  </div>

</template>
<script>

</script>

<style scoped>
.block-text-title
{
  font-size:1.5em;
}
.carousel-control-prev:hover, .carousel-control-prev:focus, .carousel-control-next:hover, .carousel-control-next:focus
{
  opacity: 0;
}
.txt
{
  text-align: center;
  font-size: 1em;
}
.differentials
{
    padding: 10%;
    text-align: center;
    background-attachment: fixed;
    background: url('../../assets/img/circles-light.png');
}
.block {
  padding: 0px 30px;
  text-align: center;
  margin: 40px auto 0;
  background-color: transparent;
}
.block-group
{
  text-align: center;
}

.block-text
{
  margin-top: 20px;
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
}

@media screen and (min-width: 700px)
{
  .differentials
  {
    overflow: hidden;
  }
  .block
  {
    width: 33.33%;
    float: left;
    padding: 0 40px;
  }
}
</style>
