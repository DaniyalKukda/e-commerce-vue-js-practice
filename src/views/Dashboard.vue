<template>
<div>
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
            userName: ""
        }
    },
    methods:{
        onRowClick(name){
            this.userName = name
        }
    }
}
</script>
