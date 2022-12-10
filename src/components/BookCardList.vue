<template>
    <v-container>
      <div style="display: flex; flex-direction: row-reverse; justify-content: center; align-items: center;">
        <!-- <v-menu bottom right offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" style="margin-right: 50px;">
                  <label>Sort books</label>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="sortAscending_ByPrice()">
                  <v-list-item-title>Low price</v-list-item-title>
                </v-list-item>
                <v-list-item @click="sortDescending_ByPrice()">
                  <v-list-item-title>High price</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu> -->
            <v-select :items="this.sortCriteria" @input="sortCriteriaChanged" label="sort by relevance" style="max-width: 180px; margin-right: 170px;"></v-select>
            <span style="margin-right: 730px; font-size: medium;">Books {{itemsLength}}</span>
      </div>
    <div class="flex-container">
        <BookCard v-for="item in cardItems" :cardItem="item" :key="item"></BookCard>
    </div>
</v-container>
</template>
<script>
import BookCard from './BookCard.vue'
import BookStoreService from '../service/BookStoreService'
export default {
  name: 'BookCardList',
  data: () => ({
    bookStoreService: new BookStoreService(),
    loading: false,
    selection: 1,
    cardItems: [],
    itemsLength: 0,
    sortCriteria: ['Sort by low price', 'Sort by high price']
  }),
  methods: {
    sortCriteriaChanged (event) {
      if (event === this.sortCriteria[0]) {
        this.sortAscending_ByPrice()
      } else if (event === this.sortCriteria[1]) {
        this.sortDescending_ByPrice()
      }
    },
    getBooks () {
      this.bookStoreService.getAll()
        .then(
          res => {
            this.cardItems = res.data
            this.itemsLength = this.cardItems.length
            this.sortAscending_ByPrice()
            console.log(this.cardItems)
          })
        .catch(error => {
          alert('Error getting books from server' + error.message)
        })
    },
    sortAscending_ByPrice () {
      this.cardItems.sort((a, b) => {
        if (a.price < b.price) {
          return -1
        }
        if (a.price > b.price) {
          return 1
        }
        return 0
      })
    },
    sortDescending_ByPrice () {
      this.cardItems.sort((a, b) => {
        if (a.price < b.price) {
          return 1
        }
        if (a.price > b.price) {
          return -1
        }
        return 0
      })
    }
  },
  components: {
    BookCard
  },
  created () {
    this.getBooks()
  }
}
</script>
<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.flex-container > div{
    margin-left: 10px;
    margin-right: 10px;
}
</style>
