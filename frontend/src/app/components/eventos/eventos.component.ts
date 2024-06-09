import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceLocator } from '../../service-locator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriasEventoInterface } from '../../_interfaces/categorias-evento.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any = {};
  files: File[] = [];
  mostrarForm = false;
  imageUrl: string | ArrayBuffer | null = '';
  categorias: CategoriasEventoInterface[] = [];
  isImageUploading: boolean = true;

  formularioEventoCreate = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    localizacion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    aforo: new FormControl('', [Validators.required, Validators.min(1)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    fecha_hora: new FormControl('', [Validators.required]),
    duracion: new FormControl('', [Validators.required, Validators.min(1)]),
    imagen: new FormControl('', [Validators.required]),
    categorias_id: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, private toastr: ToastrService) {
    ServiceLocator.setHttpClient(http);
  }

  ngOnInit() {
    this.obtenerEventos();
    this.obtenerCategorias_evento();
  }

  mostrarFormulario() {
    this.mostrarForm = !this.mostrarForm;
  }

  obtenerCategorias_evento() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/categorias_evento')
      .subscribe((categorias: any) => {
        this.categorias = categorias;
        console.log(this.categorias);
      }, error => {
        console.error('Error al obtener categorias_evento:', error);
      });
  }

  obtenerEventos() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/eventos')
      .subscribe((eventos: any) => {
        this.eventos = eventos;
      }, error => {
        console.error('Error al obtener eventos:', error);
      });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.files = [file];
      this.isImageUploading = true; 
        this.upload().then((imageUrl: string) => {
      this.formularioEventoCreate.patchValue({ imagen: imageUrl });
        this.isImageUploading = false; 
      }).catch((error: any) => {
        console.error('Error al subir la imagen:', error);
        this.isImageUploading = false; 
        this.toastr.error('Error al subir la imagen', 'Error');
      });
    }
  }

  upload(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (this.files.length === 0) {
        reject('No files to upload.');
        return;
      }

      const file_data = this.files[0];
      const form_data = new FormData();
      form_data.append('file', file_data);
      form_data.append('upload_preset', 'EventosYEspacios');
      form_data.append('cloud_name', 'dknfkonvj');

      this.http.post('https://api.cloudinary.com/v1_1/dknfkonvj/image/upload', form_data)
        .subscribe({
          next: (res: any) => {
            console.log('Upload response:', res);
            if (res.secure_url) {
              resolve(res.secure_url);
            } else {
              reject('URL not found');
            }
          },
          error: (err) => {
            console.error('Error al subir la imagen:', err);
            reject(err);
          }
        });
    });
  }

  insertarDatos() {
    if (this.formularioEventoCreate.valid && !this.isImageUploading) {
      const httpClient = ServiceLocator.getHttpClient();
      const nuevoEvento = {
        nombre: this.formularioEventoCreate.value.nombre,
        localizacion: this.formularioEventoCreate.value.localizacion,
        aforo: this.formularioEventoCreate.value.aforo,
        descripcion: this.formularioEventoCreate.value.descripcion,
        fecha_hora: this.formularioEventoCreate.value.fecha_hora,
        duracion: this.formularioEventoCreate.value.duracion,
        imagen: this.formularioEventoCreate.value.imagen,
        organizador_id: '1',
        categoria_id: this.formularioEventoCreate.value.categorias_id
      };

      console.log(nuevoEvento);
      httpClient.post('http://127.0.0.1:8000/api/addEvento', nuevoEvento)
        .subscribe((response: any) => {
          console.log('Evento insertado correctamente:', response);
          this.toastr.success('Evento creado exitosamente', 'Éxito');
          this.obtenerEventos();
          this.formularioEventoCreate.reset();
          this.mostrarForm = false;
        }, error => {
          console.error('Error al insertar evento:', error);
          this.toastr.error('Error al crear el evento', 'Error');
        });
    } else {
      this.formularioEventoCreate.markAllAsTouched();
    }
  }

  deleteEvento(id: any) {
    const httpClient = ServiceLocator.getHttpClient();
    console.log(id);
    httpClient.delete('http://127.0.0.1:8000/api/deleteEvento/' + id)
      .subscribe((response: any) => {
        console.log('Evento eliminado correctamente ' + id);
        this.toastr.success('Evento eliminado correctamente', 'Éxito');
        this.obtenerEventos();
      }, error => {
        console.error('Error al eliminar evento:', error);
        this.toastr.error('Error al eliminar el evento', 'Error');
      });
  }
}
