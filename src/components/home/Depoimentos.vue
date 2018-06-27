<template>
  <div class="global">
    <div class="differentials">
    <h3>DECLARAÇÕES E <b>DEPOIMENTOS</b></h3>
  </div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="white"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

    <b-carousel-slide>
    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           src="../../assets/img/depoimento.png" alt="image slot">
      </b-carousel-slide>

    <b-carousel-slide>
    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
        src="../../assets/img/depoimento.png" alt="image slot">
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
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style >

.differentials
{
  padding-bottom: 7%;
}
.global
{
  padding: 5%;
  background: url('../../assets/img/circles-light.png');      background-attachment: fixed;
}
.img-fluid
{
  height: 300px;
  width: 50%;
  background: transparent;
}
.img
{
  height: 200px;
}

.carousel
{
  max-width: 70%;
  margin:auto;
}

@media screen and (max-width: 700px)
{
  .carousel-control-prev-icon
  {
   background: transparent;
  }
  .carousel-control-next-icon {
     background: transparent;
  }

  .differentials
  {
    padding-top: 5%;
  }
    .global {
        padding: 5%;
        text-align: center;
    }
    .carousel
    {
      margin-bottom: 5%;
    }
    .img-fluid
    {
      height: 250px;
      width: 50%;
      background: transparent;
    }

}

</style>
