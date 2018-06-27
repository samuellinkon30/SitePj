<template>
  <div class="values">
      <div class="block-group">
        <div class="block">
            <div class="block-icon">
                <icon name="paper-plane" scale="4"></icon>
            </div>
            <div class="block-text">
                <h4 class="block-text-title"><b>MISSÃO</b></h4><br>
                <p>Impactar pessoas, universidade e mercado através de soluções em engenharia</p>
            </div>
        </div>
        <div class="block">
            <div class="block-icon">
                <icon name="eye" scale="4"></icon>
            </div>
            <div class="block-text">
                <h4 class="block-text-title"><b>VISÃO</b></h4><br>
                <p>Ser a Empresa Junior que mais cresce em Pernambuco</p>
            </div>
        </div>
        <div class="block block-downside">
            <div class="block-icon">
                <icon name="heart" scale="4"></icon>
            </div>
            <div class="block-text">
                <h4 class="block-text-title"><b>VALORES</b></h4><br>
                <p>Foco no resultado, paixão, vontade de crescer, sentimento de dono e colaboratividade</p>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.values {
    padding: 5% 0 0;
    text-align: center
}

.block {
  padding: 0px 30px;
  text-align: center;
  margin: 0 auto 50px;
  background-color: transparent;
}
.block-group { text-align: center; }

.block-text { margin-top: 20px; }

.block-icon {
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
    padding-top: 30px;
    /* border: 6px solid #ffd100; */
    color: #fefefe;
    background: #ffd100;
    border-radius: 50%;
    margin: auto;
}
@media screen and (min-width: 700px) {
    .values {
        padding: 0;
        text-align: left;
    }
    .block {
        width: 300px;
        display: inline-block;
        margin-bottom: 20px;
    }
}

@media screen and (min-width: 1000px) {
  .values{
    overflow: hidden;
    padding: 0;
  }
  .block {
    width: 33.33%;
    float: left;
    padding: 0 40px 50px;
    margin-bottom: 0;
  }
}
</style>
