<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <div class="el-row">
        <h2>Button</h2>
        <co-button>Default</co-button>
        <co-button type="primary">Primary</co-button>
        <co-button type="success">Success</co-button>
    </div>

    <div class="el-row">
        <h2>Dropdown</h2>
        <co-dropdown>
            <span class="co-dropdown-link">
                Dropdown List<i class="co-icon-arrow-down co-icon--right"></i>
            </span>
            <template #dropdown>
                <co-dropdown-menu>
                    <co-dropdown-item>Action 1</co-dropdown-item>
                    <co-dropdown-item>Action 2</co-dropdown-item>
                    <co-dropdown-item>Action 3</co-dropdown-item>
                    <co-dropdown-item disabled>Action 4</co-dropdown-item>
                    <co-dropdown-item divided>Action 5</co-dropdown-item>
                </co-dropdown-menu>
            </template>
        </co-dropdown>
    </div>

    <div class="el-row">
        <h2>Input</h2>
        <co-input placeholder="Please input" v-model="input"></co-input>
        <co-input placeholder="Please input" v-model="input" :disabled="true"></co-input>
    </div>

    <div class="el-row">
        <h2>Input Number</h2>
        <co-input-number v-model="num" @change="handleChange" :min="1" :max="10"></co-input-number>
    </div>

    <div class="el-row">
        <h2>Select Input</h2>
        <co-select v-model="value" placeholder="Select">
            <co-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </co-option>
        </co-select>
    </div>
    <div class="el-row">
        <h2>Switch</h2>
        <co-switch v-model="value1"></co-switch>
    </div>
    <div class="el-row">
        <h2>Radio</h2>
        <co-radio v-model="radio" label="1">Option A</co-radio>
    </div>
    <div class="el-row">
        <h2>Checkbox</h2>
        <co-checkbox v-model="checked">Option</co-checkbox>
    </div>
    <div class="el-row">
       <h2>Color Picker</h2>
        <co-color-picker v-model="color1"></co-color-picker>
    </div>
    <div class="el-row">
        <h2>Page Heading</h2>
        <co-page-header @back="goBack" content="detail"></co-page-header>
    </div>
    <div class="el-row">
        <h2>Breadcrumb</h2>
        <co-breadcrumb separator-class="co-icon-arrow-right">
            <co-breadcrumb-item :to="{ path: '/' }">homepage</co-breadcrumb-item>
            <co-breadcrumb-item>promotion management</co-breadcrumb-item>
            <co-breadcrumb-item>promotion list</co-breadcrumb-item>
            <co-breadcrumb-item>promotion detail</co-breadcrumb-item>
        </co-breadcrumb>
    </div>
    <div class="el-row">
        <h2>Tooltip</h2>
        <co-tooltip content="Top center" placement="top">
        <co-button>Dark</co-button>
        </co-tooltip>
        <co-tooltip content="Bottom center" placement="bottom" effect="light">
        <co-button>Light</co-button>
        </co-tooltip>
    </div>
    <div class="el-row">
        <h2>Dialog</h2>
        <co-button type="text" @click="dialogVisible = true">click to open the Dialog</co-button>

        <co-dialog
        title="Tips"
        v-model="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
            <span class="dialog-footer">
            <co-button @click="dialogVisible = false">Cancel</co-button>
            <co-button type="primary" @click="dialogVisible = false">Confirm</co-button>
            </span>
        </template>
        </co-dialog>
    </div>
    <div class="el-row">
        <!-- <h2>Tabs</h2>
        <co-tabs v-model="activeName" @tab-click="handleClick">
            <co-tab-pane label="User" name="first">User</co-tab-pane>
            <co-tab-pane label="Config" name="second">Config</co-tab-pane>
            <co-tab-pane label="Role" name="third">Role</co-tab-pane>
            <co-tab-pane label="Task" name="fourth">Task</co-tab-pane>
        </co-tabs> -->
    </div>
    <div class="el-row">
        <h2>Popover</h2>
        <el-popover
            placement="top-start"
            title="Title"
            :width="200"
            trigger="hover"
            content="this is content, this is content, this is content"
        >
            <template #reference>
            <el-button>Hover to activate</el-button>
            </template>
        </el-popover>
    </div>
    <div class="el-row">
        <h2>Table</h2>
        <co-table
        :data="tableData"
        style="width: 100%">
        <co-table-column
            prop="date"
            label="Date"
            width="180">
        </co-table-column>
        <co-table-column
            prop="name"
            label="Name"
            width="180">
        </co-table-column>
        <co-table-column
            prop="address"
            label="Address">
        </co-table-column>
        </co-table>
    </div>
    <div class="el-row"></div>
    <div class="el-row"></div>
    <div class="el-row"></div>
</div>
</template>

<script>
import test from 'test-lib-local';
import { ref } from 'vue';

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            input: test,
            num: 0,
            options: [{
            value: 'Option1',
            label: 'Option1'
            }, {
            value: 'Option2',
            label: 'Option2'
            }, {
            value: 'Option3',
            label: 'Option3'
            }, {
            value: 'Option4',
            label: 'Option4'
            }, {
            value: 'Option5',
            label: 'Option5'
            }],
            value: '',
            value1: true,
            checked: true,
            color1: '#361748',
            dialogVisible: false,
            activeName: 'first',
            visible: false,
            tableData: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }]
        }
    },
    setup() {
        const radio = ref('1')
        return {
            radio
        }
    },
    methods: {
        handleChange() {

        },
        goBack() {
            console.log('go back');
        },
        handleClose(done) {
            this.$confirm('Are you sure to close this dialog?')
            .then(_ => {
                done();
                this.dialogVisible = false
            })
            .catch(_ => {});
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style scoped lang="scss">
@import '../style/varb.scss';

.hello {
    max-width: 1280px;
    margin: 10vh auto 0 300px;
}

h1 {
    margin: 5vh 0;
    color: $color-primary;
}

.el-row {
    margin-top: 3em;
}

.co-input {
    width: 200px;
    margin-right: 15px;
}
.co-input__inner{
    padding: 50px;
}
</style>
