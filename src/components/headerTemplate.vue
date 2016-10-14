<template>
    <div class="header">
        <h1>{{ msg }}</h1>
        <div class="menu">
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/">Go to Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'First study Vue 2.0'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    @import '../sass/vars';

    .header {

        height: 50px;
        background: $color2;
        display: flex;
        align-items: center;
        justify-content: space-between;;
        padding: 0 15px;

        h1 {
            color: $color5;
            font-weight: normal;
        }

        .menu {
            a {
                color: $color5;
                margin: 0 5px;
            }
        }
    }

</style>
