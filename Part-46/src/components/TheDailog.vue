<template>
    <teleport to="#dailogs">
        <div class="the-dailog">
            <div class="the-dailoh__content">
                <div class="the-dailoh__header">
                    {{ heading }}
                </div>
                <div class="the-dailog__body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
    props: ["heading"]
}
</script>

<style>
.the-dailog{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    color: #313131;
}
.the-dailoh__content{
    margin: auto;
    width: 300px;
    min-height: 220px;
    background-color: aliceblue;
    border-radius: 10px;
    padding: 10px;
}
.the-dailoh__header{
    border-radius: 10px 10px 0 0;
    background-color: rgb(90, 92, 92);
    padding: 5px;
    color: aliceblue;
}
</style>