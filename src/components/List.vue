<template>
<div class="sidebar--container">
    <ul>
        <li>button</li>
        <li>Dropdown</li>
        <li>Inputs</li>
        <li>Text Input</li>
        <li>Number Input</li>
        <li>Select Input</li>
        <li>Switch</li>
        <li>Radio</li>
        <li>Checkbox</li>
        <li>Color Picker</li>
        <li>Page Heading</li>
        <li>Breadcrumb</li>
        <li>Tooltip</li>
        <li>Dialog</li>
        <li>Tabs</li>
        <li>Transitions</li>
        <li>Popover</li>
        <li>Table</li>
        <li></li>
        <li></li>
    </ul>
</div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style lang="scss" scoped>
@import '../style/varb.scss';
.sidebar--container{
    background: $color-bg--primary;
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
}
ul, li{
    list-style: none;
}
ul {
    margin-top: 10vh;    
}
li {
    padding: 5px 0;
}
</style>
