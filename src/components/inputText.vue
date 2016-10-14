<template lang="html">
    <input class="input-text" @input="onInput" type="text" />
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        onInput: function (event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../sass/vars';

    .input-text {
        padding: 10px;
        border-radius: 3px;
        border: 1px solid $color1;
    }

</style>
