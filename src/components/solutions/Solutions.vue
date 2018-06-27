<template>
    <div>
        <b-jumbotron class="title">
            <h1>SOLUÇÕES</h1>
        </b-jumbotron>
        <c-solution-cards/>
        <c-partners/>
    </div>
</template>

<script>
import cSolutionCards from './SolutionCards';
import cPartners from '../shared/Partners';

export default {
    components: {
        cSolutionCards,
        cPartners,
    }
};
</script>

<style scoped>
    .title {
        background: url('../../assets/img/solutions.png');
        background-size: cover;
        padding-left: 15%;
        margin-bottom: 0;
        color: #fefefe;
    }

</style>
