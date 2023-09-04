<template>
    <teleport to='#notifacations'>
        <div class="the-notification">
            {{ text }}
        </div>
    </teleport>
</template>

<script>
export default {
    props: ["text"]
}
</script>

<style>
.the-notification{
    width: 250px;
    max-height: 225px;
    border: 1px solod red;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);
    padding: 10px;
    margin: 20px;
    background-color: aliceblue;
    line-height: 1;
    transition: all 0.25s;
    color: black;
}
</style>