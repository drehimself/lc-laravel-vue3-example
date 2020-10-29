<template>
  <div>Another Component, {{ greeting }}</div>
  <div>Foo: {{ foo }}</div>
</template>

<script>
import { ref } from 'vue'

export default {
    props: ['foo'],
    setup() {
        const greeting = ref('hello there')

        return {
            greeting
        }
    }
}
</script>

<style>

</style>
