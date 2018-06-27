<template>
  <div class="solutions">
      <div class="block-group">
        <div class="block" v-for="(item,index) in services" :key="index">
            <h4 class="block-title">{{item.title}}</h4>
            <p v-for="(project,id) in item.projects" :key="id">
                <router-link :to="{name: 'service', params: {id: index+'-'+id}}">{{id+1}}. {{project.title}}</router-link>
            </p>
        </div>
      </div>
  </div>
</template>
<script>
import Services from '../shared/info/services.js';

export default {
    data() {
        return {
            services: Services.services,
        };
    },
    mounted(){
        this.$el.getElementsByClassName('block')[2].className += ' demand';
    },
}
</script>
<style scoped>
a { color: #1b1b1e;}

a:hover, a:focus {
    text-decoration: none;
    color: #ffd100;
}

.solutions {
    margin: 40px auto;
}
.block {
  width: 80%;
  border: solid 2px #dbdaea;
  margin: 10% auto;
  padding: 3%;
  text-align: left;
}

.block-group { text-align: center; }

.block-title {
    text-align: center;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 2px solid #dbdaea;
}

@media screen and (min-width: 700px) {
    .solutions {
        width: 80%;
    }
    .block {
        width: 46%;
        margin: 0 2% 5%;
        display: inline-block;
        vertical-align: middle;
        height: 620px;
    }
    .demand {
        height: initial;
    }
}
@media screen and (min-width: 1000px) {
    .solutions {
        width: 90%;
        margin-bottom: 0;
    }
    .block {
        width: 45%;
        font-size: 1.1em;
        margin: 2%;
    }
}
</style>
