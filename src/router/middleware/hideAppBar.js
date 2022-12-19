import { sharedService } from '@/service/AppSharedService'

export default function hideAppBar ({ to, from, next }) {
  if (to.name === 'SignIn' || to.name === 'SignUp') {
    sharedService.HideAppBar = true
  } else {
    sharedService.HideAppBar = false
  }
  return next()
}
