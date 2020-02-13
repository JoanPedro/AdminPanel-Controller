<template>
    <div class="map-footer-display">
        
        <div class="map-footer-sites">
            <div class="top-map-footer-sites">
                
                    <div class="msg-droping">
                        <h1> {{ site_1 }} </h1>
                    </div>   
                    <div class="droping-down">
                        <b-dropdown
                            variant="link"
                            size="sm"
                            no-caret
                            right >
                            <template slot="button-content">
                                <i v-if="icon_3" :class="icon_3"></i>
                            </template>
                            <slot name="controls"/>
                            <b-dropdown-item href="#"><i class="one-action"> Uma ação </i> </b-dropdown-item>
                            <b-dropdown-item href="#"><i class="two-action"> Outra ação </i></b-dropdown-item>
                        </b-dropdown>

                </div>
                
            </div>
            <div class="middle-map-footer-sites">
                <h1> 1 </h1>
            </div>
            <div class="bottom-map-footer-sites">
                <div class="title-radius">

                </div>
                <div class="full-radius">
                    <i class="fa fa-angle-right"></i>
                </div> 
            </div>
        </div>
        <div class="map-footer-charger">
                        <div class="top-map-footer-sites">
                
                    <div class="msg-droping">
                        <h1> {{ site_2 }} </h1>
                    </div>   
                    <div class="droping-down">
                        <b-dropdown
                            variant="link"
                            size="sm"
                            no-caret
                            right >
                            <template slot="button-content">
                                <i v-if="icon_3" :class="icon_3"></i>
                            </template>
                            <slot name="controls"/>
                            <b-dropdown-item href="#"><i class="one-action"> Uma ação </i> </b-dropdown-item>
                            <b-dropdown-item href="#"><i class="two-action"> Outra ação </i></b-dropdown-item>
                        </b-dropdown>

                </div>
                
            </div>
            <div class="middle-map-footer-sites">
                <h1> 548.9kW </h1>
            </div>
            <div class="bottom-map-footer-sites">
                <div class="title-radius">

                </div>
                <div class="full-radius">
                    <i class="fa fa-angle-right"></i>
                </div> 
            </div>
        </div>
        <div class="map-footer-alerts">
                        <div class="top-map-footer-sites">
                
                    <div class="msg-droping">
                        <h1> {{ site_3 }} </h1>
                    </div>   
                    <div class="droping-down">
                        <b-dropdown
                            variant="link"
                            size="sm"
                            no-caret
                            right >
                            <template slot="button-content">
                                <i v-if="icon_3" :class="icon_3"></i>
                            </template>
                            <slot name="controls"/>
                            <b-dropdown-item href="#"><i class="one-action"> Uma ação </i> </b-dropdown-item>
                            <b-dropdown-item href="#"><i class="two-action"> Outra ação </i></b-dropdown-item>
                        </b-dropdown>

                </div>
                
            </div>
            <div class="middle-map-footer-sites">
                <h1> 14 </h1>
            </div>
            <div class="bottom-map-footer-sites">
                <div class="title-radius">

                </div>
                <div class="full-radius">
                    <i class="fa fa-angle-right"></i>
                </div>                 
            </div>
        </div>
        <div class="map-footer-bridges">
            <div class="top-map-footer-sites">
                
                <div class="msg-droping">
                    <h1> {{ site_4 }} </h1>
                </div>   
                <div class="droping-down">
                        <b-dropdown
                            variant="link"
                            size="sm"
                            no-caret
                            right >
                            <template slot="button-content">
                                <i v-if="icon_3" :class="icon_3"></i>
                            </template>
                            <slot name="controls"/>
                            <b-dropdown-item href="#"><i class="one-action"> Uma ação </i> </b-dropdown-item>
                            <b-dropdown-item href="#"><i class="two-action"> Outra ação </i></b-dropdown-item>
                        </b-dropdown>

                </div>
                
            </div>
            <div class="middle-map-footer-sites">
                <h1> 9 </h1>
            </div>
            <div class="bottom-map-footer-sites">
                <div class="title-radius">

                </div>
                <div class="full-radius">
                    <i class="fa fa-angle-right"></i>
                </div>                
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'MapFooter',
    props: ['icon_3', 
        'site_1', 'site_2', 'site_3', 'site_4',
        'middle_1', 'middle_2', 'middle_3', 'middle_4',
        'bottom_1','bottom_2', 'bottom_3', 'bottom_4',
        'offline']
}
</script>

<style>


    .map-footer-display{
        width: 100%;
        height: 100%;
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .map-footer-sites {
        height: 100%;
        width: 20%;

        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px rgb(0, 129, 143, .2);

        display: flex;
        flex-direction: column;
    }

    .top-map-footer-sites {
        width: 100%;
        height: 100%;
        
        display: flex;
        flex-direction: row;
    }
    .top-map-footer-sites-dropdown {
        display: flex;
        flex-direction: row;
    }

    .droping-down{
        width: 30%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        justify-items: right;
    }

    .droping-down i{
        font-size: 1.2rem;
    }


    .msg-droping{
        width: 70%;
        height: 100%;
        padding: 15px;

        display: flex;
        align-items: center;
        justify-content: left;
        justify-items: left;

    }

    .msg-droping h1{
        font-size: 1vw;
        font-weight: 600;
    }    

    .middle-map-footer-sites {
        width: 70%;
        height: 100%;
        padding: 15px 0px 0px 15px;

        display: flex;
        align-items: center;
        justify-content: left;
        justify-items: left;
    }

    .middle-map-footer-sites h1{
        font-size: 1.2vw;
        font-weight: 900;
    }

    .map-footer-charger {
        height: 100%;
        width: 20%;
        
        border-radius: 5px;
        box-shadow: 1px 1px 1px 1px rgb(0, 129, 143, .5);
    }

    .map-footer-alerts {
        height: 100%;
        width: 20%;

        border-radius: 5px;
        box-shadow: 1px 1px 1px 1px rgb(0, 129, 143, .5);
    }

    .map-footer-bridges {
        height: 100%;
        width: 20%;

        border-radius: 5px;
        box-shadow: 1px 1px 1px 1px rgb(0, 129, 143, .5);
    }

    .top-map-footer-sites {
        width: 100%;
        height: 30%;

    }

    .middle-map-footer-sites {
        width: 100%;
        height: 40%;

    }
    .bottom-map-footer-sites {
        width: 100%;
        height: 30%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    .bottom-map-footer-sites .full-radius:hover{
        background-image:  linear-gradient(to right, rgba(0, 129, 143, .3), rgba(0, 129, 143, .1) );
    }

    .bottom-map-footer-sites .full-radius:hover > i{
        transform: scale(1.3);
        transition: .5s;
    }

    .full-radius{
        width: 10%;
        height: 20px;
        cursor: pointer;        
        display: flex;
        align-items: center;
        justify-content: center;
        justify-items: right;

        padding: 10px;

        margin-right: 8px;
        margin-bottom: 10px;
        border-radius: 100%;
        border: 1px solid rgb(0, 129, 143);
    }

    .full-radius i{
        font-size: .8rem;
        font-weight: 700;
        
    }

    .title-radius {
        width: 80%;
        height: 100%;

        padding: px;
    }

    .title-radius h1{
        font-size: .6rem;
    }


</style>