import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { myvars } from './../utils/authvars';
import { stat } from 'fs';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const protectedRoutes: string [] = ['/userhome', '/adminhome'];
  // return false;
  if(myvars.isUserLoggedIn && protectedRoutes.includes(state.url)){
    return router.navigate(['/userhome']);
  }
  if(myvars.isAdminLoggedIn && protectedRoutes.includes(state.url)){
    return router.navigate(['/adminhome']);
  }
  console.log('userlogin: '+ myvars.isUserLoggedIn+"\nadmin login: "+myvars.isAdminLoggedIn)
  return false;
};
 