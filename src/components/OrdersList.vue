<template>
<v-container>
    <OrderItem v-for="orderObj in ordersList" :key="orderObj" :orderItemObj="orderObj" @cancelOrder="NotifyCancelOrder($event)"></OrderItem>
</v-container>
</template>
<script>
import BookOrderService from '../service/BookOrderService'
import { sharedService } from '@/service/AppSharedService'
import OrderItem from './OrderItem.vue'
export default {
  name: 'OrdersList',
  data: () => ({
    bookOrderService: new BookOrderService(),
    ordersList: [],
    booksInOrders: []
  }),
  components: {
    OrderItem
  },
  methods: {
    getAllOrders () {
      this.bookOrderService.getallOrders(sharedService.getSignedInUserAccessToken())
        .then(
          res => {
            this.ordersList = res.data
            console.log(res)
            console.log('OrderList' + this.ordersList)
          })
        .catch(error => {
          alert('Error getting orders from server' + error.message)
        })
    },
    NotifyCancelOrder (eventData) {
      console.log(eventData)
      this.bookOrderService.cancelOrder(eventData.cancelOrderId).then(
        res => {
          this.getAllOrders()
        }).catch(error => {
        alert('Error in cancel orders from server' + error.message)
      })
    }
  },
  created () {
    this.getAllOrders()
  }
}
</script>
<style>
.orderContainer>v-card{
    background-color: blueviolet;
     width: 750px;
     height: inherit;
}
.bookObjInOrder{
    flex-direction: row;
    max-width: 200px;
    background-color: blue;
}
.orderDetail{
    max-width: 200px;
    background-color: chartreuse;
}
.ordersList>v-img{
    background-color:brown;
}
.cartImg{
    max-height: 80px;
    max-width: 90px;
}
</style>
