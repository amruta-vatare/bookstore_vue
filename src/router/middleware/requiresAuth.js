import { sharedService } from '@/service/AppSharedService'

export default function requiresAuth ({ to, from, next }) {
  if (sharedService.IsSignedIn() === false) {
    next({ name: 'SignIn' })
  } else {
    next() // go to wherever I'm going
  }
}
