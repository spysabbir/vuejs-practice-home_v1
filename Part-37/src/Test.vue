<script>
import ProductCard from './ProductCard.vue';

export default {
  components: {
    ProductCard,
},
  data() {
    return {
      // product:{
      //   name: "Apple iPhone 14 Pro Max",
      //   thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
      //   price: "$1600"
      // }
      products:[
      {
        name: "Apple iPhone 12 Pro",
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
        price: "$1600"
      },
      {
        name: "Apple iPhone 14 Pro Max",
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
        price: "$1800"
      },
      ]
    }
  },
  methods: {
    BuyNowBtn(product) {
      console.log(product)
    },
    AddToCart(product) {
      console.log(product)
    }
  }
}
</script>

<template>
  <div>
    <!-- <product-card :product="product" @buy-now-btn-click="BuyNowBtn"> </product-card> -->
    <product-card v-for="product in products" :key="product.name" :product="product" @buy-now-btn-click="BuyNowBtn" @add-to-cart-btn-click="AddToCart"> </product-card>
  </div>
</template>