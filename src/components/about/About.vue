<template>
    <div>
        <b-jumbotron class="title">
            <h1>QUEM SOMOS</h1>
        </b-jumbotron>
        <div class="about">
            <h3>Sobre a <b>POLI JÚNIOR ENGENHARIA</b></h3>
            <p>Desde de 2006 impactando a sociedade Pernambucana, a Poli Júnior Engenharia,
             mais do que faz projetos de engenharia, cria e desenvolve soluções inovadoras para o mercado,
             transformando ideias em realidade. Alinhando nossa capacidade as necessidades dos nossos
             clientes, entregamos soluções personalizadas, principalmente, para empresas de pequeno e
             médio porte, estabelecidas ou sediadas em Pernambuco e estados adjacentes.</p>
            <p>A Poli Júnior Engenharia, em Recife, foi a primeira empresa Júnior de engenharia do estado
             de Pernambuco. Estruturada e gerida por alunos de graduação da Universidade de Pernambuco
             auxiliados por mestres e doutores, além de profissionais da área.
             Apaixonados por desenvolver pessoas que impactem cada vez mais a sociedade brasileira.</p>
            </div>
        <c-values/>
        <c-partners/>
    </div>
</template>

<script>
import cValues from './Values';
import cPartners from '../shared/Partners';
export default {
    components: {
        cValues,
        cPartners,
    }
};
</script>

<style scoped>
    .title {
        background: url('../../assets/img/about.png');
        background-size: cover;
        padding-left: 10%;
        margin-bottom: 0;
        color: #fefefe;
    }
    .about {
        padding: 5% 10%;
    }
    .about h3 {
        text-align: left;
        margin-bottom: 10%;
    }
    @media screen and (min-width: 700px) {
        .title{ padding-left: 15%; }
        .about{
            padding: 5%;
            text-align: left;
        }
        .about h3 {
            margin: 20px 0;
        }
    }
</style>
