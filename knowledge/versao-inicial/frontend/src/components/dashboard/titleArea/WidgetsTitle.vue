<template>
    <div class="widgets-title">
        <div class="widgets-title-icon">
            <h1><i v-if="icon_2" :class="icon_2"></i></h1>
        </div>
        <div class="widgets-title-names">
            <h1> {{ main_2 }} </h1>
            <h2> {{ sub_2 }} </h2>
        </div>
        <div class="widgets-title-icon_weather">
            <div class="widgets-title-icon_weater-arrow" v-if="!hideArrow">
                <b-dropdown
                    variant="link"
                    size="sm"
                    no-caret
                    right >
                    <template slot="button-content">
                        <a href=""><i v-if="icon_3" :class="icon_3"></i></a>
                    </template>
                    <slot name="controls"/>
                    <b-dropdown-item href="#"><i class="one-action"> Uma ação </i> </b-dropdown-item>
                    <b-dropdown-item href="#"><i class="two-action"> Outra ação </i></b-dropdown-item>
                </b-dropdown>
                
            </div>
            <div class="widgets-title-icon_weater-icon">
                <h1><i v-if="weather" :class="weather"></i></h1>
                
            </div>   
        </div>
    </div>
</template>

<script>
export default {
    name: 'WidgetsTitle',
    props: ['icon_2', 'main_2', 'sub_2', 'weather','icon_3','hideArrow','hideBar','icon_4']

}
</script>

<style>
    .widgets-title{
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-items: center;
        flex-direction: row;
        
    }

    .widgets-title-icon{
        width: 10%;
        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .widgets-title-names{
        width: 50%;
        height: 100%;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
    }

    .widgets-title-icon_weather{
        width: 40%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    .widgets-title-icon_weater-arrow{
        width: 60%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-items: center;

    }

    i.one-action, i.two-action{
        font-size: 25px;
    }


    .widgets-title-icon_weater-arrow a {
        font-size: 20px;
    }

    .widgets-title-icon_weater-icon{
        width: 40%;
        height: 100%;
        padding: 5px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .widgets-title h1 {
        margin: 0px;
        font-size: 1.5vw;
    }

    .widgets-title i{
        color: rgb(0, 129, 143);
    }

    .widgets-title h2 {
        color: #777;
        margin-top: 3px;
        font-size: 1vw;
    }

</style>
