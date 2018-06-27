<template>
  <div class="differentials">
      <h3>NOSSAS <b>PREMIAÇÕES</b></h3>
      <div class="block-group">

        <div class="block">
            <img class="premio" src="../../assets/premio.png">
            <div class="block-text">
                <h4 class="block-text-title">PRÊMIO 1</h4>
            </div>
        </div>

        <div class="block">
            <img class="premio" src="../../assets/premio.png">
            <div class="block-text">
                <h4 class="block-text-title">PRÊMIO 2</h4>
            </div>
        </div>

        <div class="block block-downside">
            <img class="premio" src="../../assets/premio.png">
            <div class="block-text">
                <h4 class="block-text-title">GRÁFICO</h4>
            </div>
        </div>

      </div>


        <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background=""
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
      src="../../assets/premio.png" alt="image slot">
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
      src="../../assets/premio.png" alt="image slot">
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
      src="../../assets/premio.png" alt="image slot">
    </b-carousel-slide>

    </b-carousel>

  </div>


</template>
<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = false
    },
    onSlideEnd (slide) {
      this.sliding = true
    }
  }
}
</script>
<style scoped>

.differentials
 {
    color: white;
    padding: 10%;
    text-align: center;
    background: url('../../assets/img/servicos.jpg');
    background-attachment: fixed;
       background-position: relative;
    background-size: 100%;

}

.block
{
  padding: 0px 30px;
  text-align: center;
  margin: 40px auto 0;
  background-color: transparent;
}
.block-group
{
  text-align: center;
}
.premio
{
  width: 50%;
}
.block-text
{
  margin-top: 20px;
}

@media screen and (max-width: 700px)
{
  .carousel-control-prev-icon {
 background: transparent;
}
.carousel-control-next-icon {
   background: transparent;
}
  .block
  {
    display: none;
  }
  .img-fluid
  {
    height: 180px;
    width: 180px;
  }
  .carousel1
  {
    width: 80%;
  }



}
@media screen and (min-width: 700px)
{
    .differentials
    {
        padding: 5%;
        text-align: left;
    }
    .block {
        width: 300px;
        display: inline-block;
    }
    .carousel
    {
      display: none;
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
    padding: 0 40px;
  }
}
</style>
