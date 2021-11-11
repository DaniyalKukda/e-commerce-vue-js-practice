<template>
<b-table @row-clicked="rowClicked" hover :fields="fields" :items="users" :busy="isBusy" class="mt-3" responsive="lg">
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
            isBusy:true
        }
    },
    created() {
        db.collection("users").onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = doc.data()
                this.users.push(data)
            });
            this.isBusy = false
        })
    },
    methods:{
        rowClicked(data){
            console.log(data.name)
        }
    }
}
</script>
