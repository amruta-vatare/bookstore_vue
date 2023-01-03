<template>
    <v-container>
        <v-card style=" margin-left: 220px; max-width: 700px; max-height: 400px;">
            <v-card-subtitle><v-chip :color="orderStatusColor">{{ orderStatusText }}</v-chip></v-card-subtitle>
            <v-card-subtitle>Id #{{this.orderItemObj.orderId}}, {{new Date(this.orderItemObj.orderDate).toLocaleString()}}</v-card-subtitle>
            <v-list three-line>
                <template v-for="(bookItem) in orderItemObj.booksInOrder">
                    <v-list-item :key="bookItem">
                        <v-list-item-avatar>
                            <v-img :src="bookItem.bookImg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-html="bookItem.bookName"></v-list-item-title>
                            <v-list-item-subtitle v-html="bookItem.autherName"></v-list-item-subtitle>
                            <v-list-item-subtitle>Quantity {{ bookItem.quantity }}, Price {{ bookItem.price }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
            <v-card-subtitle>Order Total = {{ orderItemObj.totalPrice }}</v-card-subtitle>
            <div style="display: flex; flex-direction: row-reverse; margin-right: 40px;" >
                <v-btn depressed color="primary" @click="OpenSnackbar()" id="cancelOrderbtn" :disabled='disabledBtn' v-if="isOldOrder==false">Cancel</v-btn>
            </div>
            <v-snackbar v-model="snackbar" elevation="24" centered outlined color="red accent-2">{{ text }}
            <template>
                <h4>Do you want to cancel order with order id #{{ this.orderItemObj.orderId }} ?</h4>
                <v-btn  text v-bind="attrs" @click="cancelOrder()" color="red accent-2">Yes</v-btn>
                <v-btn  text v-bind="attrs" @click="snackbar = false" color="red accent-2">No</v-btn>
            </template>
            </v-snackbar>
        </v-card>
    </v-container>
</template>
<script>
export default {
  name: 'OrderItem',
  props: ['orderItemObj'],
  data () {
    return {
      orderStatusColor: 'green',
      orderStatusText: 'In Progress',
      snackbar: false,
      disabledBtn: false,
      isOldOrder: false
    }
  },
  methods: {
    cancelOrder () {
      this.snackbar = false
      this.$emit('cancelOrder', {
        cancelOrderId: this.orderItemObj.orderId
      })
    },
    OpenSnackbar () {
      this.snackbar = true
    },
    checkOrdersDate () {
      console.log(this.orderItemObj.orderId)
      const date = this.orderItemObj.orderDate
      const date1 = new Date(date)
      const date2 = new Date()
      const differenceInTime = date2.getTime() - date1.getTime()
      const differenceInDays = differenceInTime / (1000 * 3600 * 24)
      console.log(differenceInDays)
      if (differenceInDays > 3) {
        this.isOldOrder = true
        console.log('Hide cancel btn')
      } else if (differenceInDays < 7) {
        this.orderStatusColor = 'green'
        this.orderStatusText = 'In Progress'
      }
      console.log(date)
    }
  },
  created () {
    if (this.orderItemObj.cancel === true) {
      this.orderStatusColor = 'red'
      this.orderStatusText = 'Cancelled'
      this.disabledBtn = true
    } else {
      this.orderStatusText = 'Completed'
      this.orderStatusColor = 'primary'
      this.disabledBtn = false
    }
    this.checkOrdersDate()
  }
}
</script>
<style>
    .orderContainer{
        display: flex;
        flex-direction: row;
        max-height: 125px;
        max-width: 150px;
    }
    .orderImg{
        max-height: 60px;
        max-width: 90px;
    }
    .orderDetails{
        display: flex;
        flex-direction: column;
        max-width: inherit;
        max-height: inherit;
    }
</style>
