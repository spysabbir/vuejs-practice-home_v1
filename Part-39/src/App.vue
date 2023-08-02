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
        price: "$1600",
        addToFavourite: true,
      },
      {
        name: "Apple iPhone 14 Pro Max",
        thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
        price: "$1800",
        addToFavourite: false,

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
    },
    handelToggleFavourite(product) {
      product.addToFavourite = !product.addToFavourite;
    }
  }
}
</script>

<template>
  <div>
    <!-- <product-card :product="product" @buy-now-btn-click="BuyNowBtn"> </product-card> -->
    <product-card v-for="product in products" 
      :key="product.name" 
      :product="product" 
      @buy-now-btn-click="BuyNowBtn" 
      @add-to-cart-btn-click="AddToCart"
      @toggle-favourite-btn-click="handelToggleFavourite"> 
    </product-card>
  </div>
</template>