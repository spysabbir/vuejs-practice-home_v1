<script>
import TheCard from './TheCard.vue';

export default {
  components: {
    TheCard,
},
  data() {
    return {
      
    }
  }
}
</script>

<template>
  <div>
    <TheCard cardTitle="About Me">
      <template v-slot:default>
        <div class="contact-details">
          <h1 class="contact-title">Contact Details</h1>
          <p><strong>Name: </strong>Sabbir Ahammed</p>
        </div>
      </template>
      <template v-slot:footer>
          <p><strong>Web: </strong>www.spysabbir.com</p>
      </template>
    </TheCard>

    <TheCard cardTitle="Website">
      <template #default>
        <p>www.spysabbir.com</p>
      </template>
    </TheCard>

    <TheCard cardTitle="Default Check">

    </TheCard>
  </div>
</template>