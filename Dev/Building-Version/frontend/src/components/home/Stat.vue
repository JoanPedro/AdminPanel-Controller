<template>

<div class="dashboard-content">
    
    <!-- This is the iframe from Qlik software -->  
    <!--<iframe src="https://54.90.181.105/single/?appid=6ad52212-3ebe-469e-9616-f65f59d7fd98&sheet=52a9ef31-08f0-4f81-bbef-f8cfe2df14a4&opt=ctxmenu" style="border:none;width:100%;height:100%;"></iframe>
    -->
    
    <div id="mapid">
        <!-- Here stay a map design. -->
    </div>
</div>
</template>

<script>

import L from 'leaflet'

export default {

    name: 'Stat',
    data : function(){
        return {
            mapToken: 'pk.eyJ1IjoicGVkcm9zb3V6YSIsImEiOiJjazdsdTk1ajAwNHV6M2lxdHJ0dWF2dno1In0.UDeMwxtI_kTjbiy0gxuCag'
        }
    },
    methods:    {
        leafletMap (){
            var mymap = L.map('mapid').setView([51.505, -0.09], 13)

            L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${this.mapToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 20,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);
        }   
    },
    mounted(){
        this.leafletMap()
    }
}
</script>

<style>
.dashboard-content{
    width: 100%;
    height: 100%;
}
#mapid { 
    height: 180px; 
    width: 30%; 
    margin: 5px;
}

</style>