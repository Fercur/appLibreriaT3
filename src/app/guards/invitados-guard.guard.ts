import { CanActivateFn } from '@angular/router';

export const invitadosGuardGuard: CanActivateFn = (route, state) => {
  let acceder=false;
  let temp=localStorage.getItem("acceso")
  if(temp==="TI"){
    acceder=true
  }
  return acceder;
};
