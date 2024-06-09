import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute
import { ServiceLocator } from '../../service-locator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyJwtPayload } from '../../_interfaces/MyJwtPayload';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {

  comentarios: any = [];
  eventoId: number = 0;
  comentariosConUsuarios: any[] = [];
  nuevoComentario = {
    evento_id: 0,
    user_id: 0,
    comentario: '',
    fecha: ''
  };
  formVisible: boolean = false;
  token: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    // Obtener el ID del evento de la URL
    this.route.params.subscribe(params => {
      this.eventoId = params['id'];
      this.cogerComentariosPorEvento(this.eventoId);
    });
  }

  toggleForm() {
    this.formVisible = !this.formVisible;
  }

  /**
   * Coge los comentarios del evento en especifico
   * De ahi coge los datos y le mete al usuario para buscar su nombre y poder sacarlo
   * @param eventoId 
   */

  cogerComentariosPorEvento(eventoId: number) {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get(`http://127.0.0.1:8000/api/comentarios/evento/` + this.eventoId)
      .subscribe((response: any) => {
        this.comentarios = response;
        console.log(this.comentarios);
        // Iterar sobre cada comentario
        this.comentarios.forEach((comentario: any) => {
          httpClient.get(`http://127.0.0.1:8000/api/getUser/` + comentario.user_id)
            .subscribe((res: any) => {
              const comentarioConUsuario = {
                comentario: comentario.comentario,
                fecha: comentario.fecha,
                usuario: res.nombre
              };
              this.comentariosConUsuarios.push(comentarioConUsuario);
            });
        });
      }, (error: any) => {
        console.error('Error al obtener datos:', error);
      });
  }

  cogerUserId(): number {
    this.token = localStorage.getItem('token');
    const decoded: MyJwtPayload = jwtDecode(this.token);
    return decoded.user_id;
  }

  /**
   * Para añadir el comentario lo quehacemos es que recogemos del inpur lo que introduce el usuario
   * Y los otros datos los recogemos desde el token y el propio evento
   */

  addComentario() {

    /**
     * Meter los datos de los comentarios, sus datos en especifico,
     * user y evento id
     * y fecha correspondiente a hoy
     */
    const httpClient = ServiceLocator.getHttpClient();
    this.nuevoComentario.user_id = this.cogerUserId();
    this.nuevoComentario.evento_id = this.eventoId;
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const seconds = ('0' + today.getSeconds()).slice(-2);
    this.nuevoComentario.fecha = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    console.log(this.nuevoComentario);
    httpClient.post(`http://127.0.0.1:8000/api/addComentario/`, this.nuevoComentario)
      .subscribe((response: any) => {
        this.comentarios.push(response);
        console.log(this.comentarios);
        this.toastr.info('Cargando', 'Exito')
      }, (error: any) => {
        console.error('Error al agregar comentario:', error);
      });
  }

}
