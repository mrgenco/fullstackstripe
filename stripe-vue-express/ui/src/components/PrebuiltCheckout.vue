<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <Product
        @quantityChanged="quantityChanged"
        @handleCheckout="handleCheckout"
        :isLoading="isLoading"
        productName="Apple Iphone"
        productDesc="11 iPhone Green Mint"
        productPrice="400"
        productImage="https://images.unsplash.com/photo-1592910147752-5e0bc5f04715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
      ></Product>
    </v-row>
  </v-container>
</template>

<script>
import Product from "@/components/Product.vue";
export default {
  components: {
    Product,
  },
  data() {
    return {
      isLoading: false,
      product: {
        name: "",
        image: "",
        quantity: 0,
        amount: null,
      },
      sessionId: null,
      stripe: null,
    };
  },
  created() {
    // TODO : use setup endpoint to get the keys
    this.stripe = window.Stripe(
      "pk_test_51I7c7BDHwX5RTLC4wFAHLF4OHXBZO1NvhjADh90QmHW98WPleWg4evwc9TEMvPm3TQzj3TrVOuDdfxZxMxLcGHKX00BQxMTA93"
    );
  },
  methods: {
    quantityChanged(data) {
      this.product = data;
    },
    async handleCheckout() {
      try {
        this.isLoading = true;
        const paymentSession = await this.axios.post(
          "https://fullstackstripe-api-xbl5gobrwq-ey.a.run.app/payment-session",
          this.product
        );
        const result = await this.stripe.redirectToCheckout({
          sessionId: paymentSession.data.id,
        });
        if (result.error) {
          alert(result.error.message);
        }
        this.isLoading = false;
      } catch (error) {
        // TODO : show error to customer
        console.error("Error:", error);
        this.isLoading = false;
      }
    },
  },
};
</script>