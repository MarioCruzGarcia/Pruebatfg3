import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceLocator } from '../../service-locator';
import { EspaciosInterface } from '../../_interfaces/espacios.interface';
import { EventosInterface } from '../../_interfaces/eventos.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  constructor(private http: HttpClient) {
    ServiceLocator.setHttpClient(http); 
  
  }

  espacios: EspaciosInterface[] = [];
  eventos: EventosInterface[] = [];

  ngOnInit() {
    this.obtenerEspacios();
    this.obtenerEventos();
  }

  obtenerEspacios() {
    const httpClient = ServiceLocator.getHttpClient(); 
    httpClient.get('http://127.0.0.1:8000/api/espacios')
      .subscribe((response: any) => {
        response.sort(() => Math.random() - 0.5);
        this.espacios = response.slice(0, 6);
        console.log(this.espacios);
      }, error => {
        console.error('Error al obtener user:', error);
      });
  }

  obtenerEventos() {
    const httpClient = ServiceLocator.getHttpClient(); 
    httpClient.get('http://127.0.0.1:8000/api/eventos')
      .subscribe((response: any) => {
        response.sort(() => Math.random() - 0.5);
        this.eventos = response.slice(0, 6); 
        console.log(this.eventos);
      }, error => {
        console.error('Error al obtener user:', error);
      });
  }

}
