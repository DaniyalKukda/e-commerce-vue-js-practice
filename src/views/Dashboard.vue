<template>
<div>
    <span>Enter User Name :   </span>
    <input type="text" v-model="name" @keypress.enter="updateUser" />
    <Table @onRowClick="onRowClick"></Table>
    <h1 v-show="userName">{{userName | toUpperCase}} is Clicked</h1>
</div>
</template>

<script>
import Table from "../components/Table.vue"

export default {
    components: {
        Table
    },
    data() {
        return {
            userName: "",
            name: "",
        }
    },
    methods: {
        onRowClick(name) {
            this.userName = name
        },
        updateUser() {
            this.$root.$emit("updateUser", this.name);
            this.name = ""
        }
    },
}
</script>
