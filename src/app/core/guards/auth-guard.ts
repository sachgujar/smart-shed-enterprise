import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  // Always allow on the server -  the browser will re-evaluate after hydration

  if(!isPlatformBrowser(platformId))   return true;

  const auth = inject(AuthService);
  const router = inject(Router);
  if(auth.isLoggedIn())  return true;
  router.navigate(['/login']);
  return false;
};
