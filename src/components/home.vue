<template lang="html">
    <div class="">
        <p>
            HOME
        </p>

        <button class="btn" v-on:click="show = !show">
            Toggle
        </button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
    </div>

</template>

<script>
export default {
    data () {
        return {
            show: true
        }
    },
    computed: {},
    ready () {},
    attached () {},
    methods: {},
    components: {}
}
</script>

<style lang="scss">

    .btn {
        padding: 10px;
        border-radius: 5px;
        background-color: #007f7f;
        margin: 10px 0 ;
        color: white;
        font-weight: bold;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

</style>
