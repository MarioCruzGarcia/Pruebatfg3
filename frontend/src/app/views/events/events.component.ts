import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceLocator } from '../../service-locator';
import { EventosInterface } from '../../_interfaces/eventos.interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit{

  constructor(private http: HttpClient) {
    ServiceLocator.setHttpClient(http); 
  }

  eventos: EventosInterface[] = [];

  ngOnInit() {
    this.obtenerEventos();
  }

  obtenerEventos() {
    const httpClient = ServiceLocator.getHttpClient(); 
    httpClient.get('http://127.0.0.1:8000/api/eventos')
      .subscribe((response: any) => {
        this.eventos = response; 
        console.log(this.eventos);
      }, error => {
        console.error('Error al obtener user:', error);
      });
  }

}
