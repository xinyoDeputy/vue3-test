<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
        <h2>Button</h2>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
    </el-row>

    <el-row>
        <h2>Dropdown</h2>
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-row>

    <el-row>
        <h2>Input</h2>
        <el-input placeholder="Please input" v-model="input"></el-input>
        <el-input placeholder="Please input" v-model="input" :disabled="true"></el-input>
    </el-row>

    <el-row>
        <h2>Input Number</h2>
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
    </el-row>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            input: '',
            num: 0
        }
    }
}
</script>

<style scoped>
.hello {
    width: 80vw;
    max-width: 1280px;
    margin: 15vh auto 0 auto;
}

h2,
h3 {}

.el-row {
    margin-top: 1.35em;
}

.el-input {
    width: 200px;
    margin-right: 15px;
}
</style>
