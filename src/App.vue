<template>
    <div id="app">
        <!-- <img class="logo" src="./assets/logo.png"> -->
        <header-template></header-template>
        <div class="container">
            <router-view></router-view>
        </div>
        <br  />

    </div>
</template>

<script>
import headerTemplate from './components/headerTemplate.vue'

export default {
    components: {
        headerTemplate
    }
}
</script>

<style lang="scss">

    @import './sass/base';
    @import './sass/template';
    @import './sass/vars';

    html {
        height: 100%;
    }


    body {
        display: flex;
        justify-content: center;
        width: 100vw;
    }

    #app {
        color: #2c3e50;
        //max-width: 1200px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
        width: 100%;

        a {
            //color: #42b983;
            text-decoration: none;
        }
    }

    .logo {
        width: 100px;
        height: 100px
    }


</style>
