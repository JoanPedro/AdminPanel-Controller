<template>
    <div class="home">
        <b-row> 
            <b-col>
                <div class="title-of-page">
                    <PageTitle icon="fa fa-home" main="Dashboard" sub="Sistema Geral" :hideTitle="!hideTitle" />
                </div>
            
                <Stat />
            </b-col>
        </b-row>
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

    Stat {
        display: flex;
        flex-wrap: wrap;
    }
    
</style>