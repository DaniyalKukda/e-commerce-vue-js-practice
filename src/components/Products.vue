<template>
<div>
    <b-container fluid class="bv-example-row mt-4">
        <b-row>
            <b-col cols="3" v-for="(shoe, index) in shoes" :key="index">
                <b-card :title="shoe.name" :img-src="require(`@/assets/img/img${index + 1}.jpeg`)" img-alt="Image" img-top tag="article" class="mb-4">
                    <b-card-text>
                        <h5>Price : ${{ shoe.price }}.00</h5>
                        <b-icon variant="warning" class="h5" icon="star-fill"></b-icon>
                        <b-icon variant="warning" class="h5" icon="star-fill"></b-icon>
                        <b-icon variant="warning" class="h5" icon="star-fill"></b-icon>
                        <b-icon variant="warning" class="h5" icon="star-fill"></b-icon>
                        <b-icon variant="warning" class="h5" icon="star-fill"></b-icon>
                    </b-card-text>
                    <b-button v-if="!shoe.cart && shoe.stock > 0" :disabled="shoe.cart" @click="
                (shoe.cart = true), addtocart(JSON.parse(JSON.stringify(shoe)))
              " block href="#" variant="dark">
                        Add to Cart
                    </b-button>
                    <b-button v-if="shoe.cart" :disabled="shoe.cart" block href="#" variant="warning">
                        Already added to shopping cart
                    </b-button>
                    <b-button v-if="shoe.stock <= 0" :disabled="true" block href="#" variant="danger">
                        Out of stock
                    </b-button>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            shoes: [{
                    id: 1,
                    stock: 3,
                    name: "Casual",
                    price: 10,
                    quantity: 1,
                    img: "@/assets/img/img1",
                    cart: false,
                },
                {
                    id: 2,
                    stock: 1,
                    name: "Lofers",
                    quantity: 1,
                    price: 51,
                    img: "@/assets/img/img2",
                    cart: false,
                },
                {
                    id: 3,
                    stock: 2,
                    quantity: 1,
                    name: "Sports",
                    price: 16,
                    img: "@/assets/img/img3",
                    cart: false,
                },
                {
                    id: 4,
                    stock: 10,
                    quantity: 1,
                    name: "Lawsuit",
                    price: 18,
                    img: "@/assets/img/img4",
                    cart: false,
                },
                {
                    id: 5,
                    stock: 5,
                    quantity: 11,
                    name: "Caterpillar",
                    price: 15,
                    img: "@/assets/img/img5",
                    cart: false,
                },
                {
                    id: 6,
                    stock: 4,
                    quantity: 1,
                    name: "Badminton",
                    price: 12,
                    img: "@/assets/img/img6",
                    cart: false,
                },
                {
                    id: 7,
                    stock: 8,
                    quantity: 1,
                    name: "Old Sports",
                    price: 100,
                    img: "@/assets/img/img7",
                    cart: false,
                },
                {
                    id: 8,
                    stock: 0,
                    quantity: 1,
                    name: "New Sports",
                    price: 11,
                    img: "@/assets/img/img8",
                    cart: false,
                },
            ],
            cart: []
        };
    },
    methods: {
        addtocart(product) {
            let cartData = [];
            if (this.cart) {
                cartData = this.cart;
            } else {
                cartData = [];
            }
            cartData.push(product);
            localStorage.setItem("products", JSON.stringify(cartData));
        },
    },
    created() {
        let cartData = [];
        const products = JSON.parse(localStorage.getItem("products"))
        if (products) {
            cartData = products;
            this.cart = products
        } else {
            cartData = [];
        }
        for (let index = 0; index < cartData.length; index++) {
            let index2 = this.shoes.findIndex((val) => cartData[index].id == val.id)
            if (index2 !== -1) {
                this.shoes[index2].cart = true;
            }
        }
    }
};
</script>
