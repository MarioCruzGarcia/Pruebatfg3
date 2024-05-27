import { Component, OnInit, inject } from '@angular/core';

import { jwtDecode } from 'jwt-decode';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrl: '../../../bootstrap.min.css'
})
export class BarraNavegacionComponent implements OnInit{

  token : any;
  userData: any;

  usersService = inject(UsersService);

  constructor() {}

  ngOnInit(){}
  

  logout(){
    localStorage.removeItem('token');
  }
}
