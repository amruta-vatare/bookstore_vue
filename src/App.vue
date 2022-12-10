<template>
<v-app>
  <v-app-bar app color="red lighten-2" v-show="!sharedService.HideAppBar">
    <img src="./assets/bookstoreLogo.png" @click="GotoHomePage" style="cursor:pointer" class="book-store-logo"/>
    <v-toolbar-title v-text="appTitle" @click="GotoHomePage" style="cursor:pointer"></v-toolbar-title>
    <v-spacer/>
    <div class="searchBox" v-show="!sharedService.HideSearchBox">
      <v-text-field label="Search here" solo >
        <v-icon slot="append" color="red lighten-3">mdi-magnify</v-icon>
      </v-text-field>
    </div>
    <v-spacer/>
    <v-btn depressed right color="red lighten-2" @click="CartBtnClicked()" v-show="!sharedService.HideCartBtn">Cart
      <v-icon right dark>mdi-cart-outline</v-icon>
      <span style="margin-left:2px" v-show="isSignedIn">{{sharedService.cartItemCount}}</span>
    </v-btn>
    <v-menu :offset-y="true">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" fab dark x-small color="warning" v-bind="attrs" v-on="on" v-show="isSignedIn">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-btn v-show="isSignedIn" @click="SignOutBtnClicked()">Sign Out
            <v-icon right dark>mdi-arrow-right-drop-circle-outline</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn v-show="!isSignedIn" @click="SignInBtnClicked()" depressed right color="red lighten-2">Sign In
        <v-icon right dark>mdi-login-variant</v-icon>
    </v-btn>
    <v-btn v-show="!isSignedIn" @click="SignUpBtnClicked()" depressed right color="red lighten-2">Sign Up
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
import { sharedService } from './service/AppSharedService'
export default {
  name: 'App',

  data: () => ({
    appTitle: 'Bookstore',
    appFooter: 'Copyright © 2022, Amruta bookstore pvt limited. All rights reserved.',
    isSignedIn: sharedService.IsSignedIn(),
    sharedService: sharedService,
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ]
  }),
  methods:
  {
    SignInBtnClicked () {
      router.push({ name: 'SignIn' })
    },
    SignUpBtnClicked () {
      router.push({ name: 'SignUp' })
    },
    CartBtnClicked () {
      router.push({ name: 'UserCart' })
    },
    GotoHomePage () {
      router.push({ name: 'BookCardList' })
    },
    SignOutBtnClicked () {
      sharedService.SetSignedOut()
      location.href = '/'
    }
  },
  created () {
    sharedService.Initialize()
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
