import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocator } from '../../../service-locator';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-espacios-edit',
  templateUrl: './espacios-edit.component.html',
  styleUrls: ['./espacios-edit.component.css']
})
export class EspaciosEditComponent implements OnInit {

  espacioId: string | undefined;
  espacioData: any = {};
  estados: any[] = [];
  
  formularioEspacioUpdate = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    localizacion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    aforo: new FormControl('', [Validators.required, Validators.min(1)]),
    contacto: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    estado_id: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required])
  });

  imageUrl: string | ArrayBuffer | null = '';
  files: File[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    ServiceLocator.setHttpClient(http);
  }

  ngOnInit(): void {
    this.espacioId = this.route.snapshot.params['id'];
    this.cogerDatos();
    this.cogerEstados();
  }

  cogerDatos() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/getEspacio/' + this.espacioId)
      .subscribe((response: any) => {
        this.espacioData = response;
        this.formularioEspacioUpdate.patchValue({
          nombre: this.espacioData.nombre,
          localizacion: this.espacioData.localizacion,
          aforo: this.espacioData.aforo,
          contacto: this.espacioData.contacto,
          estado_id: this.espacioData.estado_id,
          fecha: this.espacioData.fecha,
          imagen: this.espacioData.imagen
        });
        this.imageUrl = this.espacioData.imagen;  // Asigna la URL de la imagen al imageUrl para la vista previa
      }, error => {
        console.error('Error al obtener datos:', error);
      });
  }

  cogerEstados() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/estado')
      .subscribe((response: any) => {
        this.estados = response;
      }, error => {
        console.error('Error al obtener estados:', error);
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
          this.formularioEspacioUpdate.patchValue({
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
   * Sube la imagen al Cloudinary
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
    if (this.formularioEspacioUpdate.valid) {
      const httpClient = ServiceLocator.getHttpClient();
      httpClient.put('http://127.0.0.1:8000/api/updateEspacio/' + this.espacioId, this.formularioEspacioUpdate.value)
        .subscribe((response: any) => {
          console.log('Espacio actualizado correctamente:', response);
          window.location.href = '/espaciosCRUD';
        }, error => {
          console.error('Error al actualizar espacio:', error);
        });
    } else {
      this.formularioEspacioUpdate.markAllAsTouched();
    }
  }
}
