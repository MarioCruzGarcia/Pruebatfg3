import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventosInterface } from '../../_interfaces/eventos.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceLocator } from '../../service-locator';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'] // Asegúrate de que esta línea tenga el nombre correcto (styleUrls en lugar de styleUrl)
})
export class EventosComponent implements OnInit {
  eventos: any= {};

  organizador: any = {};
  categoria: any = {};

  files: File[] = [];

  formularioEventoCreate = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    localizacion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    aforo: new FormControl('', [Validators.required, Validators.min(1)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    fecha_hora: new FormControl('', [Validators.required]),
    duracion: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    imagen: new FormControl('', [Validators.required, Validators.maxLength(255)]),
  });

  mostrarForm = false;

  constructor(private http: HttpClient) {
    ServiceLocator.setHttpClient(http);
  }

  ngOnInit() {
    this.obtenerEventos();
  }

  mostrarFormulario() {
    this.mostrarForm = !this.mostrarForm;
  }

  obtenerEventos() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/eventos')
      .subscribe((eventos: any) => {
        this.eventos = eventos;
        console.log(this.eventos);
      }, error => {
        console.error('Error al obtener eventos:', error);
      });
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const preview = document.getElementById('preview') as HTMLDivElement;
      preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 100%; height: auto;">`;
    };
    reader.readAsDataURL(file);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.files.push(file);
      this.previewImage(file);
    }
  }


  insertarDatos() {
    if (this.formularioEventoCreate.valid) {
      const httpClient = ServiceLocator.getHttpClient();
      const nuevoEvento = {
        nombre: this.formularioEventoCreate.value.nombre,
        localizacion: this.formularioEventoCreate.value.localizacion,
        aforo: this.formularioEventoCreate.value.aforo,
        descripcion: this.formularioEventoCreate.value.descripcion,
        fecha_hora: this.formularioEventoCreate.value.fecha_hora,
        duracion: this.formularioEventoCreate.value.duracion,
        imagen: this.formularioEventoCreate.value.imagen
      };

      console.log(nuevoEvento);

      httpClient.post('http://127.0.0.1:8000/api/addEvento', nuevoEvento)
        .subscribe((response: any) => {
          console.log('Evento insertado correctamente:', response);
          this.obtenerEventos();
          this.formularioEventoCreate.reset();
        }, error => {
          console.error('Error al insertar evento:', error);
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
        this.obtenerEventos();
      }, error => {
        console.error('Error al eliminar evento:', error);
      });
  }
}
