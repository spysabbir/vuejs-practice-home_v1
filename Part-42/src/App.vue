<template>
  <div class="container">
    <h3>Card Input Data</h3>
    <credit-card v-model:cardHolderName="cardHolderName"
      v-model:cardNumber="cardNumber"
      v-model:expiryDate="expiryDate"
      v-model:cvc="cvc">
    </credit-card>
    <br><hr><br>

    <p>Name: {{ cardHolderName }}</p>
    <p>Number: {{ cardNumber }}</p>
    <p>Exp Date: {{ expiryDate }}</p>
    <p>Cvc: {{ cvc }}</p>
  </div>
</template>

<script>
import CreditCard from './CreditCard.vue';

export default {
  components: {
    CreditCard,
},
  data() {
    return {
      cardHolderName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: '',
    }
  },
  methods: {
   
  }
}
</script>

<style>
.container{
  padding: 22px;
}
</style>