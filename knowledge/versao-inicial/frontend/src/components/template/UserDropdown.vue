<template>
    <div class="user-dropdown">
        <div class="user-button">
            <span class="d-none d-sm-block">{{user.name}}</span>
            <div class="user-dropdown-img">
                <Gravatar :email="user.email" alt="User" />
            </div>
            <i class="fa fa-angle-down"></i>
        </div>
        <div class="user-dropdown-content">
            <router-link to="/industry" v-if="(user.adminMaster || user.adminEnterprise)">
                <i class="fa fa-industry"></i> Indústria 
            </router-link>
            <router-link to="/education" v-if="(user.adminMaster || user.manager)">
                <i class="fa fa-graduation-cap"></i> Escola 
            </router-link>
            <router-link to="/marketplace" v-if="(user.adminMaster || user.customer || user.manager || user.adminEnterprise)">
                <i class="fa fa-truck"></i> Comércio 
            </router-link>
            <router-link to="/admin" v-if="user.adminMaster">
                <i class="fa fa-cogs"></i> Administração 
            </router-link>
            <a href @click.prevent="logout"><i class="fa fa-sign-out"></i> Sair </a>
        </div>
    </div>
</template>

<script>
import { userKey } from '@/global'
import { mapState } from 'vuex'
import Gravatar from 'vue-gravatar'

export default {
    name: 'UserDropdown',
    components: { Gravatar },
    computed: mapState(['user']),
    methods: {
        logout(){
            localStorage.removeItem(userKey)
            this.$store.commit('setUser', null)
            this.$router.push({ name: 'auth'})
        }
    }
}
</script>

<style>
    .user-dropdown {
        height: 100%;
        position: relative;
    }

    .user-button {
        display: flex;
        align-items: center;
        color: white;
        font-weight: 100;
        height: 100%;
        padding: 0px 20px;
        font-size: 1.2rem;
        
    }

    .user-button:hover{
        background-color: rgba(0, 0, 0, .2);
    }

    .user-dropdown-img {
        margin: 0px 10px;
    }

    .user-dropdown-img > img {
        max-height: 37px;
        border-radius: 5px;
    }

    .user-dropdown-content {
        position: absolute;
        right: 0px;
        background-color: #f9f9f9;
        min-width: 170px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear, 
    }

    .user-dropdown:hover .user-dropdown-content {
        visibility: visible;
        opacity: 1;
    }

    .user-dropdown-content a {
        text-decoration: none;
        color: black;
        padding: 10px;
    }

    .user-dropdown-content a:hover {
        text-decoration: none;
        color: #000;
        background-color: #ededed;
    }

    a i {
        color: rgb(0, 129, 143);
    }


</style>