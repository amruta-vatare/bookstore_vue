import { reactive } from 'vue'

export const sharedService = reactive({
  cartItemCount: 0,
  Key_CartItemCount: 'CartItemCount',
  Key_IsSignedIn: 'IsSignedIn',
  Key_AccessToken: 'AccessToken',
  SetSignedIn (accessToken) {
    localStorage.setItem(this.Key_IsSignedIn, 'true')
    localStorage.setItem(this.Key_AccessToken, accessToken)
  },
  SetSignedOut () {
    localStorage.setItem(this.Key_IsSignedIn, 'false')
    localStorage.setItem(this.Key_AccessToken, null)
    this.ClearCartItemCount()
  },
  IsSignedIn () {
    if (localStorage.getItem(this.Key_IsSignedIn) === 'true') {
      return true
    }
    return false
  },
  IncrementCartItemCount () {
    if (localStorage.getItem(this.Key_CartItemCount) != null) {
      const count = parseInt(localStorage.getItem(this.Key_CartItemCount))
      localStorage.setItem(this.Key_CartItemCount, count + 1)
      this.cartItemCount = count + 1
    } else {
      localStorage.setItem(this.Key_CartItemCount, '0')
      this.cartItemCount = 0
    }
  },
  GetCartItemCount () {
    if (localStorage.getItem(this.Key_CartItemCount) != null) {
      const count = parseInt(localStorage.getItem(this.Key_CartItemCount))
      return count
    } else {
      localStorage.setItem(this.Key_CartItemCount, '0')
      return 0
    }
  },
  SetCartItemChangedEvent () {
    window.addEventListener('storage', (eventobj) => {
      if (eventobj.storageArea === localStorage) {
        if (eventobj.key === this.Key_CartItemCount) {
          this.cartItemCount = this.GetCartItemCount()
        }
      }
    }, false)
  },
  Initialize () {
    this.cartItemCount = this.GetCartItemCount()
  },
  ClearCartItemCount () {
    localStorage.setItem(this.Key_CartItemCount, '0')
    this.cartItemCount = 0
  }
})
