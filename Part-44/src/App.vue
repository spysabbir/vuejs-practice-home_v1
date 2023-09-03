<template>
  <div class="container">
    <button @click="hide=true">Hide</button>
    <!-- <TheComment v-model="myComment" btnText="Submit" class="bar" placeholder="Enter Comment"></TheComment> -->
    <TheComment v-model="myComment" btnText="Submit" placeholder="Enter Comment" @click="handelClick" v-if="!hide"></TheComment>

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
      msg: "Message",
      myComment: "",
      hide: false
    }
  },
  methods: {
    handelClick(){
      // alert('Div Click')
    }
  },
  
  beforeCreate() {
    console.log('beforeCreate');
    // console.log(this.msg);
  },
  created() {
    console.log('created');
    // console.log(this.msg);
  },
  beforeMount() {
    console.log('beforeMount');
    // console.log(this.msg);
  },
  mounted() {
    console.log('mounted');
    // console.log(this.msg);
  },
  beforeUpdate() {
    console.log('beforeUpdate');
    // console.log(this.msg);
  },
  updated() {
    console.log('updated');
    // console.log(this.msg);
  },
  beforeUnmount() {
    console.log('beforeUnmount');
    // console.log(this.msg);
  },
  unmounted() {
    console.log('unmounted');
    // console.log(this.msg);
  }
}
</script>

<style>
.container{
  padding: 22px;
}
</style>