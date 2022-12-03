<template>
    <div>
        <div class="cart">
        <v-container>
            <v-card  class="mx-auto" style=" width: 774px; height: 250px;">
                <v-card-title>My Cart</v-card-title>
                <v-container class="cartItem">
                    <div class="cartImg">
                        <img src="/assets/bookImg7.jpg"  width="105" height="135"/>
                    </div>
                    <div class="cartdata">
                        <h3>Hear Yourself</h3>
                        <v-text style="margin-top: 5px"> by Prem Rawat</v-text>
                        <v-text class="mdi mdi-currency-rupee" style="font-size: 18px; margin-top: 5px;">700</v-text>
                        <div class="cartAction">
                            <v-btn icon elevation="1">
                                <v-icon dark> mdi-minus</v-icon>
                            </v-btn>
                           <input type="text"/>
                            <v-btn icon elevation="1">
                                <v-icon dark> mdi-plus</v-icon>
                            </v-btn>
                            <button style="margin-left: 40px;">Remove</button>
                            <div class="cartorderbtn">
                                <v-btn>Place order</v-btn>
                            </div>
                        </div>
                    </div>
                </v-container>
            </v-card>
        </v-container>
        <v-container class="customerDetail">
                <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>Customer Details</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
        <v-container class="customerDetail">
                <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>Order summery</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </div>
    <div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'UserCart'
}
</script>
<style>
.cart{
    display: flex;
    flex-direction: column;
}
.cartItem{
    display: flex;
    flex-direction: row;
}
.cartdata{
    display: flex;
    flex-direction: column;
    margin-left: 25px;
}
.cartAction>input{
    width: 25px;
}
.cartorderbtn{
    width: 20px;
    margin-left: 450px;
}
.customerDetail{
    margin-left: 540px;
    width: 800px;
    height: inherit;
}
</style>
