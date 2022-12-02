<template>
<v-app>
  <v-app-bar app color="red lighten-2">
    <img src="./assets/bookstoreLogo.png"  class="book-store-logo"/>
    <v-toolbar-title v-text="appTitle"></v-toolbar-title>
    <v-spacer/>
    <div class="searchBox">
      <v-text-field label="Search here" solo >
        <v-icon slot="append" color="red lighten-3">mdi-magnify</v-icon>
      </v-text-field>
    </div>
    <v-spacer/>
    <v-btn depressed right color="red lighten-2">Cart
      <v-icon right dark>mdi-cart-outline</v-icon>
    </v-btn>
    <v-btn @click="SignInBtnClicked()" depressed right color="red lighten-2">Sign In
        <v-icon right dark>mdi-login-variant</v-icon>
    </v-btn>
    <v-btn @click="SignUpBtnClicked()" depressed right color="red lighten-2">Sign Up
      <v-icon right dark>mdi-arrow-right-drop-circle-outline</v-icon>
    </v-btn>
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app v-text="appFooter" color="black" dark>
  </v-footer>
</v-app>
</template>

<script>
import router from '@/router'
export default {
  name: 'App',

  data: () => ({
    appTitle: 'Bookstore',
    appFooter: 'Copyright © 2022, Amruta bookstore pvt limited. All rights reserved.'
  }),
  methods:
  {
    SignInBtnClicked () {
      router.push({ name: 'SignIn' })
    },
    SignUpBtnClicked () {
      router.push({ name: 'SignUp' })
    }
  }
}
</script>
<style>
  .searchBox
  {
    max-height: 46px;
    width: 50%;
  }
  .book-store-logo{
    height:40px;
    width:35px;
    margin-right: 10px;
  }
</style>
