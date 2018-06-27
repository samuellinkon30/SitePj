<template>
    <form @submit.prevent="send" class="form">
        <div class="form-item">
            Nome:<br><input type="text" required v-model.trim="client.name">
        </div>
        <div class="form-item">
            Email:<br><input type="email" required v-model.trim="client.email">
        </div>
        <div class="form-item">
            Telefone:<br><input type="text" required v-model.trim="client.phone">
        </div>
        <div class="form-item">
            Como você nos conheceu?<br>
            <select required v-model.trim="client.met">
                <option v-for="(item, id) in howMet"
                        :key="id"
                        :value="item">
                    {{item}}
                </option>
            </select>
        </div>
        <div class="form-item">
            Sua mensagem:<br><textarea required v-model.trim="client.message" rows="10"></textarea>
        </div>
        <input class="btn" type="submit" :value="btnMsg">

    </form>
</template>
<script>
import Services from '../shared/info/services.js';
import axios from 'axios';

export default {
    props: [
        'btnMsg',
        'project',
    ],
    data() {
        const serv = [];
        Services.services.forEach(el => {
            el.projects.forEach(elem => {
                serv.push(elem.title);
            });
        });
        return {
            services: serv,
            howMet: [
                'Facebook',
                'Instagram',
                'LinkedIn',
                'Busca no Google',
                'Evento',
                'Material Impresso',
                'Indicação',
                'Outro',
            ],
            client: {},
        };
    },
    methods: {
        send() {
            let t = this.client;
            const client = {
                "name": t.name,
                "email": t.email,
                "phone": t.phone,
                "met": t.met,
                "project": this.project,
                "message": t.message,
            };
            console.log(client)
            axios.post('https://polijuniorengenharia-api.herokuapp.com/email', client).then(response => {
                alert('Solicitação enviada com sucesso!');
                console.log(response);
            }, error => {
                alert('Não foi possível enviar a solicitação.');
                console.log(error);
            });
        },
    },
}
</script>
<style scoped>
    input, textarea, select {
        resize: none;
        margin-top: 10px;
        width: 100%;
        border: 1px solid #4c4f4d;
        border-radius: 3px;
        color: #1b1b1e;
        padding: 10px;
    }
    select:disabled { background: #dbdaea;}

    .form {
        padding: 10% 8% 5%;
        text-align: center;
        display: inline-block;
        width: 100%;
    }
    .form-item {
        text-align: left;
        margin-bottom: 20px;
    }
    .btn {
        background: #ffd100;
        border: 1px solid #ffbb00;
        border-radius: 3px;
        width:90%;
        padding: 10px 0;
        margin: 2% 0;
        color: #fefefe;
    }
    .btn:hover {
        cursor: pointer;
    }
    @media screen and (min-width: 700px) {
        .form {
            width: 50%;
            padding: 5%;
            margin: auto;
        }
    }
    @media screen and (min-width: 1000px) {
        .form {
            padding-right: 15%;
        }
    }
</style>
