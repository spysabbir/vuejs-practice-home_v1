<template>
<div class="contact-details">
    <h1 class="contact-title">Contact Details</h1>
    <p><strong>Name: </strong>{{ name }}</p>
    <p><strong>Email: </strong>{{ email }}</p>
    <p><strong>Web: </strong>{{ webAddress }}</p>
</div>
</template>

<script>
export default {
    props: ['name', 'email', 'webAddress'],
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