<template>
    <v-container class="cartItem">
        <div class="cartImg">
            <img :src="bookData.bookImg"  width="105" height="135"/>
        </div>
        <div class="cartdata">
            <h3>{{bookData.bookName}}</h3>
            <v-text style="margin-top: 5px">{{bookData.autherName}}</v-text>
            <v-text class="mdi mdi-currency-rupee" style="font-size: 18px; margin-top: 5px;">{{bookData.price * userCartItem.quantity}}</v-text>
            <div class="cartAction">
                <v-btn icon elevation="1">
                    <v-icon dark @click="DecreaseQuantity()"> mdi-minus</v-icon>
                </v-btn>
                <b>{{this.userCartItem.quantity}}</b>
                <!-- <input type="text" placeholder="0" v-model="quantity"/> -->
                <v-btn icon elevation="1">
                    <v-icon dark @click="IncreaseQuantity()"> mdi-plus</v-icon>
                </v-btn>
                <button style="margin-left: 40px; color: brown;" @click="RemoveCartItem()">Remove</button>
            </div>
        </div>
</v-container>
</template>

<script>
import BookStoreService from '../service/BookStoreService'
export default {
  name: 'UserCartItem',
  data: () => ({
    bookStoreService: new BookStoreService(),
    bookData: {},
    localQuantity: 0
  }),
  props: ['userCartItem'],
  methods: {
    LoadbookData () {
      this.bookStoreService.getById(this.userCartItem.bookID)
        .then(
          res => {
            this.bookData = res.data
          })
        .catch(error => {
          alert('Error getting book from server of id ' + this.userCartItem.bookID + '' + error.message)
        })
    },
    NotifyQuantityChanged () {
      this.$emit('quantityChanged', {
        cartItem: this.userCartItem,
        quantity: this.localQuantity
      })
    },
    IncreaseQuantity () {
      this.localQuantity += 1
      this.NotifyQuantityChanged()
    },
    DecreaseQuantity () {
      if (this.localQuantity > 1) {
        this.localQuantity -= 1
      }
      this.NotifyQuantityChanged()
    },
    NotifyRemoveCartItem () {
      this.$emit('itemIsRemoved', {
        cartItem: this.userCartItem,
        bookID: this.userCartItem.bookID
      })
    },
    RemoveCartItem () {
      this.NotifyRemoveCartItem()
    }
  },
  created () {
    this.LoadbookData()
    this.localQuantity = this.userCartItem.quantity
  }
}
</script>
