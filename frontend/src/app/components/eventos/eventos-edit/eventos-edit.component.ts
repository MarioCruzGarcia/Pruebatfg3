import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocator } from '../../../service-locator';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventos-edit',
  templateUrl: './eventos-edit.component.html',
  styleUrls: ['./eventos-edit.component.css']
})
export class EventosEditComponent implements OnInit {

  eventoId: string | undefined;
  eventoData: any = {};
  organizadores: any[] = [];
  categorias: any[] = [];
  
  formularioEventoUpdate = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    localizacion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    aforo: new FormControl('', [Validators.required, Validators.min(1)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    fecha_hora: new FormControl('', [Validators.required]),
    duracion: new FormControl('', [Validators.required, Validators.min(1)]),
    imagen: new FormControl('', [Validators.required]),
    organizador_id: new FormControl('', [Validators.required]),
    categoria_id: new FormControl('', [Validators.required])
  });

  imageUrl: string | ArrayBuffer | null = '';
  files: File[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    ServiceLocator.setHttpClient(http);
  }

  ngOnInit(): void {
    this.eventoId = this.route.snapshot.params['id'];
    this.cogerDatos();
    this.cogerOrganizadores();
    this.cogerCategorias();
  }

  cogerDatos() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/getEvento/' + this.eventoId)
      .subscribe((response: any) => {
        this.eventoData = response;
        this.formularioEventoUpdate.patchValue({
          nombre: this.eventoData.nombre,
          localizacion: this.eventoData.localizacion,
          aforo: this.eventoData.aforo,
          descripcion: this.eventoData.descripcion,
          fecha_hora: this.eventoData.fecha_hora,
          duracion: this.eventoData.duracion,
          imagen: this.eventoData.imagen,
          organizador_id: this.eventoData.organizador_id,
          categoria_id: this.eventoData.categoria_id
        });
        this.imageUrl = this.eventoData.imagen;  // Asigna la URL de la imagen al imageUrl para la vista previa
      }, error => {
        console.error('Error al obtener datos:', error);
      });
  }

  cogerOrganizadores() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/users')
      .subscribe((response: any) => {
        this.organizadores = response;
      }, error => {
        console.error('Error al obtener organizadores:', error);
      });
  }

  cogerCategorias() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/categorias_evento')
      .subscribe((response: any) => {
        this.categorias = response;
      }, error => {
        console.error('Error al obtener categorías:', error);
      });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.files = [file];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result; 
        this.upload().then((url: any) => {
          this.formularioEventoUpdate.patchValue({
            imagen: url
          });
        }).catch((error: any) => {
          console.error('Error al subir la imagen:', error);
        });
      };
      reader.readAsDataURL(file);
    }
  }

  /**
   * Sube la imagen al CLoudnary
   * @returns 
   */

  upload(): any {
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
              console.log('URL not found');
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

  /**
   * Envia los datos con todo ya formateado
   */

  updateDatos() {
    if (this.formularioEventoUpdate.valid) {
      const httpClient = ServiceLocator.getHttpClient();
      httpClient.put('http://127.0.0.1:8000/api/updateEvento/' + this.eventoId, this.formularioEventoUpdate.value)
        .subscribe((response: any) => {
          console.log('Evento actualizado correctamente:', response);
          window.location.href = '/eventosCRUD';
        }, error => {
          console.error('Error al actualizar evento:', error);
        });
    } else {
      this.formularioEventoUpdate.markAllAsTouched();
    }
  }
}
