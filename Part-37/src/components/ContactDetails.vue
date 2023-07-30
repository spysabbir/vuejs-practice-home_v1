<template>
    <div class="contact-details">
      <h1 class="contact-title">Contact Details</h1>
      <p><strong>Name: </strong>{{ name }}</p>
      <p><strong>Email: </strong>{{ email }}</p>
      <p><strong>Web: </strong>{{ webAddress }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: { type: String },
      email: { type: String, required: true },
      webAddress: { type: String, required: false, default: 'www.default.com' },
    },
  }
  </script>
  
  <style scoped>
  .contact-details {
    border: 1px solid red;
    padding: 15px;
    margin-bottom: 5px;
  }
  .contact-title {
    color: blue;
    font-size: 26px;
  }
  </style>
  