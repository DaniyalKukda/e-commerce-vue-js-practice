<template>
<b-table :tbody-tr-class="rowClass" @row-clicked="rowClicked" hover :fields="fields" :items="users" :busy="isBusy" class="mt-3" responsive="lg">
    <template #table-busy>
        <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
        </div>
    </template>
    <!-- A virtual column -->
    <template #cell(index)="data">
        {{ data.index + 1 }}
    </template>
    <template #cell(name)="data">
        {{ data.value | toUpperCase}}
    </template>
</b-table>
</template>

<script>
import {
    db,
} from "@/firebase";

export default {
    data() {
        return {
            fields: [
                'index',
                {
                    key: 'name',
                    label: 'Full Name'
                },
                {
                    key: 'regNo',
                    label: 'Registration Number'
                },
                'email',
            ],
            users: [],
            isBusy: true
        }
    },
    created() {
        this.$root.$on("updateUser", (name) => {
            this.users.push({
                id: Math.floor(Math.random() * 1000),
                email: "custom@email.com",
                name,
                index: this.users.length,
                regNo: Math.floor(Math.random() * 1000)
            });
        });
        db.collection("users").onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = doc.data()
                this.users.push(data)
            });
            this.isBusy = false
        })
    },
    methods: {
        rowClicked(data) {
            this.$emit("onRowClick", data.name)
        },
        rowClass(item, type) {
            if (!item || type !== 'row') return
            return (this.users.indexOf(item) & 1) ? "table-danger" : "table-success"
        }
    }
}
</script>
