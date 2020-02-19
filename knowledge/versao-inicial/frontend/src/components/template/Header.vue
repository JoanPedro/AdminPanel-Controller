<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">
            <div class="title-logo" v-if="!hideLogoImg">
                <img src="../../assets/LEDAX_logo_energia_inteligente_branco.png">
            </div>
        </h1>
        <div class="naming">
            <div class="naming-title">
            <router-link to="/">
                {{ title }}
            </router-link>
            </div>
        </div>
        <UserDropdown v-if="!hideUserDropdown" />
    </header>
</template>

<script>
import UserDropdown from './UserDropdown'

export default {
    name: 'Header',
    components: { UserDropdown },
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean,
        hideLogoImg: Boolean
    },
    data: function () {
        return {

        }
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: rgb(0, 129, 143);
        -webkit-box-shadow: 3px 2px 20px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 2px 20px -5px rgba(0,0,0,0.75);
        box-shadow: 3px 2px 20px -5px rgba(0,0,0,0.75);


        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 1.2rem;
        color: black;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .naming {
        width: 60%;
        height: 100%;
        position: absolute;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .naming .naming-title{
        font-size: 1.5rem;
        color: black;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
        margin-right: 20px
    }

    .title a, .naming a{
        color: white;
        text-decoration: none;
        
    }

    .title a:hover, .naming a:hover {
        color: white;
        text-decoration: none;
    }

    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: black;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a i{
        color: white;
        font-size: 2rem; 
    }

    header.header > a.toggle:hover {
        color: black;
        background-color: rgba(0, 0, 0, 0.2);
    }

    div.title-logo {
        width: 170px;
        height: 100%;
        padding: 0 5px;
        margin-top: 15px;

        display: flex;
        align-items: center;
        justify-items: center;
        border-right: 1px solid white;
    }

    div.title-logo img{
        width: 100%;
        height: 100%;
        
    }
</style>
