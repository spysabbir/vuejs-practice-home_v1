<template>
  <div class="container">
   <div class="tab">
    <div class="tab__menu">
      <div class="tab_menu-item" 
          v-for="tab in tabs" :key="tab" 
          :class="{'tab_menu-item-active' : activeTab == tab}" 
          @click="activeTab = tab">
        {{ tab }}
      </div>
    </div>
    <div class="tab__content">
      <!-- <Login v-if="activeTab === 'Login'"></Login>
      <Register v-if="activeTab === 'Register'"></Register> -->

      <KeepAlive>
        <component :is="activeTab">

        </component>
      </KeepAlive>
    </div>
   </div>
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Register from './components/Register.vue';

export default {
  components: {
    Login,
    Register,
},
  data() {
    return {
      tabs: ["Login", "Register"],
      activeTab: "Login",
    }
  },
  methods: {
  
  },
}
</script>

<style>
.tab__menu{
  display: flex;

}
.tab_menu-item{
  padding: 5px;
  background-color: beige;
  margin: 2px;
  cursor: pointer;
}
.tab_menu-item-active{
  background-color: blueviolet;
  color: aliceblue;

}

.tab__content{
  height: 250px;
  width: 250px;
  background-color: chocolate;
}
</style>