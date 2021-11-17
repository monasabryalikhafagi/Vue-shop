<template>
  <div class="text-center row">
    <div class="lg-3"></div>
    <div class="card lg-6">
      <div class="card-header">Payment</div>
      <div class="card-body">
        <h5 class="card-title">You can pay for us with</h5>
        <div id="paypalButton"></div>
      </div>
    </div>
    <div class="lg-3"></div>
  </div>
</template>

<script>
import { loadScript } from "@paypal/paypal-js";

export default {
  name: "PayPal",
  methods: {},
  mounted() {
    loadScript({
      "client-id":
        "AaGAveVl6ZmUz_vah47ZlsISURBAYoGo6mPlf6xuMUxvIiC7xLYb0hrgmWW2ZVRj2CdosivMfPDskN2c",
      currency: "EUR",
    })
      .then((paypal) => {
        paypal
          .Buttons()
          .render("#paypalButton")
          .catch((error) => {
            console.error("failed to render the PayPal Buttons", error);
          });
      })
      .catch((error) => {
        console.error("failed to load the PayPal JS SDK script", error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
