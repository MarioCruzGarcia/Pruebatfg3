import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ServiceLocator } from '../../service-locator';
import { EspaciosInterface } from '../../_interfaces/espacios.interface';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrl: './espacios.component.css'
})
export class EspaciosComponent implements OnInit{

  constructor(private http: HttpClient) {
    ServiceLocator.setHttpClient(http); 
  }
  espacios : EspaciosInterface[] = [];

  ngOnInit(){
      this.obtenerEspacios();
  }

  obtenerEspacios() {
    const httpClient = ServiceLocator.getHttpClient(); 
    httpClient.get('http://127.0.0.1:8000/api/espacios')
      .subscribe((espacios: any) => {
        this.espacios = espacios; 
        console.log(this.espacios);
      }, error => {
        console.error('Error al obtener espacios:', error);
      });
  }
}
