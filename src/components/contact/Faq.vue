<template>
    <div class="faq">
        <h3>NOSSO <b>FAQ</b></h3>
        <div class="question-group">
            <div v-for="(item, id) in questions" :key="id">
                <div class="question" @click="showAnswer(id)"><h4>{{item.question}}</h4></div>
                <div class="answer"><p v-for="ans in item.answer" :key="ans.id">{{ans}}</p></div>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    data() {
        return {
            questions: [
                {
                    question: 'Qual o processo até a entrega do projeto?',
                    answer: [
                        'Basicamente são 5 fases:',
                        '1º: Numa primeira reunião você poderá falar com um de nossos consultores, explanando suas ideias e problemas, sem custo nenhum.',
                        '2º: Será elaborada uma proposta com as nossas soluções, escopo, datas e etapas do projeto e o orçamento.',
                        '3º: Caso ambas as partes estejam de acordo, será feito o contrato e após assinatura do contrato o projeto começará a ser elaborado pela nossa equipe.',
                        '4ª: Durante a elaboração do projeto, periodicamente, serão enviados relatórios sobre o andamento do projeto.',
                        '5º: Entrega do projeto.',
                    ],
                },
            ],
        };
    },
    methods: {
        showAnswer(id) {
            let current = this.$el.getElementsByClassName('answer')[id];
            if (current.className.indexOf('active')<0) {
                for (let index = 0; index < this.questions.length; index++) {
                    let ans = this.$el.getElementsByClassName('answer')[index];
                    ans.className = ans.className.replace('active', '');
                }
                current.className += ' active';
            } else {
                for (let index = 0; index < this.questions.length; index++) {
                    let ans = this.$el.getElementsByClassName('answer')[index];
                    ans.className = ans.className.replace('active', '');
                }
            }
        },
    },
    mounted() {
        this.$el.getElementsByClassName('answer')[0].className += ' active';
    }
}
</script>
<style scoped>
.faq {
    background: #fefefe;
    color: #1b1b1e;
    padding: 10%;
}
.question-group{
    border: 1px solid #ffbb00;
    /* border-radius: 0 0 20px 20px; */
    overflow: hidden;
    margin-top: 40px;
}
.question{
    background: #ffd100;
    border: 1px solid #ffbb00;
    color: #1b1b1e;
    padding: 5%;
    font-size: 1.2em;
}
.question:hover { 
    cursor: pointer;
    background: #ffbb00;
}

.answer {
    display: none;
    overflow: hidden;
    padding: 5%;
}
.active { display: block; }

@media screen and (min-width: 700px) {
    .faq { padding: 0 10% 10%; }
    .question-group {
        width: 90%;
        margin-left: 5%;
    }
    .question, .answer { padding: 20px; }
}
</style>
