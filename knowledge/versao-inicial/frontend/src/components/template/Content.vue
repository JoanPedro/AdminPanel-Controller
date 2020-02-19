<template>
    <div class = "content">
        <router-view></router-view>
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