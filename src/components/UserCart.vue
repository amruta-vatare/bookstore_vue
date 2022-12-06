<template>
    <div>
        <div class="cart">
            <v-container>

                <v-card  class="mx-auto" style=" width: 750px; height: inherit;">
                        <div>
                            <v-icon color="red lighten-2" large>mdi-cart-variant</v-icon>
                            <span style="margin-left:2px">{{sharedService.cartItemCount}}</span>
                        </div>
                        <UserCartItem @quantityChanged="CartItemQuantityChanged($event)" @itemIsRemoved="CartItemIsRemoved($event)" v-for="item in cartItems" :userCartItem="item" :key="item"></UserCartItem>
                        <v-btn class="btn-place-order" color="red lighten-2" @click="PlaceOrder()">Place order</v-btn>
                        <v-expansion-panels :value='openIndex'>
                            <v-expansion-panel :disabled='customerDetailPanelDisable'>
                                <v-expansion-panel-header>Customer Details</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-form ref="form">
                                        <v-col cols="8">
                                            <v-row justify="center">
                                        <v-col>
                                            <v-text-field label="Name" outlined ></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <v-text-field label="Phone Number" outlined ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center">
                                        <v-col>
                                            <v-textarea label="Address" outlined ></v-textarea>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center">
                                        <v-col>
                                            <v-text-field label="State" outlined ></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <v-text-field label="City" outlined ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center">
                                        <v-col>
                                            <v-text-field label="ZipCode" outlined ></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <v-text-field label="Landmark" outlined ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-radio-group row>
                                            <v-radio label="Home" value="home"></v-radio>
                                            <v-radio label="Work" value="work"></v-radio>
                                            <v-radio label="Other" value="other"></v-radio>
                                        </v-radio-group>
                                        </v-col>
                                    </v-row>
                                    </v-col>
                                    <v-col style="display: flex; flex-direction: row-reverse;">
                                        <v-btn type="submit">Continue</v-btn>
                                    </v-col>
                                    </v-form>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel :disabled='orderSummaryPanelDisable'>
                                <v-expansion-panel-header>Order summary</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Order Details
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
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
    cartItems: [],
    sharedService: sharedService,
    openIndex: -1,
    customerDetailPanelDisable: true,
    orderSummaryPanelDisable: true,
    customerDetails: {

    }
  }),
  methods: {
    PlaceOrder () {
      this.openIndex = 0
      this.customerDetailPanelDisable = false
    },
    GetCartItemsForUser () {
      this.cartService.getAllCartItems(sharedService.getSignedInUserAccessToken()).then(response => {
        this.cartItems = response.data
        sharedService.SetCartItemCount(this.cartItems.length)
      })
        .catch(error => {
          alert('Failed to get cart items ' + error.message)
          this.response = 'Error: ' + error.response.status
        })
    },
    CartItemQuantityChanged (eventData) {
      eventData.cartItem.quantity = eventData.quantity
    },
    CartItemIsRemoved (eventData) {
      // eventData.cartItem.bookID = eventData.bookID
      console.log(eventData.bookID)
      this.cartService.removeBookFromCart(sharedService.getSignedInUserAccessToken(), {
        bookID: eventData.bookID,
        quantity: 1
      }).then(response => {
        // refresh cart items
        this.GetCartItemsForUser()
      })
        .catch(error => {
          alert('Failed to delete cart items,  ' + error.message)
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
.cartAction{
    margin-top: 10px;
}
.cartAction>input{
    text-align: center;
    margin-left: 2px;
    width: 25px;
}
.cart-order-btn{
    display: flex;
    flex-direction: row;
    width: 20px;
    margin-left: 550px;
    margin-bottom: 15px;
}
.customerDetail{
    margin-left: 540px;
    width: 800px;
    height: inherit;
}
.btn-place-order{
    margin-left: 550px;
    background-color: red;
}
</style>
