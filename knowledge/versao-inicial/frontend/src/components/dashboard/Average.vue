<template>
<div class="average-content-dashboard">
    <div class="widget-title-area">
        <WidgetsTitle 
            icon_2="fa fa-bolt" 
            main_2="Atual vs Predito" 
            sub_2="Informações Gerais." 
            weather="fa fa-line-chart"
            icon_3="fa fa"
        />
    </div>
    <div class="widget-content-area-average">
        <iframe src="http://localhost:4848/single/?appid=C%3A%5CUsers%5CLDXNT25%5CDocuments%5CQlik%5CSense%5CApps%5Cll.qvf&obj=jnpnxKD&opt=ctxmenu" style="border:none;width:100%;height:100%;"></iframe>
    </div>
    <div class="widget-footer-area">

    </div>
</div>
</template>

<script>
import WidgetsTitle from './titleArea/WidgetsTitle'
export default {
    name: 'Average',
        components: {
        WidgetsTitle
    }
}
</script>

<style>
    .average-content-dashboard{
        width: 100%;
        height: 100%;

    }
</style>