import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceLocator } from '../../service-locator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EstadoInterface } from '../../_interfaces/estado.interface';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css']
})
export class EspaciosComponent implements OnInit {

  espacios: any = [];
  estados: EstadoInterface[] = [];
  estado : any;
  files: File[] = [];
  mostrarForm = false;
  imageUrl: string | ArrayBuffer | null = '';
  isImageUploading: boolean = true;

  formularioEspacioCreate = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    localizacion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    aforo: new FormControl('', [Validators.required, Validators.min(1)]),
    contacto: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    estado_id: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, private toastr: ToastrService) {
    ServiceLocator.setHttpClient(http);
  }

  ngOnInit() {
    this.obtenerEspacios();
    this.obtenerEstados();
  }

  mostrarFormulario() {
    this.mostrarForm = !this.mostrarForm;
  }

  obtenerEspacios() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/espacios')
      .subscribe((espacios: any) => {
        this.espacios = espacios.map((espacio: any) => {
          switch (espacio.estado_id) {
            case 1:
              espacio.estado_id = 'Disponible';
              break;
            case 2:
              espacio.estado_id = 'No disponible';
              break;
            case 3:
              espacio.estado_id = 'En mantenimiento';
              break;
            case 4:
              espacio.estado_id = 'Reservado';
              break;
            default:
              espacio.estado_id = 'Desconocido';
          }
          return espacio;
        });
      }, error => {
        console.error('Error al obtener espacios:', error);
      });
  }
  

  obtenerEstados() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/estado')
      .subscribe((estados: any) => {
        this.estados = estados;
      }, error => {
        console.error('Error al obtener estados:', error);
      });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.files = [file];
      this.isImageUploading = true;
      this.upload().then((imageUrl: string) => {
        this.formularioEspacioCreate.patchValue({ imagen: imageUrl });
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
            if (res.secure_url) {
              resolve(res.secure_url);
            } else {
              reject('URL not found');
            }
          },
          error: (err) => {
            reject(err);
          }
        });
    });
  }

  insertarDatos() {
    if (this.formularioEspacioCreate.valid && !this.isImageUploading) {
      const httpClient = ServiceLocator.getHttpClient();
      const nuevoEspacio = {
        nombre: this.formularioEspacioCreate.value.nombre,
        localizacion: this.formularioEspacioCreate.value.localizacion,
        aforo: this.formularioEspacioCreate.value.aforo,
        contacto: this.formularioEspacioCreate.value.contacto,
        estado_id: this.formularioEspacioCreate.value.estado_id,
        fecha: this.formularioEspacioCreate.value.fecha,
        imagen: this.formularioEspacioCreate.value.imagen
      };

      httpClient.post('http://127.0.0.1:8000/api/addEspacio', nuevoEspacio)
        .subscribe((response: any) => {
          this.toastr.success('Espacio creado exitosamente', 'Éxito');
          this.obtenerEspacios();
          this.formularioEspacioCreate.reset();
          this.mostrarForm = false;
        }, error => {
          this.toastr.error('Error al crear el espacio', 'Error');
        });
    } else {
      this.formularioEspacioCreate.markAllAsTouched();
    }
  }

  deleteEspacio(id: any) {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.delete('http://127.0.0.1:8000/api/deleteEspacio/' + id)
      .subscribe((response: any) => {
        this.toastr.success('Espacio eliminado correctamente', 'Éxito');
        this.obtenerEspacios();
      }, error => {
        this.toastr.error('Error al eliminar el espacio', 'Error');
      });
  }
}
