<template>
    <v-container>
    <v-form ref="form"  @submit.prevent="login">
        <v-row justify="center">
          <v-col cols="8">
                <v-app-bar class="pa-4 text-center red lighten-2 rounded-lg rounded-b-0">
      </v-app-bar>
            </v-col>
            <v-col cols="8">
                <!-- <v-app-bar class="pa-4 text-center red lighten-2 rounded-lg rounded-b-0"></v-app-bar> -->
                <h3>Sign in to your bookstore account</h3>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="email" label="E-mail" @blur="$v.email.$touch()"></v-text-field>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="password" label="Password" @blur="$v.password.$touch()">
                        </v-text-field>
            </v-col>
            <v-col cols="8">
                <v-btn class="mr-4" type="submit">Login</v-btn>
                <v-btn class="mr-4" @click="goToSignUp()">Sign Up</v-btn>
            </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
<script>
import BookStoreUserService from '../service/BookStoreUserService'
import { sharedService } from '../service/AppSharedService'
import router from '@/router'
export default {
  name: 'SignIn',
  data: () => ({
    bookStoreUserService: new BookStoreUserService(),
    email: 'amruta@gmail.com',
    password: '12345'
  }),

  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    login () {
      this.bookStoreUserService.login({
        username: this.email,
        password: this.password
      })
        .then(response => {
          // alert('User ' + this.email + ' Login successfully' + response)
          sharedService.SetSignedIn(response.data)
          location.href = location.hostname
        })
        .catch(error => {
          alert('Error adding User ' + this.name + ' ' + error.message)
          this.response = 'Error: ' + error.response.status
        })
    },
    goToSignUp () {
      router.push({ name: 'SignUp' })
    }
  },
  created () {
    sharedService.HideAppBar = true
  },
  beforeDestroy () {
    sharedService.HideAppBar = false
  }
}
</script>
<style>
  .book-store-logo{
    height:40px;
    width:35px;
    margin-right: 10px;
  }
</style>
