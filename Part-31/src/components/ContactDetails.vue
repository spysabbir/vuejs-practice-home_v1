<template>
<div class="contact-details">
    <h1 class="contact-title">Contact Details</h1>
    <p><strong>Name:</strong>Sabbir Ahammed</p>
    <p><strong>Phone:</strong>01517 805999</p>
    <p><strong>Address:</strong>Jessore, BD</p>
    <p><strong>Email:</strong>spysabbir@spysabbir.com</p>
    <p><strong>Web:</strong>spysabbir.com</p>
</div>
</template>

<script>
export default {
    data() {
        return {
            message: "Test Vue",
        }
    }  
}
</script>

<style scoped>
.contact-details {
    border: 1px solid red;
    padding: 15px;
}
.contact-title{
    color: blue;
    font-size: 26px;
}
</style>