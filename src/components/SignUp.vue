<template>
    <v-container>
    <v-form ref="form">
        <v-row justify="center">
            <v-col cols="8">
                <h3>Create your account</h3>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="name" label="Name" @blur="$v.name.$touch()"></v-text-field>
            </v-col>
            <v-col cols="8">
                <v-row>
                    <v-col>
                        <v-text-field v-model="email" label="E-mail"  @blur="$v.email.$touch()"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="phoneNo" label="PhoneNo"  @blur="$v.phoneNo.$touch()"></v-text-field>
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
                        <v-text-field v-model="password" label="Password"  @blur="$v.password.$touch()">
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="confirmPass" label="Confirm Password"  @blur="$v.confirmPass.$touch()">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="8">
                <v-btn class="mr-4" @click="submit">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
            </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
<script>

export default {
  name: 'SignUp',
  data: () => ({
    name: '',
    email: '',
    phoneNo: '',
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
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>
