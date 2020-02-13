<template slot="cell(title)">
<div class="main-page-title">
    <div class="page-title" v-if="!hideTitle">
        <h1><i v-if="icon" :class="icon"></i> {{ main }}</h1>
        <h2>{{ sub }}</h2>        
    </div>
    <div class="page-title-tabs">
        <div class="admin-pages-tabs" >
                <b-tabs card v-if="!hideTabs"> 
                    <b-tab title='Dashboard' active>
                        <UserAdmin />
                    </b-tab>
                    <b-tab title="Energy" disabled>
                        <ArticleAdmin />
                    </b-tab>
                    <b-tab title ="Others" disabled>
                        <CategoryAdmin />
                    </b-tab>
                </b-tabs>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['icon', 'main', 'sub', 'hideTabs', 'hideTitle']
}
</script>

<style>
    .main-page-title{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .page-title{
        width: 30%;
        height: 100%;

    }

    .page-title-tabs{
        width: 100%;
        height: 100%;
    }
    .page-title h1 {
        margin: 0px;
        font-size: 1.5rem;

        
    }

    .page-title i{
        color: rgb(0, 129, 143);
    }

    .page-title h2 {

        color: #777;
        margin-top: 5px;
        font-size: 1rem;
    }


</style>
