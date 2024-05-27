import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceLocator } from '../../service-locator';
import { EspaciosInterface } from '../../_interfaces/espacios.interface';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.css'
})
export class SitesComponent implements OnInit{

  constructor(private http: HttpClient) {
    ServiceLocator.setHttpClient(http); 
  
  }

  espacios: EspaciosInterface[] = [];

  ngOnInit() {
    this.obtenerEspacios();
  }

  obtenerEspacios() {
    const httpClient = ServiceLocator.getHttpClient(); 
    httpClient.get('http://127.0.0.1:8000/api/espacios')
      .subscribe((response: any) => {
        this.espacios = response;
        console.log(this.espacios);
      }, error => {
        console.error('Error al obtener user:', error);
      });
  }

}
