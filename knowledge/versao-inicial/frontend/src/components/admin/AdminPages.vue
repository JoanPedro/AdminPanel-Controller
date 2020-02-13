<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia" :hideTabs="!hideTabs"/>
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Usuários" active>
                        <UserAdmin />
                    </b-tab>
                    <b-tab title="Projetos" disabled>
                        <ArticleAdmin />
                    </b-tab>
                    <b-tab title ="Plano Premium" disabled>
                        <CategoryAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import UserAdmin from './UserAdmin'
import CategoryAdmin from './PremiumAdmin'
import ArticleAdmin from './ProjetosAdmin'

export default {
    name: 'AdminPages',
    components: { 
        PageTitle,
        UserAdmin,
        CategoryAdmin,
        ArticleAdmin
     }
}
</script>

<style>

</style>