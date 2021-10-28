<template>
<div>
    <NavbarAdmin />
    <b-container class="mt-4" fluid>
        <b-table :busy="busy" bordered :fields="fields" hover :items="items">
            <template v-slot:cell(products)="data">
                <h5>Id: {{data.item.id}}</h5>
                <ul v-for="(product,index) in data.item.products" :key="index">
                    <li>Name : {{product.name}}</li>
                    <li>Price : {{product.price}}</li>
                    <li>Quantity : {{product.quantity}}</li>
                    <hr />
                </ul>
            </template>
            <template v-slot:cell(total)="data">
                <h2>$ {{data.item.total}}.00</h2>
            </template>
            <template v-slot:cell(delete)="data">
                <b-button @click="deletesale(data.item.id)" block class="mt-4" style="top:50%!important;" size="lg" variant="danger">Delete sale</b-button>
            </template>
            <template v-slot:table-busy>
                <div class="text-center text-success my-2">
                    <b-spinner variant="dark" class="align-middle"></b-spinner>
                    <strong style="color:black;">loading...</strong>
                </div>
            </template>
        </b-table>
    </b-container>
</div>
</template>

<script>
import {
    db
} from "@/firebase";
import NavbarAdmin from "@/components/NavbarAdmin.vue";
export default {
    data() {
        return {
            data: "",
            busy: true,
            items: [],
            fields: [{
                    key: "products",
                    label: "Sales"
                },
                {
                    key: "total",
                    label: "Total"
                },
                {
                    key: "delete",
                    label: "Delete"
                },
            ]
        }
    },
    components: {
        NavbarAdmin
    },
    created() {
        db.collection("buy-products").onSnapshot(querySnapshot => {
            this.items = [],
                this.busy = true,
                querySnapshot.forEach(doc => {
                    const data = doc.data()
                    data.id = doc.id;
                    this.items.push(data)
                });
            if (this.items.length) {
                this.busy = false
            } else {
                this.busy = false
            }
        })
    },
    methods: {
        deletesale(id) {
            db.collection("buy-products").doc(id).delete().then(() => {})
        }
    }
}
</script>
