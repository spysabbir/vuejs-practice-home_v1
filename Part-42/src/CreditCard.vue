<template>
    <div class="credit-card">
        <label>Name On Card</label>
        <input type="text" :value="cardHolderName" @input="handelInput('update:cardHolderName', $event)">
        <br>
        <label>Card Number</label>
        <input type="text" :value="cardNumber" @input="handelInput('update:cardNumber', $event)">
        <br>
        <div class="row">
            <div class="col-6">
                <label>Expiry Date</label>
                <input type="date" :value="expiryDate" @input="handelInput('update:expiryDate', $event)">
            </div>
            <div class="col-6">
                <label>Cvc</label>
                <input type="text" :value="cvc" @input="handelInput('update:cvc', $event)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardHolderName: {
            type: String,
            default: ""
        },
        cardNumber: {
            type: String,
            default: ""
        },
        expiryDate: {
            type: String,
            default: ""
        },
        cvc: {
            type: String,
            default: ""
        },
    },
    methods: {
        handelInput(eventName, e){
            this.$emit(eventName, e.target.value);
        }
    }
}
</script>

<style>
.credit-card{
    width: 288px;
    border: 1px solid grey;
    padding: 22px;
    border-radius: 5px;
    background-color: azure;
    color: #313131;
    min-height: 111px;
}

input{
    padding: 7px 9px;
    margin-bottom: 11px;
    border-radius: 3px;
    width: 100%;
    border: 1px solid grey;
}
.row{
    display: flex;
}
.col-6{
    flex: 1;
    padding: 0 2px;
}
</style>