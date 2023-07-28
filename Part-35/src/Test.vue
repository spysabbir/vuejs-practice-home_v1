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

    <TheCard cardTitle="Apple iPhone 14 Pro Max">
      <template #default>
        <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg" alt="">
      </template>
      <template #footer>
          <a href="http://www.spysabbir.com">Buy Now</a>
      </template>
    </TheCard>

    <TheCard cardTitle="Default Check">

    </TheCard>
  </div>
</template>