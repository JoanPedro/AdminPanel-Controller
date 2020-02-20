<template>
    <aside class = "menu" v-show="isMenuVisible">

        <div class="logo-client">
            <div class="logo-client-parents">

            </div>
        </div>

        <div class="principal-datas">
            <div class="principal-datas-parents">
                <div class="dashboard">
                    <i class="fa fa-dashcube" syle=""></i> <a class ="a-color-white" href="#"> Dashboard </a> 
                </div>
                <div class="mensagem">
                    <i class="fa fa-comment" syle=""></i> <a class ="a-color-white" href="#"> Mensagens </a>
                </div>
                <div class="agendamento">
                    <i class="fa fa-calendar" syle=""></i> <a class ="a-color-white" href="#"> Agendamento </a>
                </div>  
                <div class="usuarios">
                    <i class="fa fa-users" syle=""></i> <a class ="a-color-white" href="#"> Usuários </a>
                </div>
            </div>
        </div>

        <div class="adjusts">
            <div class="adjusts-parents">
                <div class="geral">
                    <i class="fa fa-eye" syle=""></i> <a class ="a-color-white" href="#"> Geral </a>
                </div>  
                <div class="notifications">
                    <i class="fa fa-bell" syle=""></i> <a class ="a-color-white" href="#"> Notificações </a>
                </div>
                <div class="sz">
                    <i class="fa fa-calenda" syle=""></i> <a class ="a-color-white" href="#">  </a>
                </div>  
                <div class="ss">
                    <i class="fa fa-use" syle=""></i> <a class ="a-color-white" href="#">  </a>
                </div>
            </div>
        </div>

    </aside>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible']),
    methods: {

        }
    }
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, rgba(0, 129, 143, 1), rgba(0, 129, 143, .9) );
    
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        border-top: 1px solid white;
        -webkit-box-shadow: 3px 2px 20px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 2px 20px -5px rgba(0,0,0,0.75);
        box-shadow: 3px 2px 20px -5px rgba(0,0,0,0.75);

    }

    .logo-client {
        width: 100%;
        height: 100px;
        border-bottom: 1px solid rgb(255, 255, 255, 0.5);
    }

    .principal-datas {
        width: 100%;
        height: 200px;
        border-bottom: 1px solid rgb(255, 255, 255, 0.5);
    }

    .principal-datas-parents, 
    .adjusts-parents{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        justify-content: space-around;
        align-items: left;

        box-sizing: Border-box;
    }

    .a-color-white:hover,
    .principal-datas-parentsi:hover {
        text-decoration: none;
    }

    .a-color-white  {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
    }

    .principal-datas-parents i,
    .adjusts-parents i
    {
        padding: 5px;
    }

    .adjusts {
        width: 100%;
        height: 150px;

    }

    .principal-datas-parents i,
    .adjusts-parents i{
        color: white;
    }


</style>