<template>
    <div class='map-widget-for-map'>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.861342758379!2d-38.45285428577272!3d-12.980719063508134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b045c3df8f5%3A0xee72b53306eea578!2sAv.%20Tancredo%20Neves%2C%202227%20-%20Caminho%20das%20%C3%81rvores%2C%20Salvador%20-%20BA%2C%2041820-021!5e0!3m2!1spt-BR!2sbr!4v1579710044410!5m2!1spt-BR!2sbr" 
                width="100%" height="100px" frameborder="0" allowfullscreen="true"></iframe>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'MapWidget',

}
</script>

<style>
    .map-widget-for-map{
        width: 90%;
        height: 102px;

        border: 1px solid rgb(0, 0, 0, .2)
    }

    .map-widget-for-map iframe {
        
    }

</style>