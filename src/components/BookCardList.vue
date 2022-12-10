<template>
    <v-container>
      <div style="display: flex; flex-direction: row-reverse; justify-content: center; align-items: center;">
            <!-- <v-select v-model="selectedSortCriteria" :items="this.sortCriteria" @input="sortCriteriaChanged" label="sort by relevance" style="max-width: 180px; margin-right: 170px;"></v-select>
            <span style="margin-right: 730px; font-size: medium;">Books {{itemsLength}}</span>
            <div style="float:left">Bookssd</div> -->
            <div style="width: 100%;height:50px;" >
              <v-select v-model="selectedSortCriteria" :items="this.sortCriteria" @input="sortCriteriaChanged" label="sort by relevance" style="max-width: 180px; margin-right: 170px;float: right;"></v-select>
            </div>
            <div style="margin-left: 10px;width: 100%;height:50px">
              <strong>Books</strong> <small>{{itemsLength}}</small>
            </div>
      </div>
      <div class="flex-container">
          <BookCard v-for="item in cardItems" :cardItem="item" :key="item"></BookCard>
      </div>
</v-container>
</template>
<script>
import BookCard from './BookCard.vue'
import BookStoreService from '../service/BookStoreService'
import { sharedService } from '@/service/AppSharedService'
export default {
  name: 'BookCardList',
  data: () => ({
    bookStoreService: new BookStoreService(),
    loading: false,
    selection: 1,
    cardItems: [],
    itemsLength: 0,
    sortCriteria: ['Sort by low price', 'Sort by high price'],
    sharedService: sharedService,
    selectedSortCriteria: 'Sort by low price'
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
            this.sortCriteriaChanged(this.selectedSortCriteria)
            console.log(this.cardItems)
          })
        .catch(error => {
          alert('Error getting books from server' + error.message)
        })
    },
    getBooksByName (name) {
      this.bookStoreService.getByName(name)
        .then(
          res => {
            this.cardItems = res.data
            this.itemsLength = this.cardItems.length
            this.sortAscending_ByPrice()
            this.sortCriteriaChanged(this.selectedSortCriteria)
            console.log(this.cardItems)
          })
        .catch(error => {
          alert('Error getting books from server from name ' + error.message)
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
  watch: {
    'sharedService.searchBoxText' (newValue, oldValue) {
      // console.log(`The search text has changed! It was ${oldValue}, it's now ${newValue}`)
      if (newValue.length > 0) {
        this.getBooksByName(newValue)
      } else {
        this.getBooks()
      }
    }
  },
  created () {
    this.getBooks()
    sharedService.HideSearchBox = false
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
