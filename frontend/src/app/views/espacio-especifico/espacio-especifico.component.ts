import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocator } from '../../service-locator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-espacio-especifico',
  templateUrl: './espacio-especifico.component.html',
  styleUrl: './espacio-especifico.component.css'
})
export class EspacioEspecificoComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    ServiceLocator.setHttpClient(http);
  }

  espacioId: string | undefined;
  espacioData: any = {};

  estado: any = {};

  ngOnInit(): void {
    this.espacioId = this.route.snapshot.params['id'];
    console.log(this.espacioId);
    this.cogerDatos();
  }


  /**
   * Recogemos el espacio en especifico y de ello hacemos otra peticion para poder coger el estado 
   * en cuestion
   */
  cogerDatos() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/getEspacio/' + this.espacioId)
      .subscribe((response: any) => {
        this.espacioData = response;
        console.log(this.espacioData);
        httpClient.get('http://127.0.0.1:8000/api/getEstado/' + this.espacioData.estado_id)
          .subscribe((response: any) => {
            this.estado = response;
            console.log(this.estado);
          }, error => {
            console.error('Error al obtener datos:', error);
          });
      }, error => {
        console.error('Error al obtener datos:', error);
      });
  }
}
