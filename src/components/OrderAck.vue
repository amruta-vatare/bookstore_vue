<template>
  <v-container>
    <v-row justify="center" style="margin-left: 150px;">
      <v-col cols="8" justify="center">
        <img src="../assets/order_ack_img2.jpg"/>
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
    sharedService.HideSearchBox = true
    sharedService.HideCartBtn = true
    sharedService.Initialize()
  },
  beforeDestroy () {
    sharedService.HideCartBtn = false
  }
}
</script>
<style scoped>
img{
  height:250px;
  width: 450px;
  background: white;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  animation-timing-function: ease;
  animation-delay: 2s;
  animation-iteration-count: 2;
  animation-direction: alternate-reverse;
}
@keyframes example {
  0%   {left:0px; top:0px;}
  25%  {left:200px; top:0px;}
  50%  {left:200px; top:200px;}
  75%  {left:0px; top:200px;}
  100% {left:0px; top:0px;}
}
</style>
