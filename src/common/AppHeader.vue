<template>
    <header class="header-global">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
            <router-link class="navbar-brand" to="/">
                <img class="logo-black" src="img/brand/logo-black.png" alt="logo">
                <img class="logo-white" src="img/brand/logo-white.png" alt="logo">
            </router-link>
            <navbar-toggler :toggled="toggled"
                            :class="{toggled: toggled}"
                            @click.native.stop="toggled = !toggled">
            </navbar-toggler>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" >Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about" >About</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
import NavbarToggler from './NavbarToggler'
export default {
    name: 'AppHeader',
    components: {
        NavbarToggler
    },
    props: {
    },
    data() {
        return {
            toggled: false
        }
    },
    methods: {
        closeNav() {
            this.toggled = false;
        }
    }
};
</script>
<style>
</style>
