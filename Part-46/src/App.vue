<template>
  <div class="container">
    <TheComment v-model="myComment" btnText="Submit" placeholder="Enter Comment" @click="handelClick" @continueClick="handelContinueClick"></TheComment>

    <br><hr><br>

    <p>Comment: {{ myComment }}</p>

    <button @click="showNotification">Show Notification</button>

    <the-dailog heading="Are you sure?" v-if="showDailog">
      <p>
        Are you sure want to comment?
        <br>
        <button @click="showDailog = false">Yes</button>
        <button @click="showDailog = false">No</button>
      </p>
    </the-dailog>

    <the-notification v-for="(n, i) in notifications" :key="i" :text="n">

    </the-notification>
  </div>
</template>

<script>
import TheComment from './components/TheComment.vue';
import TheDailog from './components/TheDailog.vue';
import TheNotification from './components/TheNotification.vue';

export default {
  components: {
    TheComment,
    TheDailog,
    TheNotification,
},
  data() {
    return {
      msg: "Message",
      myComment: "",
      showDailog: false,
      notifications: [],
    }
  },
  methods: {
    handelClick(){
      // alert('Div Click');
    },
    handelContinueClick(){
      this.showDailog = true;
    },
    showNotification() {
      this.notifications.push("You have new notification.");
      setTimeout(() => {
        this.notifications.shift();
      }, 2222)
    }
  },
}
</script>

<style>
.container{
  padding: 22px;
}
</style>