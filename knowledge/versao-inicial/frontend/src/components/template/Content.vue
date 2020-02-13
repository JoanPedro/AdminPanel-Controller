<template>
    <div class = "content">
        <b-row>
            <b-col md="12">
                <router-view></router-view>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content{
        grid-area: content;
        background-color: rgba(239, 239, 238, .2);
        padding: 5px 5px;
    }
</style>