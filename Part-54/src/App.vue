<template>
  <div class="container">
    <h1>New User Register</h1>

    <Label>Full Name</Label><br>
    <input type="text" placeholder="Enter your full name" v-model="formData.fullName">
    <hr>
    
    <Label>About Me</Label><br>
    <textarea placeholder="Enter your about me" v-model="formData.aboutMe"></textarea>
    <hr>

    <Label>Gender</Label><br>
    <label><input type="radio" name="gender" value="Male" v-model="formData.gender">Male</label>
    <label><input type="radio" name="gender" value="Female" v-model="formData.gender">Female</label>
    <label><input type="radio" name="gender" value="Other" v-model="formData.gender">Other</label>
    <hr>

    <label>Language</label><br>
    <select v-model="formData.language">
      <option value="">Select One</option>
      <option value="Bangla">Bangla</option>
      <option value="English">English</option>
    </select>

    <br>
    
    <label>Skills</label><br>
    <select v-model="formData.skills" multiple>
      <option value="">Select One</option>
      <option value="Html">Html</option>
      <option value="Css">Css</option>
      <option value="Javascript">Javascript</option>
      <option value="jQuery">jQuery</option>
    </select>
    <hr>

    <label>Agmentree</label><br>
    <label><input type="checkbox" v-model="formData.agreed">I agree to the Terms and Services</label>

    <br>

    <label>Social Account</label><br>
    <label><input type="checkbox" v-model="formData.socialAccounts" value="Facebook">Facebook</label>
    <label><input type="checkbox" v-model="formData.socialAccounts" value="Twitter">Twitter</label>
    <label><input type="checkbox" v-model="formData.socialAccounts" value="Instagram">Instagram</label>
    <label><input type="checkbox" v-model="formData.socialAccounts" value="Linkedin">Linkedin</label>

    <hr>
    <div v-for="(value, key) in formData" :key="key">
      <span><strong>{{ key }}: </strong> {{ value }} </span>
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
        gender: "",
        language: "",
        skills: [],
        agreed: false,
        socialAccounts: [],
      },
    }
  },
}
</script>

<style>

</style>