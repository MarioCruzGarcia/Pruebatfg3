import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceLocator } from '../../service-locator';
import { EventosInterface } from '../../_interfaces/eventos.interface';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {

  constructor(private http: HttpClient, private eventService: EventService, private router: Router) {
    ServiceLocator.setHttpClient(http);
  }

  eventos: EventosInterface[] = [];

  ngOnInit() {
    this.obtenerEventos();
  }

  irAlCalendario(evento: any) {
    this.eventService.saveEvent(evento);
    this.router.navigate(['/calendario']);
  }

  irAlEvento(id: any) {
    this.router.navigate(['/evento/' + id]);
  }
  /**
   * Hacemos la peticion a la api
   */
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
