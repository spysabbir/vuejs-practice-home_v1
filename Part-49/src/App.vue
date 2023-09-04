<template>
  <div class="container">
    <input type="text" placeholder="Enter name" v-model="name" ref="nameInput">

    <br>

    <the-comment v-model="comment" placeholder="Enter Comment ..." ref="commentInput">

    </the-comment>
  </div>
</template>

<script>
import TheComment from './components/TheComment.vue';

export default {
  components: {
    TheComment,
  },
  data() {
    return {
      name: "",
      comment: "",
    }
  },
  mounted() {
    console.log(this.$refs.nameInput);
    console.log(this.$refs.commentInput);
  },
}
</script>

<style>
</style>