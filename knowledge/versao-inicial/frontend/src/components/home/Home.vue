<template>
    <div class="home">
        <b-tabs  > 
            <b-tab title="Gerencial" v-if="(user.adminMaster || user.adminEnterprise || user.manager)" active>
            </b-tab>
            <b-tab title="Operacional" v-if="(user.adminMaster || user.adminEnterprise || user.customer)" active>
            </b-tab>
            <!--
            <b-tab title ="Outros" disabled>
            </b-tab>
            -->
            </b-tabs>   
        <Stat />
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import  { baseApiUrl } from '@/global'
import { userKey } from '@/global'
import { mapState } from 'vuex'

export default {
    name: 'Home',
    components: { PageTitle, Stat },
    computed: mapState(['user']),
    data: function(){
        return {
            stat:{}
        }
    },
    methods: {
        getStats(){
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        }
    },  
    mounted(){
        this.getStats()
    }
}
</script>

<style>

    .home{
        width: 100%;
        height: calc(100%);
    }

    
</style>