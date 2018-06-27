<template>
<div>
    <c-banner/>
    <c-differential/>
    <c-principais/>
    <c-depoimentos/>
    <c-premiacoes/>
    <c-blog/>
    <c-clientes/>
    <c-partners/>
</div>
</template>

<script>
import cBanner from './Banner';
import cDifferential from './Differential';
import cServices from './Services';
import cDownbanner from './SideDownBanner';
import cPartners from './../shared/Partners';
import cValues from './../about/Values';
import cPrincipais from './../solutions/Principais';
import cDepoimentos from './Depoimentos';
import cPremiacoes from './Premiacoes';
import cClientes from './Clientes';
import cBlog from './Blog';




export default {
    components: {
        cBanner,
        cDifferential,
        cServices,
        cDownbanner,
        cPartners,
        cValues,
        cPrincipais,
        cDepoimentos,
        cPremiacoes,
        cClientes,
        cBlog
    },
};
</script>

<style scoped>


</style>
