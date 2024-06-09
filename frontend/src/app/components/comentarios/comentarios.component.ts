import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceLocator } from '../../service-locator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EstadoInterface } from '../../_interfaces/estado.interface';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarios: any = [];
  estados: EstadoInterface[] = [];
  estado : any;
  files: File[] = [];
  mostrarForm = false;
  imageUrl: string | ArrayBuffer | null = '';
  isImageUploading: boolean = true;

  formularioComentarioCreate = new FormGroup({
    comentario: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    fecha: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, private toastr: ToastrService) {
    ServiceLocator.setHttpClient(http);
  }

  ngOnInit() {
    this.obtenerComentarios();
  }

  mostrarFormulario() {
    this.mostrarForm = !this.mostrarForm;
  }

  obtenerComentarios() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/comentarios')
      .subscribe((comentarios: any) => {
        this.comentarios = comentarios;
      }, error => {
        console.error('Error al obtener comentarios:', error);
      });
  }

  deleteComentario(id: any) {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.delete('http://127.0.0.1:8000/api/deleteComentarios/' + id)
      .subscribe((response: any) => {
        this.toastr.success('Comentario eliminado correctamente', 'Éxito');
        this.obtenerComentarios();
      }, error => {
        this.toastr.error('Error al eliminar el comentario', 'Error');
      });
  }
}
