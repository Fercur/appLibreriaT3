import { CanActivateFn } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  let acceder=false;
  let temp=localStorage.getItem("acceso")
  if(temp==="TA"){
    acceder=true
  }
  return acceder;
};
