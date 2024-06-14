import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceLocator } from '../../service-locator';
import { EventosInterface } from '../../_interfaces/eventos.interface';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { MyJwtPayload } from '../../_interfaces/MyJwtPayload';
import { jwtDecode } from 'jwt-decode';

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
  token: any;
  evento: any;

  ngOnInit() {
    this.obtenerEventos();
  }

  irAlCalendario(evento: any) {
    this.enviarMail(evento);
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

  enviarMail(evento: any) {
    const emailData = {
      to: this.cogerEmail(),
      subject: 'Reserva Evento',
      text: evento.nombre + ',\n\n' +
        'Se ha confirmado la reserva de plaza en ' + evento.localizacion + ' para el evento programado para el día ' + evento.fecha_hora + '.\n\n' +
        '¡Esperamos verte allí!'
    };

    this.http.post('http://localhost:8000/api/sendEmail', emailData)
      .subscribe(
        (response: any) => {
          console.log('Correo enviado correctamente', response);
        },
        (error: any) => {
          console.error('Error al enviar el correo:', error);
        }
      );
  }

  cogerEmail(): String {
    this.token = localStorage.getItem('token');
    const decoded: MyJwtPayload = jwtDecode(this.token);

    return decoded.email;

  }

  existeToken() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      return true;
    }else {
      return false;
    }

  }


}
