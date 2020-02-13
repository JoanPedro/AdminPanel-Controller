<template>
<div class="map-display-content">
    <div class="widget-title-area">
        <WidgetsTitle 
            icon_2="fa fa-map-marker" 
            main_2="Ledax (Comercial)" 
            sub_2="Edifício CEMPRE - Caminho das Árvores, Salvador - BA." 
            weather="fa fa-cloud"
            icon_3=""
            
        />
    </div>
    <div class="widget-content-area-map">
        <MapWidget />
    </div>
                
    <div class="widget-footer-area">
        <MapFooter icon_3="fa fa-angle-down" 
        site_1="Sites" site_2="Carga" site_3="Alerta" site_4="Bridges" offline/>
    </div>
</div>
</template>

<script>
import WidgetsTitle from './titleArea/WidgetsTitle'
import MapFooter from './footerArea/MapFooter'
import MapWidget from './chartArea/MapWidget'

export default {
    name: 'Map',
    components: {
        WidgetsTitle,
        MapFooter,
        MapWidget
    }
}
</script>

<style>
    .map-display-content{
        width: 100%;
        height: 100%;
        

    }
</style>