import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { MyJwtPayload } from '../_interfaces/MyJwtPayload';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  token : any;
  constructor() { }

  /**
   * En base al token que hay en el localStorage 
   * Podemos con estos metodos mirar si esta logueado, si es organizador y si es admin
   * Para poder hacer y acceder a las cosas
   * @returns 
   */

  isLogged() : boolean{
    return localStorage.getItem('token') ? true : false;
  }

  esOrganizador() : boolean{
    this.token = localStorage.getItem('token');
    const decoded: MyJwtPayload = jwtDecode(this.token);
    if (decoded.rol_id == 2) {
        return true;
    } else {
        return false;
    }
  }

  esAdmin() : boolean{
    this.token = localStorage.getItem('token');
    const decoded: MyJwtPayload = jwtDecode(this.token);
    if (decoded.rol_id == 1) {
        return true;
    } else if (decoded.rol_id != 1) {
      return false;
    } else {
      return false;
    }
  }
}
