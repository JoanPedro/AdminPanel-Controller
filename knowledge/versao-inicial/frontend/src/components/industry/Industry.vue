<template>
    <div class="industry">
        <h1> Industria </h1>
        <h1></h1>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Industry',
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios
            axios.post('https://api.modulusone.com/login', {
            "login": "ledax@hiperideal.com.br", //varEmail is a variable which holds the email
            "password": "123456"
            })
        .then(response => (this.info = response))
    }
}
</script>

<style>

</style>