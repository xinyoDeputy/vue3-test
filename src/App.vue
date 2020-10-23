<template>
<HelloWorld msg="Vue 3 playground with Copilot 2" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
    margin: 3vh 3vh 0 3vh;
    font-family: 'Lato', sans-serif;
}

body {
    font-family: 'Lato', sans-serif;
}
</style>
