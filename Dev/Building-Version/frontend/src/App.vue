<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
		<Header title="Ledax.io" 
			:hideToggle="!user"
			:hideUserDropdown="!user"
			:hideLogoImg="!user" />
		<Menu v-if="user" />
		<Loading v-if="validatingToken" />
		<Content v-else />
	</div>
</template>

<script>
import axios from "axios"
import { baseApiUrl, userKey } from "@/global"
import { mapState } from "vuex"
import Header from "@/components/template/Header"
import Menu from "@/components/template/Menu"
import Content from "@/components/template/Content"
import Footer from "@/components/template/Footer"
import Loading from "@/components/template/Loading"

export default {
	name: "App",
	components: { Header, Menu, Content, Footer, Loading },
	computed: mapState(['isMenuVisible', 'user']),
	data: function() {
		return {
			validatingToken: true
		}
	},
	methods: {
		async validateToken() {
			this.validatingToken = true

			const json = localStorage.getItem(userKey)
			const userData = JSON.parse(json)
			this.$store.commit('setUser', null)

			if(!userData) {
				this.validatingToken = false
				this.$router.push({ name: 'auth' })
				return
			}

			const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

			if (res.data) {
				this.$store.commit('setUser', userData)
				
				if(this.$mq === 'xs' || this.$mq === 'sm') {
					this.$store.commit('toggleMenu', false)
				}
			} else {
				localStorage.removeItem(userKey)
				this.$router.push({ name: 'auth' })
			}

			this.validatingToken = false
		}
	},
	created() {
		this.validateToken()
	}
}
</script>

<style>

	/* width */
	::-webkit-scrollbar {
	width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
	background: #f1f1f1;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
	background: rgb(0, 129, 143);
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
	background: #555;
	}
	* {
		font-family: "Lato", sans-serif;
	}

	body {
		margin: 0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 50px 1fr 40px;
		grid-template-columns: 0px 1fr;
		grid-template-areas:
			"header header"
			"menu content"
			"menu content";
	}

	#app.hide-menu {
		grid-template-areas:
			"header header"
			"content content"
			"content content";
	}


</style>