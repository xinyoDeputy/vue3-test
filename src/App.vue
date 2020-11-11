<template>
<SideBar />
<HelloWorld msg="Vue 3 project with Copilot 2" />
<!-- <button>I am outside</button> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SideBar from './components/List.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        SideBar
    }
}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #361748;
    font-family: 'Lato', sans-serif;
}

body {
    font-family: 'Lato', sans-serif;
}
</style>
