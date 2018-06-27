<template>
  <div class="partners">
        <h3>NOSSOS <b>PARCEIROS</b></h3>
        <div class="slider">
            <div class="arrow" @click="rollSlides(1)">
                <icon scale="3" name="angle-left"></icon>
            </div>
            <div class="center">
                <div class="roll">
                    <b-img v-for="name in companies"
                        width="200" 
                        :key="name.id" 
                        :src="require('../../assets/img/partners/'+name+'.png')">
                    </b-img>
                </div>    
            </div>
            <div class="arrow" @click="rollSlides(-1)">
                <icon scale="3" name="angle-right"></icon>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            companies: [
                'upe',
                'poli',
                'ambev',
                'fejepe',
                'sebrae',
                'amcham',
            ],
            rollPosition: 0,
        };
    }, 
    methods: {
        rollSlides(n) {
            var rolo = this.$el.getElementsByClassName('roll')[0];
            if(this.verifyLimits(this.rollPosition+(n*200))){
                this.rollPosition += n*220;
                rolo.style.left = this.rollPosition+'px';
            }
        },
        verifyLimits(m) {
            var slideLenght = window.innerWidth;
            if(slideLenght<=700){
                if (m>-1100 && m<0) return true;
            } else if(slideLenght<=800){
                if (m>-880 && m<0) return true;
            } else if(slideLenght<=1000){
                if (m>-660 && m<0) return true;
            } else {
                if (m>-440 && m<0) return true;
            }
            return false;
        },
    },
    mounted() {
        this.$el.getElementsByClassName('roll')[0].style.left = 0;
    }
}
</script>
<style scoped>
.partners {
    padding: 5% 0 0;
    text-align: center;
}
.slider {
    height: 170px;
    margin: 40px auto 40px;
    width: 280px;
    position: relative;
}
.arrow {
    width: 30px;
    float: left;
    text-align: center;
    position: relative;
    top: 60px;
}
.arrow:hover { 
    cursor: pointer;
    color: #dbdaea;
}
.center {
    width: 220px;
    height: 170px;
    float: left;
    overflow: hidden;
    position: relative;
}
.roll {
    width: 1320px;
    position: relative;
    height: 100%;
    -webkit-transition: left 1s; /* For Safari 3.1 to 6.0 */
    transition: left 1s;
}
.roll img { margin: 0 10px; }

@media screen and (min-width: 700px) {
    .partners{ text-align: left; }
    .partners h3 { margin-left: 40px; }
    .slider { width: 500px;}
    .center { width: 440px; }
}
@media screen and (min-width: 800px) {
    .slider { width: 740px;}
    .arrow { width: 40px; }
    .center { width: 660px; }
}
@media screen and (min-width: 1000px) {
    .slider { width: 960px;}
    .arrow { width: 40px; }
    .center { width: 880px; }
}
</style>