<template>
    <div>
        <div class="cart">
        <v-container>
            <v-card  class="mx-auto" style=" width: 750px; height: inherit;">
                <v-card-title>My Cart</v-card-title>
                <v-form ref="form">
                    <v-col cols="8">
                  <v-row justify="center">
                    <v-col>
                        <v-text-field label="Name" outlined ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="Phone Number" outlined ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col>
                        <v-textarea label="Address" outlined ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col>
                        <v-text-field label="State" outlined ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="City" outlined ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col>
                        <v-text-field label="ZipCode" outlined ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="Landmark" outlined ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                        <v-radio-group row>
                        <v-radio label="Home" value="home"></v-radio>
                        <v-radio label="Work" value="work"></v-radio>
                        <v-radio label="Other" value="other"></v-radio>
                    </v-radio-group>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col style="display: flex; flex-direction: row-reverse;">
                    <v-btn type="submit">Continue</v-btn>
                </v-col>
                </v-form>
            </v-card>
        </v-container>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CustomerDetails',
  data: () => ({
  })
}
</script>
