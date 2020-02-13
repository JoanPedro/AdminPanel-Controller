<template>
    <footer class = "footer">
        <span>Copyright <strong> LEDAX </strong> © 2020-2020 </span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: #DDD;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
        margin-top: 0px;
    }
</style>