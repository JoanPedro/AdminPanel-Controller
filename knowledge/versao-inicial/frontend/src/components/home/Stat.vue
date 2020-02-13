<template>

<div class="dashboard-content">
    
    <div class="dashboard-top-content">
        <div class="wrap-map-widget">
            <Map />
        </div>
        <div class="realtime-content">
            <Consumption />
        </div>
    </div>
    <div class="dashboard-top-content">
        <div class="average-content">
            <Average />
        </div>
        <div class="lastdays-content">
            <SevenDays />
        </div>
    </div>

</div>
</template>

<script>
import SevenDays from '../dashboard/SevenDays'
import Average from '../dashboard/Average'
import Consumption from '../dashboard/Consumption'
import Map from '../dashboard/Map'

export default {
    name: 'Stat',
    components: {
        SevenDays,
        Average,
        Consumption,
        Map
    }
}
</script>

<style>
    .dashboard-content{
        width: 100%;
        height: 95%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

       
    }

    .dashboard-top-content{
        width: 100%;
        height: 50%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    
    }

    .wrap-map-widget{
        width: 49.8%;
        height: 98%;

        border-radius: 5px;
        box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, .3);

        display: flex;
        flex-wrap: wrap;

    }

    .map-content{
        width: 100%;
        height: 100%;
    }

    .realtime-content{
        width: 49.8%;
        height: 98%;

        border-radius: 5px;
        box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, .3);

        display: flex;
        flex-wrap: wrap;
    }

    .average-content{
        width: 49.8%;
        height: 98%;

        border-radius: 5px;
        box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, .3);

        display: flex;
        flex-wrap: wrap;
    }

    .lastdays-content{
        width: 49.8%;
        height: 98%;

        border-radius: 5px;
        box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, .3);

        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    .widget-title-area{
        width: 100%;
        height: 25%;
    }

    .widget-content-area-map{
        width: 100%;
        height: 50%;

        display: flex;
        flex-wrap: wrap;

        align-items: center;
        justify-content: center;
    }

    .widget-content-area-realtime{
        width: 100%;
        height: 60%;

    }

    .widget-content-area-average{
        width: 100%;
        height: 60%;

    }

    .widget-content-area-lastdays{
        width: 100%;
        height: 60%;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: initial;

    }

    .widget-footer-area{
        width: 100%;
        height: 25%;

        padding: 5px;

    }

    @media screen and (max-width: 1200px) {
        
    }


</style>