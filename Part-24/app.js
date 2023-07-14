
var app = Vue.createApp({
  data() {
    return {

    }
  },
});

app.component('contact-details', {
  data() {
    return {
      name: 'Sabbir Ahammed'
    }
  },

  template: `
    <h1>Contact Details</h1>
    <p><strong>Name:</strong>Sabbir Ahammed</p>
    <p><strong>Phone:</strong>01517 805999</p>
    <p><strong>Address:</strong>Jessore, BD</p>
    <p><strong>Email:</strong>spysabbir@spysabbir.com</p>
    <p><strong>Web:</strong>spysabbir.com</p>
  `
});
app.mount('#app');
