<template>
    <div class="rating">
        <div class="rating-star" v-for="index in 5" :key="index" @click="handelRating(index)">
            <img src="img/star.png" alt="" width="100" height="100" v-if="index <= modelValue">
            <img src="img/unstar.png" alt="" width="100" height="100" v-if="index > modelValue">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        modelValue: {
            type: Number,
            defaultValue: 0,
        }
    },
    emits: ["update:modelValue"],
    methods: {
        handelRating(index) {
        this.$emit("update:modelValue", index);
    }
    }
}
</script>
<style>
    .rating {
        width: 200px;
        display: flex;
        align-items: center;
    }
    .rating-star {
        cursor: pointer;
        margin: 2px;
    }
    .rating-star img:hover {
        transform: scale(1.1);
    }
</style>