<template>
    <v-container>
    <v-form ref="form">
        <v-row justify="center">
            <v-col cols="8">
                <v-app-bar class="pa-4 text-center red lighten-2 rounded-lg rounded-b-0">
      </v-app-bar>
            </v-col>
            <v-col cols="8">
                <v-row justify="center">
                    <v-col>
                        <v-text-field v-model="firstName" label="First Name"  @blur="$v.first_name.$touch()">
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="lastName" label="Last Name"  @blur="$v.last_name.$touch()">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="8">
                <v-row>
                    <v-col>
                        <v-text-field v-model="email" label="E-mail"  @blur="$v.email.$touch()"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field v-model="dob" label="Date of birth" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="dob" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(dob)"> OK </v-btn>
        </v-date-picker>
      </v-menu>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="address" label="Address"  @blur="$v.address.$touch()">
                </v-text-field>
            </v-col>
            <v-col cols="8">
                <v-row justify="center">
                    <v-col>
                        <v-text-field type="password" v-model="password" label="Password"  @blur="$v.password.$touch()">
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field type="password" v-model="confirmPass" label="Confirm Password"  @blur="$v.confirmPass.$touch()">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="8">
                <v-btn class="mr-4" @click="UserSignUp()">submit</v-btn>
                <v-btn @click="clear()">clear</v-btn>
            </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
<script>
import BookStoreUserService from '../service/BookStoreUserService'
import router from '@/router'
export default {
  name: 'SignUp',
  data: () => ({
    bookStoreUserService: new BookStoreUserService(),
    firstName: '',
    lastName: '',
    email: '',
    dob: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    address: '',
    password: '',
    confirmPass: ''
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    UserSignUp () {
      this.bookStoreUserService.add({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        dob: this.dob,
        address: this.address,
        password: this.password
      })
        .then(response => {
          this.response = JSON.stringify(response, null, 2)
          alert('User ' + this.email + ' added successfully')
          router.push({ name: 'SignIn' })
          // location.href = location.hostname
        })
        .catch(error => {
          alert('Error adding User ' + this.name + ' ' + error.message)
          this.response = 'Error: ' + error.response.status
        })
    },
    submit () {
      this.$refs.form.$touch()
    },
    clear () {
      this.$refs.form.reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>
