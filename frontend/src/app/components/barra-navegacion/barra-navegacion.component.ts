import { Component, Inject, OnInit, inject } from '@angular/core';

import { jwtDecode } from 'jwt-decode';
import { UsersService } from '../../services/users.service';
import { MyJwtPayload } from '../../_interfaces/MyJwtPayload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrl: '../../../bootstrap.min.css'
})
export class BarraNavegacionComponent implements OnInit {

  token: any;
  userData: any;

  usersService = inject(UsersService);
  
  constructor(private router: Router) { }

  ngOnInit() { }


  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

}