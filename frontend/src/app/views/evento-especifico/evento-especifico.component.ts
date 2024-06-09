import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocator } from '../../service-locator';
import { ComentsComponent } from '../coments/coments.component';

@Component({
  selector: 'app-evento-especifico',
  imports: [ComentsComponent],
  standalone: true,
  templateUrl: './evento-especifico.component.html',
  styleUrl: './evento-especifico.component.css'
})
export class EventoEspecificoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    ServiceLocator.setHttpClient(http);
  }

  eventId: string | undefined;
  eventData: any = {};

  organizador: any = {};
  categoria: any = {};

  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];
    console.log(this.eventId);
    this.cogerDatos();
  }

  /**
   * Hacemos la peticion del evento especifico y luego hacemos las peticiones necesarias para que 
   * cuando quiera sacar el id no lo saque y lo podamos cambiar por los nombres que corresponden
   */
  cogerDatos() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/getEvento/' + this.eventId)
      .subscribe((response: any) => {
        this.eventData = response;
        console.log(this.eventData);
        httpClient.get('http://127.0.0.1:8000/api/getUser/' + this.eventData.organizador_id)
          .subscribe((response: any) => {
            this.organizador = response;
            console.log(this.organizador);
          }, error => {
            console.error('Error al obtener datos:', error);
          });
        httpClient.get('http://127.0.0.1:8000/api/getCategoriasEvento/' + this.eventData.categoria_id)
          .subscribe((response: any) => {
            this.categoria = response;
            console.log(this.categoria);
          }, error => {
            console.error('Error al obtener datos:', error);
          });
      }, error => {
        console.error('Error al obtener datos:', error);
      });
  }

}
