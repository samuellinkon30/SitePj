<template>
  <div class="values">
   <div class="differentials">
    <h3>PRINCIPAIS <b>SERVIÇOS</b></h3>
  </div>

      <div class="block-group">
        <div class="block">
  <b-btn v-b-modal.modal1>
    <img class="block-icon" src="../../assets/img/civil.png">
  </b-btn>
            <h3 class="des">Construção: Civil e Elétrica</h3>
        </div>

        <div class="block">
  <b-btn v-b-modal.modal2>
    <img class="block-icon" src="../../assets/img/mecanica.png">
  </b-btn>
           <h3 class="des">Indústria: Mecânica e Automação</h3>
        </div>

        <div class="block block-downside">
  <b-btn v-b-modal.modal3><img class="block-icon" src="../../assets/img/computacao.png">
  </b-btn>
            <h3 class="des">Tecnologia: Computação e Automação</h3>
        </div>
      </div>

  <!-- Modal Component -->
  <b-modal id="modal1" title="Construção: Civil e Elétrica" size="lg" ok-only="true" >
     <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="white"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

    <b-carousel-slide>
    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
    src="../../assets/img/slideeletrica.jpeg" alt="image slot">
    </b-carousel-slide>

     <b-carousel-slide>
    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
    src="../../assets/img/slidecivil.jpg" alt="image slot">
    </b-carousel-slide>

    </b-carousel>

    </b-modal>

   <b-modal id="modal2" title="Indústria: Mecânica e Automação" size="lg" ok-only="true">
      <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="white"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

    <b-carousel-slide>
    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
    src="../../assets/img/slidemecanica.jpg" alt="image slot">
    </b-carousel-slide>

     <b-carousel-slide>
    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
    src="../../assets/img/slideauto.jpg" alt="image slot">
    </b-carousel-slide>

    </b-carousel>

  </b-modal>
   <b-modal id="modal3" title="Tecnologia: Computação e Automação" size="lg" ok-only="true">
  <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="white"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

    <b-carousel-slide>
    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
    src="../../assets/img/slideecomp.jpg" alt="image slot">
    </b-carousel-slide>

     <b-carousel-slide>
    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
    src="../../assets/img/slideautoecomp.jpg" alt="image slot">
    </b-carousel-slide>

    </b-carousel>  </b-modal>
</div>

</div>
</template>
<script>


</script>
<style scoped>
.w-100
{
  height:  500px;
}
.btn-secondary
{
  background: none;
  border-color: transparent;
}
.modal1{
  border-radius: 50%;
  display: inline-block;
}
.ftmodal
{
  text-align: center;
  height: 300px;
  width: 100%;
  display: inline-block;
}
.des
{
  padding-top: 5%;
  color: white;
  font-size: 1em;
}
.differentials {
  color: white;
  padding: 3%;

}
.values {
    text-align: center;
    background: url('../../assets/img/connectwork.png');
    background-attachment: fixed;
}

.block {
  padding: 0px 30px;
  text-align: center;
  background-color: transparent;
   padding-bottom: 5%;


}
.block-group
{ text-align: center;
  margin-top: 5%;

}

.block-text { margin-top: 20px; }

.block-icon {
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
    padding-top: 0px;
    color: #fefefe;
    background: #ffd100;
    border-radius: 50%;
    margin: auto;
}
@media screen and (max-width: 700px) {
.des
    {
      font-size: 1.25em;
    }
    .values
    {
        padding: 5%;
        text-align: center;
    }
    .w-100
    {
      height:  250px;
    }


}
@media screen and (min-width: 700px) {
    .differentials
    {
        padding-top: 5%;
        text-align: left;
    }
    .block
    {
        width: 300px;
        display: inline-block;
        margin-bottom: 20px;
    }
    .block-downside
    {
      margin: 0;
    }
    .block-icon
    {
      width: 160px;
      height: 160px;
    }
    .des
    {
      font-size: 1.5em;
    }
  }

@media screen and (min-width: 1000px) {
  .values{
    overflow: hidden;
    padding: ;
  }
  .block {
    width: 33.33%;
    float: left;
    margin: 0 auto 50px;

  }
}
</style>
