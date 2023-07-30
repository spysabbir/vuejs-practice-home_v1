<script>
export default {
  mounted() {
  },
  emits: {
    'buy-now-btn-click': function(data){
      if(!data) {
        console.log('data not found');
        return false;
      }
      return true;
    }
  },
  props: {"product": {type: Object, default: () => ({})}},
  methods: {
    handleBuyNowClick() {
      this.$emit("buy-now-btn-click", this.product)
    },
    handleaddToCartClick() {
      this.$emit("add-to-cart-btn-click", this.product)
    }
  }
}
</script>

<template>
  <div class="product-card">
    <div class="product-card__title">
      {{ product.name }}
    </div>
    <div class="product-card__body">
      <img :src="product.thumbnail" alt="">
      <span>{{ product.price }}</span>
    </div>
    <div class="product-card__footer">
      <button @click="handleBuyNowClick">Buy Now</button>
      <button @click="handleaddToCartClick">Add to Cart</button>
    </div>
  </div>
</template>

<style>
.product-card{
    width: 200px;
    border: 1px solid red;
    min-height: 200px;;
    margin: 22px auto;
}

.product-card__title{
    background-color: aqua;
    padding: 5px 11px;
    color: #fff;
}
.product-card__body{
    padding: 11px;
}
.product-card__footer{
    background-color: blueviolet;
    padding: 5px 11px;
    text-align: center;
}
</style>