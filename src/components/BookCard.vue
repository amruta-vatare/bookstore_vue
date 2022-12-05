<template>
    <div>
    <v-card class="mx-auto my-4 justify-space-between"
      max-width="230" max-height="315px">
      <!-- <v-hover v-slot="{ hover }"> -->
      <div style="display:flex; justify-content: center;">
        <img :src="cardItem.bookImg" width="105" height="135"/>
      </div>
    <!-- </v-hover> -->
      <v-card-title style="" v-text="cardItem.bookName"></v-card-title>
      <v-card-subtitle v-text="cardItem.autherName"></v-card-subtitle>
        <v-card-text>
            <span class="mdi mdi-currency-rupee"></span>{{cardItem.price}}
        </v-card-text>
      <v-card-actions>
        <v-btn class="mr-4" color="red lighten-2"  @click="AddItemToBag">ADD To BAG</v-btn>
        <v-btn class="mr-4" color="deep-orange lighten-3" text @click="AddItemToBag">WISHLIST</v-btn>
      </v-card-actions>
    </v-card>
   </div>
  </template>
<script>
import { sharedService } from '@/service/AppSharedService'
import BookCartService from '@/service/BookCartService'
export default {
  name: 'BookCard',
  data: () => ({
    loading: false,
    selection: 1,
    cartItemCount: 0,
    cartService: new BookCartService()
  }),
  props: ['cardItem'],
  methods: {
    AddItemToBag () {
      // call backend to add the given book to cart of the current user
      this.cartService.addToCart(sharedService.getSignedInUserAccessToken(), {
        bookID: this.cardItem.bookId,
        quantity: 1
      }).then(response => {
        alert('successfully added item to cart' + response)

        // logic to getcart item count
        this.RefreshCartItemCount()
      })
        .catch(error => {
          alert('Error adding Cart ' + error.message)
          this.response = 'Error: ' + error.response.status
        })
    },
    RefreshCartItemCount () {
      this.cartService.getAllCartItems(sharedService.getSignedInUserAccessToken()).then(response => {
        const cartItems = response.data
        const count = cartItems.length
        sharedService.SetCartItemCount(count)
      })
        .catch(error => {
          alert('Failed to get cart item count ' + error.message)
          this.response = 'Error: ' + error.response.status
        })
    }
  }
}
</script>
<style>
  .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
