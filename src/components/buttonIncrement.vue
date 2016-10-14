<template lang="html">
    <button class="btn" @click="increment" type="button" name="button" > {{count}}</button>
</template>

<script>
export default {
    data () {
        return {
            count: 0
        }
    },
    methods: {
        increment: function () {
            this.count += 1
            this.$emit('increment')
        }
    }
}
</script>

<style lang="css">
</style>
