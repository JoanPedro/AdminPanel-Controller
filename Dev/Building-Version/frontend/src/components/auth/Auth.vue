<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="@/assets/ledax_logo_energy_lighting.png" width="200" alt="Logo" />
            <hr>
            <div class="auth-title"> {{ showSignup ? 'Cadastro' : 'Login'}} </div>
            
            <input v-if="showSignup" v-model="user.name" type="text" placeholder="Nome">
            <input v-model="user.email" type="email" placeholder="E-mail">
            <input v-model="user.password" type="password" placeholder="Senha">
            <input v-if="showSignup" v-model="user.confirmPassword"
                type="password" placeholder="Confirme a senha">
            <button v-if="showSignup" @click="signup">Registar</button>
            <button v-else @click="signin">Entrar</button>
            <!-- 
            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
                <span v-else>Não tem cadastro? Registre-se aqui!</span>
            </a>
            -->
        </div>
        <div class="box-moving" id="rotating"></div>
        <!-- <div class="lateral-line"></div> -->
    </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from '@/global'
import axios from 'axios'
export default {
    name: 'Auth',
    data: function() {
        return {
            showSignup: false,
            user: {}
        }
    },
    methods: {
        signin(){
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/'})
                })
                .catch(showError)
        },
        signup() {
            axios.post(`${baseApiUrl}/signup`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    this.showSignup = false
                })
                .catch(showError)
        }
    }
}
</script>

<style>
    
    .auth-content{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 10;

    }

    .auth-modal {
        background-color: #FFF;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.35);
        
        
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
    }

    .auth-title{
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    .auth-modal input{
        
        border: 1px solid #BBB;
        width: 100%;
        margin-top: 15px;
        padding: 3px 8px;
        outline: none;
    }

    .auth-modal button {
        align-self: flex-end;
        background-color: rgb(0, 129, 143);
        color: #FFF;
        padding: 5px 15px;
        margin-top: 5px;
    }

    .auth-modal a {
        margin-top: 35px;

    }

    .auth-modal hr {
        border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient( to right,
            rgba(120, 120, 120, 0),
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0));
    }

    .box-moving{
        
        background-color: rgb(0, 129, 143);
        position: relative;
        animation-name: example;
        animation-duration: 4s;
        animation-iteration-count: 2;
        animation-direction: alternate;
        width: 100px;
        height: 100px;
        -webkit-animation: example 4s infinite linear;
        z-index: -1;
    }

    .lateral-line {
        width: 10px;
        height: 100%;
        

        background-color: rgb(0, 129, 143);
    }

    @keyframes example {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(359deg);
        }
        0%   {background-color:rgb(0, 129, 143); left:400px; top:235px;}
        100%  {background-color:rgb(0, 129, 143); left:400px; top:-500px;}
    }

    

</style>
