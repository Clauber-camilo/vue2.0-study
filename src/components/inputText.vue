<template lang="html">
    <input @input="onInput" type="text" value="">
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

<style lang="css">
</style>
