<template lang="html">
    <div class="">

        <div class="increment-block">

            <p>
                {{total}}
            </p>
            <button-increment @increment="incrementTotal"></button-increment>
        </div>
        <div class="text-block">

            <input-text v-model="text"></input-text>
            <p>
                You Entered : {{text}}
            </p>
        </div>

    </div>

</template>

<script>
import buttonIncrement from '_components/buttonIncrement.vue'
import inputText from '_components/inputText.vue'

export default {
    data () {
        return {
            show: true,
            total: 0,
            text: ''
        }
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    },
    components: {
        buttonIncrement,
        inputText
    }
}
</script>

<style lang="scss">


</style>
