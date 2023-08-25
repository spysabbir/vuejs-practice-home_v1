<template>
    <div class="the-comment">
        <!-- <textarea :value="modelValue" @input="handelInput"></textarea> -->
        <textarea :value="modelValue" @input="handelInput" v-bind="$attrs"></textarea>
        <button>{{ btnText }}</button>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: ""
        },
        btnText: {
            type: String,
            default: 'Ok'   
        }
    },
    // inheritAttrs: false,
    methods: {
        handelInput(e){
            this.$emit('update:modelValue', e.target.value);
        }
    }
}
</script>

<style>
.the-comment{
    width: 288px;
    border: 1px solid grey;
    padding: 22px;
    border-radius: 5px;
    background-color: azure;
    color: #313131;
    min-height: 111px;
}
</style>