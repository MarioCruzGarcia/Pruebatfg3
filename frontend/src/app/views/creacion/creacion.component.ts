import { Component } from '@angular/core';
import { EspaciosInterface } from '../../_interfaces/espacios.interface';
import { EventosInterface } from '../../_interfaces/eventos.interface';
import { UsersService } from '../../services/users.service';
import { jwtDecode } from "jwt-decode";
import { MyJwtPayload } from '../../_interfaces/MyJwtPayload';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent {

  token : any;
  nombre : any;

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

  constructor(private userService : UsersService){}

  ngOnInit(){
    this.cogerNombre();
  }

  selectedForm: string | null = null;

  evento: EventosInterface = {
    id: '0',
    nombre: '',
    localizacion: '',
    aforo: 10,
    descripcion: '',
    fecha_hora: new Date(),
    duracion: 0,
    imagen: '',
    organizador: this.cogerNombre(),
    categoria: '1'
  };

  espacio: EspaciosInterface = {
    id: '0',
    nombre: '',
    localizacion: '',
    imagen: '',
    aforo: 0,
    contacto: '',
    estado: '1',
    fecha: new Date()
  };

  showForm(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedForm = target.value;
  }

  submitEvento(): void {
    this.evento.duracion = this.evento.duracion * 60
    console.log('Evento enviado:', this.evento);
    // Add your form submission logic here
  }

  submitEspacio(): void {
    console.log('Espacio enviado:', this.espacio);
    // Add your form submission logic here
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
  }
  

  cogerNombre(){
    this.token = localStorage.getItem('token');
    const decoded: MyJwtPayload = jwtDecode(this.token);
    this.nombre = decoded.nombre;
    console.log(this.nombre);
    return this.nombre;
  }
}
