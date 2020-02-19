<template>
    <aside class = "menu" v-show="isMenuVisible">

        <div class="logo-client">
            <div class="logo-client-parents">

            </div>
        </div>

        <div class="principal-datas">
            <div class="principal-datas-parents">
                <div class="dashboard">
                    aaa
                </div>
                <div class="mensagem">
                    aaaa
                </div>
                <div class="agendamento">
                    aaaa
                </div>  
                <div class="usuarios">
                    aaaa
                </div>
            </div>
        </div>

        <div class="adjusts">
            <div class="adjusts-parents">

            </div>
        </div>

    </aside>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible'])
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

    .principal-datas-parents{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        justify-content: space-between;
        align-items: center;

        box-sizing: Border-box;
    }

    

    .adjusts {
        width: 100%;
        height: 150px;
        border-bottom: 1px solid rgb(255, 255, 255, 0.5);
    }

    .i {
        
    }
</style>