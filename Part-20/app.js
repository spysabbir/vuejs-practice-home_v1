
var app1 = Vue.createApp({
  data() {
    return {
      name: '',
    }
  },
  template: `<h1>Enter your name</h1>
  <input type="text" v-model="name">
  <br>
  <p>Your name is {{ name }}</p>`
}).mount('#app1');

var app2 = Vue.createApp({
  data() {
    return {
      message: 'Hello App 2',
    }
  },
  template: '<h1>{{ message }}</h1>'
}).mount('#app2')