<script>
import ContactDetails from './components/ContactDetails.vue';

export default {
  components: {
    ContactDetails
  },
  data() {
    return {
      contacts: [
        { name: "Sabbir Ahammed", email: "spysabbir@spysabbir.com", web: "spysabbir.com" },
        { name: "Sabbir Ahammed 2", email: "spysabbir2@spysabbir.com", web: "spysabbir2.com" },
        { name: "Sabbir Ahammed 3", email: "spysabbir3@spysabbir.com", web: "spysabbir3.com" },
      ]
    }
  }
}
</script>

<template>
  <div>
    <ContactDetails name="Sabbir Ahammed" email="spysabbir@spysabbir.com" web-address="spysabbir.com" />
    <ContactDetails name="Sovon Khan" email="spysovon@spysovon.com" />

    <ContactDetails
      v-for="contact in contacts"
      :key="contact.name"
      :name="contact.name"
      :email="contact.email"
      :web-address="contact.web"
    />
  </div>
</template>