<template>
    <!-- <v-card
      class="mx-auto my-4"
      max-width="250">
      <v-img
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
      <v-card-title>Manasachi Goshta</v-card-title>
      <v-card-subtitle>by Sudha Murti</v-card-subtitle>
      <v-card-text><span class="mdi mdi-currency-rupee"></span>100
      </v-card-text>
      <v-card-actions>
        <v-btn class="mr-4" color="red lighten-2"  @click="addToCard">ADD To BAG</v-btn>
        <v-btn class="mr-4" color="deep-orange lighten-3" text @click="addToCard">WISHLIST</v-btn>
      </v-card-actions>
    </v-card> -->
    <div>
    <v-card class="mx-auto my-4 justify-space-between"
      max-width="230" max-height="315px">
      <div style="display:flex; justify-content: center;">
        <img :src="cardItem.bookImg" width="105" height="135"/>
      </div>
      <v-card-title style="" v-text="cardItem.bookName"></v-card-title>
      <v-card-subtitle v-text="cardItem.autherName"></v-card-subtitle>
        <v-card-text>
            <span class="mdi mdi-currency-rupee"></span>{{cardItem.price}}
        </v-card-text>
      <v-card-actions>
        <v-btn class="mr-4" color="red lighten-2"  @click="addToCard">ADD To BAG</v-btn>
        <v-btn class="mr-4" color="deep-orange lighten-3" text @click="addToCard">WISHLIST</v-btn>
      </v-card-actions>
    </v-card>
   </div>
  </template>
<script>
export default {
  name: 'BookCard',
  data: () => ({
    loading: false,
    selection: 1
  }),
  props: ['cardItem'],
  methods: {
    addToCard () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
