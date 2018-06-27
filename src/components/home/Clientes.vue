<template>
  <div class="differentials">
      <h3>NOSSOS <b>CLIENTES</b></h3>
      <div class="block-group">

        <div class="block">
            <img class="premio1" src="../../assets/img/Marista.png">
            <div class="block-text">
                <h4 class="block-text-title">Marista Faculdade</h4>
            </div>
        </div>

        <div class="block">
            <img class="premio2" src="../../assets/img/Roma.png">
            <div class="block-text">
                <h4 class="block-text-title">Faculdade Nova Roma</h4>
            </div>
        </div>

      <div class="block">
            <img class="premio3" src="../../assets/img/Disney.png">
            <div class="block-text">
                <h4 class="block-text-title">Disney é com Darcy</h4>
            </div>
        </div>
      </div>
  </div>


</template>
<script>

</script>
<style scoped>

.differentials
 {
    padding: 10%;
    text-align: center;
    background-attachment: fixed;
    background-position: relative;
    background-size: 100%;
}
.block
{
  padding: 5%;
  margin: auto;
}
.block-group
{
  text-align: center;
}
.block-text-title
{
  padding: 5%;
}
.premio1
{
  width: 200px;
  height: 200px;
}
.premio2
{
  margin-top: 10%;
  width: 200px;
  height: 150px;
}
.premio3
{
  margin-top: 20%;
  width: 200px;
  height: 100px;
}
@media screen and (max-width: 700px)
{}
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
