<script>
import TheRating from './TheRating.vue';

export default {
  components: {
    TheRating,
},
  data() {
    return {
      myRating: 3,
    }
  },
  methods: {
   
  }
}
</script>

<template>
  <div>
    <p>My Rating {{ myRating }}</p>
    <the-rating v-model="myRating"></the-rating>
  </div>
</template>