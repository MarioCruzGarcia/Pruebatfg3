import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { MyJwtPayload } from '../_interfaces/MyJwtPayload';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    token: any;

    constructor(private router: Router) { }

    /**
     * En caso de existir token te deja entrar
     * @param route 
     * @param state 
     * @returns 
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.token = localStorage.getItem('token');
        if (this.token) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }


}
