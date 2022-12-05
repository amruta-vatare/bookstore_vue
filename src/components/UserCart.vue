<template>
    <div>
        <div class="cart">
        <v-container>
            <v-card  class="mx-auto" style=" width: 774px; height: 250px;">
                <v-card-title>My Cart</v-card-title>
                <div class="flex-container">
                    <UserCartItem v-for="item in cartItems" :userCartItem="item" :key="item"></UserCartItem>
                </div>
            </v-card>
        </v-container>
    </div>
    <div>
    </div>
    </div>
</template>
<script>
import { sharedService } from '@/service/AppSharedService'
import BookCartService from '@/service/BookCartService'
import UserCartItem from './UserCartItem.vue'

export default {
  name: 'UserCart',
  components: {
    UserCartItem
  },
  data: () => ({
    cartService: new BookCartService(),
    cartItems: []
  }),
  methods: {
    GetCartItemsForUser () {
      this.cartService.getAllCartItems(sharedService.getSignedInUserAccessToken()).then(response => {
        this.cartItems = response.data
        sharedService.SetCartItemCount(this.cartItems.length)
      })
        .catch(error => {
          alert('Failed to get cart items ' + error.message)
          this.response = 'Error: ' + error.response.status
        })
    }
  },
  created () {
    this.GetCartItemsForUser()
  }
}
</script>
<style>
.cart{
    display: flex;
    flex-direction: column;
}
.cartItem{
    display: flex;
    flex-direction: row;
}
.cartdata{
    display: flex;
    flex-direction: column;
    margin-left: 25px;
}
.cartAction>input{
    width: 25px;
}
.cartorderbtn{
    width: 20px;
    margin-left: 450px;
}
.customerDetail{
    margin-left: 540px;
    width: 800px;
    height: inherit;
}
</style>
