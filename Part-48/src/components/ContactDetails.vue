<template>
    <h1>Contact Details</h1>
    <div>
        <span>Name: {{ name }}</span>
    </div>
    <div>
        <span>Email: {{ email }}</span>
    </div>
</template>

<script>
export default {
    inject: ["name", "email"]
}
</script>

<style>

</style>