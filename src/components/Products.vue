<template>
  <div>
    <b-container fluid class="bv-example-row mt-4">
      <b-row>
        <b-col cols="3" v-for="(shoe, index) in shoes" :key="index">
          <b-card
            :title="shoe.name"
            :img-src="require(`@/assets/img/img${index + 1}.jpeg`)"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-4"
          >
            <b-card-text>
              <h5>Price : ${{ shoe.price }}.00</h5>
              <b-icon variant="warning" class="h5" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h5" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h5" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h5" icon="star-fill"></b-icon>
              <b-icon variant="warning" class="h5" icon="star-fill"></b-icon>
            </b-card-text>
            <b-button
              v-if="!shoe.cart"
              :disabled="shoe.cart"
              @click="
                (shoe.cart = true), addtocart(JSON.parse(JSON.stringify(shoe)))
              "
              block
              href="#"
              variant="dark"
            >
              Add to Cart
            </b-button>
            <b-button
              v-if="shoe.cart"
              :disabled="shoe.cart"
              block
              href="#"
              variant="warning"
            >
              Already added to shopping cart
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
      shoes: [
        {
          id: 1,
          quantity: 1,
          name: "Casual",
          price: 1,
          img: "@/assets/img/img1",
          cart: false,
        },
        {
          id: 2,
          quantity: 1,
          name: "Lofers",
          price: 1,
          img: "@/assets/img/img2",
          cart: false,
        },
        {
          id: 3,
          quantity: 1,
          name: "Sports",
          price: 1,
          img: "@/assets/img/img3",
          cart: false,
        },
        {
          id: 4,
          quantity: 1,
          name: "Lawsuit",
          price: 1,
          img: "@/assets/img/img4",
          cart: false,
        },
        {
          id: 5,
          quantity: 1,
          name: "Caterpillar",
          price: 1,
          img: "@/assets/img/img5",
          cart: false,
        },
        {
          id: 6,
          quantity: 1,
          name: "Badminton",
          price: 1,
          img: "@/assets/img/img6",
          cart: false,
        },
        {
          id: 7,
          quantity: 1,
          name: "Old Sports",
          price: 1,
          img: "@/assets/img/img7",
          cart: false,
        },
        {
          id: 8,
          quantity: 1,
          name: "New Sports",
          price: 1,
          img: "@/assets/img/img8",
          cart: false,
        },
      ],
    };
  },
  methods: {
    addtocart(product) {
      let cart = [];
      if (JSON.parse(localStorage.getItem("products"))) {
        cart = JSON.parse(localStorage.getItem("products"));
      } else {
        cart = [];
      }
      cart.push(product);
      localStorage.setItem("products", JSON.stringify(cart));
    },
  },
  created() {
    let cart = [];
    if (JSON.parse(localStorage.getItem("products"))) {
      cart = JSON.parse(localStorage.getItem("products"));
    } else {
      cart = [];
    }
    for (let index = 0; index < cart.length; index++) {
      for (let index2 = 0; index2 < this.shoes.length; index2++) {
        if (cart[index].id == this.shoes[index2].id) {
          this.shoes[index2].cart = true;
        }
      }
    }
  },
};
</script>
