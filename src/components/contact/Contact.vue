<template>
    <div class="contact">
        <b-jumbotron class="title">
            <h1>CONTATO</h1>
        </b-jumbotron>
        <c-form btnMsg="ENVIAR"/>
        <c-map/>
        <c-faq/>
    </div>
</template>

<script>
import cForm from './ContactForm';
import cMap from './Map';
import cFaq from './Faq';

export default {
    components: {
        cForm,
        cMap,
        cFaq,
    }
};
</script>

<style scoped>
    .title {
        background: url('../../assets/img/contact.png') center;
        background-size: cover;
        padding-left: 15%;
        margin-bottom: 0;
        color: #fefefe;
    }
</style>
