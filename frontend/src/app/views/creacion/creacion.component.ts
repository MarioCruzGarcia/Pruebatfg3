import { Component } from '@angular/core';
import { EspaciosInterface } from '../../_interfaces/espacios.interface';
import { EventosInterface } from '../../_interfaces/eventos.interface';
import { UsersService } from '../../services/users.service';
import { jwtDecode } from "jwt-decode";
import { MyJwtPayload } from '../../_interfaces/MyJwtPayload';
import { UploadService } from '../../services/upload.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent {

  token: any;
  nombre: any;
  id: any;

  files: File[] = [];

  /**
   * Declaro las categorias que hay posibles y los estados, para que en el desplegable solo
   * se puedan coger las opciones propuestas aqui
   */

  categorias: any[] = [
    { id: '1', nombre: 'Concierto' },
    { id: '2', nombre: 'Conferencia' },
    { id: '3', nombre: 'Exposición' },
    { id: '4', nombre: 'Feria' },
    { id: '5', nombre: 'Taller' }
  ];

  estados: any[] = [
    { id: '1', nombre: 'Disponible' },
    { id: '2', nombre: 'No disponible' },
    { id: '3', nombre: 'En Mantenimiento' },
    { id: '4', nombre: 'Reservado' }
  ];

  //_____________________CONSTRUCTOR Y NGONINIT

  constructor(private router: Router, private userService: UsersService, private uploadImage: UploadService, private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit() {
    this.cogerNombre();
  }

  selectedForm: string | null = null;

  evento: EventosInterface = {
    id: '',
    nombre: '',
    localizacion: '',
    aforo: 10,
    descripcion: '',
    fecha_hora: new Date(),
    duracion: 0,
    imagen: '',
    organizador_id: this.cogerNombre(),
    categoria_id: '1'
  };

  espacio: EspaciosInterface = {
    id: '',
    nombre: '',
    localizacion: '',
    imagen: '',
    aforo: 0,
    contacto: '',
    estado_id: '1',
    fecha: new Date()
  };

  // MUESTRA UN FORMULARIO U OTRO
  showForm(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedForm = target.value;
  }

  /**
   * En caso de que haya ciertos datos puestos en los formularios se activa con un return true
   * en caso contrario no se activa hasta que esten puestos
   * @returns 
   */
  isEventoFormValid(): boolean {
    if (this.evento.nombre && this.evento.localizacion && this.evento.fecha_hora && this.evento.duracion) {
      return true;
    } else {
      return false;
    }
  }

  isEspacioFormValid(): boolean {
    if (this.espacio.nombre && this.espacio.localizacion && this.espacio.fecha) {
      return true;
    } else {
      return false;
    }
  }


  /**
   * Cuando la imagen esta subida a Cloudinary
   * accionamos la funcion sendEvento que llama a la API y recibe una respuesta
   */

  //______________________________EVENTO__________________________________
  submitEvento(): void {
    if (this.files.length > 0) {
      this.upload().then((imageUrl: string) => {
        this.evento.imagen = imageUrl;
        this.sendEvento();
      }).catch((error: any) => {
        console.error('Error uploading image:', error);
      });
    } else {
      this.sendEvento();
    }
  }

  sendEvento(): void {
    this.evento.duracion = this.evento.duracion * 60;
    this.evento.organizador_id = this.cogerId();
    console.log('Evento enviado:', this.evento);
    this.http.post('http://127.0.0.1:8000/api/addEvento', this.evento)
      .subscribe(
        (res: any) => {
          console.log('Evento enviado:', res);
          this.toastr.success('Evento creado exitosamente', 'Éxito');
          this.router.navigate(['/eventos'])
        },
        (err: any) => {
          console.error('Error al enviar evento:', err);
          this.toastr.error('Error al crear el evento', 'Error');
        }
      );
  }

  //______________________________ESPACIO__________________________________
  submitEspacio(): void {
    if (this.files.length > 0) {
      this.upload().then((imageUrl: string) => {
        this.espacio.imagen = imageUrl;
        this.sendEspacio();
      }).catch((error: any) => {
        console.error('Error uploading image:', error);
      });
    } else {
      this.sendEspacio();
    }
  }

  sendEspacio(): void {
    console.log('Espacio enviado:', this.espacio);
    this.http.post('http://127.0.0.1:8000/api/addEspacio', this.espacio)
      .subscribe(
        (res: any) => {
          console.log('Espacio enviado:', res);
          this.toastr.success('Espacio creado exitosamente', 'Éxito');
          this.router.navigate(['/espacios']);
        },
        (err: any) => {
          console.error('Error al enviar espacio:', err);
          this.toastr.error('Error al crear el espacio', 'Error');
        }
      );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.files.push(file);
    }
  }

  /**
   * COGER DEL TOKEN LOS DATOS (ID Y NOMBRE)
   * @returns 
   */
  cogerId() {
    this.token = localStorage.getItem('token');
    const decoded: MyJwtPayload = jwtDecode(this.token);
    this.id = decoded.user_id
    return this.id;
  }

  cogerNombre() {
    this.token = localStorage.getItem('token');
    const decoded: MyJwtPayload = jwtDecode(this.token);
    this.nombre = decoded.nombre;
    return this.nombre;
  }

  /**
   * METODO ENCARGADO DE LA SUBIDA DE LAS IMAGENES A CLOUDINARY
   * recoje los datos y lo convierte e una URL que luego usaremos para poder poner
   * en la tabla de la BD
   * @returns 
   */
  upload(): any {
    return new Promise((resolve, reject) => {
      if (this.files.length == 0) {
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
              resolve(res.url);
            } else {
              console.log('URL not found');
            }
          },
          error: (err) => {
            console.error('Error al subir la imagen:', err);
            this.toastr.error('Error al subir la imagen', 'Error');
            reject(err);
          }
        });
    });
  }


}
