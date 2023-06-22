
const { createApp } = Vue

createApp({
  data() {
    return {
      mobile: '',
      name: {
        firstName: '',
        lastName: '',
      }
    }
  },
  methods: {
   
  },
  watch: {
    mobile(newValue, oldValue) {
      console.log(newValue);
      if(isNaN(newValue)){
        alert('Enter valid mobile number');
        this.mobile = oldValue;
      }

      if(newValue.length == 11) {
        alert('Your OTP has been send');
      }
    },

    // 'name.firstName': function(newValue, oldValue){
    //   console.log(newValue, oldValue)
    // },

    name: {
      deep: true,
      handler: function(newValue, oldValue) {
        console.log(newValue)
      },
    }
  }

}).mount('#app')