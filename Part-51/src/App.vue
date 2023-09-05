<template>
  <div class="container">
    <h1>New User Register</h1>

    <Label>Full Name</Label><br>
    <input type="text" placeholder="Enter your full name" v-model="formData.fullName">
    <hr>
    <Label>About Me</Label><br>
    <textarea placeholder="Enter your about me" v-model="formData.aboutMe"></textarea>
    <hr>

    <div v-for="(value, key) in formData" :key="key">
    <span><strong>{{ key }}:</strong> {{ value }}</span>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      formData: {
        fullName: "",
        aboutMe: "",
      },
    }
  },
}
</script>

<style>

</style>