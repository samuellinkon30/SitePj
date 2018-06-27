<template>
  <div class="service">
      <div class="description">
          <h2>{{serviceTitle}}</h2>
          <p class="txt" v-for="(item, id) in serviceDescription" :key="id">{{item}}</p>
      </div>
      <c-form class="form" btnMsg="SOLICITAR ORÇAMENTO" :project="serviceTitle"/>
  </div>
</template>
<script>
import Services from '../shared/info/services.js';
import cForm from '../contact/ContactForm';

export default {
    components: {
        cForm,
    },
    data(){
        return {
            paramId: this.$route.params.id,
            serviceTitle: '',
            serviceDescription: [],
        };
    },
    beforeMount() {
        const srv = this.paramId.split('-');
        const categorie = srv[0];
        const idProject = srv[1];

        this.serviceTitle = Services.services[categorie].projects[idProject].title;
        this.serviceDescription = Services.services[categorie].projects[idProject].description;
    }
}
</script>
<style scoped>

.service {
    text-align: center;
    padding: 5% 10%;
    border-top: 1px solid #dbdbea;
}
.description {
    padding: 5%;
}
.description p {
    text-align: left;
    text-align: justify;
    text-justify: inter-word;
}
.description h2 { margin-bottom: 30px;}
.form { padding: 5% 12%; }
@media screen and (min-width: 700px) {
    .service { padding: 0 0 0 5%;}
    .description {
        width: 45%;
        display: inline-block;
        vertical-align: top;
    }
}
</style>
