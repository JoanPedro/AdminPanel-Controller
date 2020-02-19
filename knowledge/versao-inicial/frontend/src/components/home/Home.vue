<template>
    <div class="home">
        <Stat />
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import  { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: { PageTitle, Stat },
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