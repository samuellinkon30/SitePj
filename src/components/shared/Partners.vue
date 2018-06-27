<template>
  <div class="partners">
        <h3>NOSSOS <b>PARCEIROS</b></h3>
        <div class="images">
            <a v-for="company in companies"
                :key="company.id"
                :href="company.link"
                target="_blank">
                <img :src="require('../../assets/img/partners/dark/'+company.img+'.png')">
            </a>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            companies: [
                {
                    link: 'https://www.ambev.com.br/',
                    img: 'ambev',
                },
                {
                    link: 'http://www.fejepe.org.br/',
                    img: 'fejepe',
                },
                {
                    link: 'http://www.upe.br/',
                    img: 'upe',
                },
                {
                    link: 'http://www.poli.br',
                    img: 'poli',
                },
                 {
                    link: 'http://www.empreenderdinheiro.com/',
                    img: 'empreender',
                },
            ],
        };
    },
};
</script>

<style scoped>
.partners {
    padding: 10% 0 0;
    text-align: center;
    background-color: #4c4d4f;
    color: #fefefe;
}
.images
{
    height: 200px;
}

img
{
    width: 30%;
    margin: 2% 5% 0;
}

@media screen and (max-width: 700px)
{
  .partners
  {
    padding-bottom: 5%;
  }
}
@media screen and (min-width: 700px) {
    .partners{
        text-align: left;
        padding: 50px 40px 0;
    }
    img {
        width: 150px;
        margin: 0 10px;
    }
}
@media screen and (min-width: 1000px)
{
    .images{text-align: center;}
}
</style>
