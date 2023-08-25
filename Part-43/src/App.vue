<template>
  <div class="container">
    <!-- <TheComment v-model="myComment" btnText="Submit" class="bar" placeholder="Enter Comment"></TheComment> -->
    <TheComment v-model="myComment" btnText="Submit" placeholder="Enter Comment" @click="handelClick"></TheComment>

    <br><hr><br>

    <p>Comment: {{ myComment }}</p>
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
      myComment: "",
    }
  },
  methods: {
    handelClick(){
      alert('Div Click')
    }
  }
}
</script>

<style>
.container{
  padding: 22px;
}
</style>