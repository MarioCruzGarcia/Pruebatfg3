import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ServiceLocator } from '../../service-locator';
import { ComentariosInterface } from '../../_interfaces/comentarios.interface';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {

  constructor(private http: HttpClient) {
    ServiceLocator.setHttpClient(http); 
  }
  comentarios : ComentariosInterface[] = [];

  ngOnInit(){
      this.obtenerComentarios();
  }

  obtenerComentarios() {
    const httpClient = ServiceLocator.getHttpClient(); 
    httpClient.get('http://127.0.0.1:8000/api/comentarios')
      .subscribe((comentarios: any) => {
        this.comentarios = comentarios; 
        console.log(this.comentarios);
      }, error => {
        console.error('Error al obtener comentarios:', error);
      });
  }
}
