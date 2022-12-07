<template>
  <v-container>
    <v-row justify="center" style="margin-left: 150px;">
      <v-col cols="8" justify="center">
        <img src="../assets/order_ack_img2.jpg" style="height:250px; width: 450px;"/>
      </v-col>
    </v-row>
    <v-row justify="center" style="margin-left: 150px;">
      <v-col justify="center" style="margin-left: 250px;">
        <h2 style="font: normal normal bold 25px/30px Lato;">Order Placed successfully</h2>
      </v-col>
    </v-row>
    <v-row justify="center" style="margin-left: 150px;">
      <v-col justify="center" style="margin-left: 250px;">
        <span>
            hurray!!!! Your order is comfirmed<br>
            the order id is #{{orderId}} save the order id for<br>
            further communication
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { sharedService } from '../service/AppSharedService'
export default {
  name: 'OrderAck',
  data: () => ({
    orderId: 0,
    sharedService: sharedService
  }),
  created () {
    this.orderId = this.$route.params.orderId
    sharedService.Initialize()
  }
}
</script>
<style scoped>
</style>
