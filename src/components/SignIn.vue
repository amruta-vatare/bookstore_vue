<template>
    <v-container>
    <v-form ref="form">
        <v-row justify="center">
            <v-col cols="8">
                <h3>Login</h3>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="email" label="E-mail"  @blur="$v.email.$touch()"></v-text-field>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="password" label="Password"  @blur="$v.password.$touch()">
                        </v-text-field>
            </v-col>
            <v-col cols="8">
                <v-btn class="mr-4" @click="login">Login</v-btn>
            </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
<script>

export default {
  name: 'SignIn',
  data: () => ({
    email: '',
    password: ''
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
      this.$v.$touch()
    }
  }
}
</script>
