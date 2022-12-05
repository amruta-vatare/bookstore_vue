<template>
    <v-container class="cartItem">
        <div class="cartImg">
            <img :src="bookData.bookImg"  width="105" height="135"/>
        </div>
        <div class="cartdata">
            <h3>{{bookData.bookName}}</h3>
            <v-text style="margin-top: 5px">{{bookData.autherName}}</v-text>
            <v-text class="mdi mdi-currency-rupee" style="font-size: 18px; margin-top: 5px;">{{bookData.price}}</v-text>
            <div class="cartAction">
                <v-btn icon elevation="1">
                    <v-icon dark> mdi-minus</v-icon>
                </v-btn>
                <input type="text"/>
                <v-btn icon elevation="1">
                    <v-icon dark> mdi-plus</v-icon>
                </v-btn>
                <button style="margin-left: 40px;">Remove</button>
                <div class="cartorderbtn">
                    <v-btn>Place order</v-btn>
                </div>
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
    bookData: {}
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
          alert('Error getting book from server of id ' + this.UserCartItem.bookID + '' + error.message)
        })
    }
  },
  created () {
    this.LoadbookData()
  }
}
</script>
