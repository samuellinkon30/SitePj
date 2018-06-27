<template>
  <div class="services">
    <h3>NOSSOS <b>SERVIÇOS</b></h3>
    <div class="block-group">
      <div class="block">
        <router-link to="Solutions">
          <b-img width="150" center :src="require('../../assets/img/construcao.png')"></b-img>
        </router-link>
        <div class="block-text">
          <h4 class="block-text-title" v-for="diferencial in diferencial">{{diferencial.Area}}</h4>
          <p class= "texto" v-for="diferencial in diferencial"><br>{{diferencial.Texto}}</p>
        </div>
      </div>
      <div class="block">
        <router-link to="Solutions">
          <b-img width="150" center :src="require('../../assets/img/industria.png')"></b-img>
        </router-link>
        <div class="block-text">
           <h4 class="block-text-title" v-for="diferencial in diferencial">{{diferencial.Area}}</h4>
          <p class= "texto" v-for="diferencial in diferencial"><br>{{diferencial.Texto}}</p>
        </div>
      </div>
      <div class="block block-downside">
        <router-link to="Solutions">
          <b-img width="150" center :src="require('../../assets/img/demanda.png')"></b-img>
        </router-link>
        <div class="block-text">
          <h4 class="block-text-title" v-for="diferencial in diferencial">{{diferencial.Area}}</h4>
          <p class= "texto" v-for="diferencial in diferencial"><br>{{diferencial.Texto}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default
{
  data()
  {
    return {
    diferencial:
    [
        {
          Area: 'Computação',
          Texto:'No nosso desenvolvimento, estruturamos e modelamos os sistemas e websites buscando a eficiência máxima do nosso produto. Tornamos a experiência do usuário única e ágil, compatível com as necessidades dele e alinhando às exigências de mercado. Para tornar isso possível, utilizamos avançadas tecnologias como o VueCli, Bootstrap, MySQL, NodeJs, dentre outros frameworks para atingir o alto nível de desenvolvimento. Nosso banco de dados consistente torna a experiência do cliente altamente positiva e ágil, com funcionalidades únicas e totalmente personalizáveis.  Além disso, damos ao nosso cliente a opção de incluir em seu projeto a possibilidade de edição de campos de texto e algumas imagens, sem a necessidade de nenhum conhecimento técnico prévio. Totalmente acessível, com utilização simples e que poupa preocupações futuras com manutenção e/ou atualização. Desempenhamos serviços com qualidade profissional, organização e logística compatíveis com o mercado, baseados em metodologias ágeis aplicadas aos nossos processos. Tudo isso configura a melhor escolha e a garantia de satisfação por parte do nosso contratante.'
        },
    ],
    };
  }
};
</script>
<style scoped>
.texto
{
  font-size: 1.3em;
}
.services {
    padding: 10%;
    text-align: center;
    color: #fefefe;
    background: url('../../assets/img/servicos.jpg');
    background-position: relative;
    background-size: 100%;
       }
.services h3 , b
{
  color: white;
}
.block {
  text-align: center;
  margin: 5% 2% 0 2%;
  background-color: transparent;
  display: inline-block;
  vertical-align: top;
}

.block-text { margin-top: 20px;
color: white;}

@media screen and (min-width: 400px) {
    .block-group { text-align: center; }
    .block { width: 46%; }
}

@media screen and (min-width: 700px) {
    .services {
        padding: 5%;
        text-align: left;
    }
    .block {
        width: 29%;
    }
}
</style>
