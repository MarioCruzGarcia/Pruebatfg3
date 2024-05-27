import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { MyJwtPayload } from '../_interfaces/MyJwtPayload';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard2 implements CanActivate {
    token: any;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.token = localStorage.getItem('token');
        const decoded: MyJwtPayload = jwtDecode(this.token);

        if (decoded.rol_id == 1) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }

}
