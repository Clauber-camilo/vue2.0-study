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

    $margin: 176;
    $percent-gap: ($margin / 1920 * 100) * 2;

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

    .container {
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
        @media screen and (min-width: 768px) {

                width: 750px;

        }
        @media screen and (min-width: 992px) {

                width: 970px;

        }
        @media screen and (min-width: 1200px) {

                width: 1170px;

        }

        &--big {
            width: calc(100% - #{$percent-gap * 1%});

            @media screen and (max-width: 992px) {
                width: 100%;
            }
        }

    }
</style>
