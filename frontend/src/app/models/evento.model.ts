// evento.model.ts
export class Evento {
    id: string = '0';
    nombre: string = '';
    localizacion: string = '';
    aforo: number = 10;
    descripcion: string = '';
    fecha_hora: Date = new Date();
    duracion: number = 0;
    imagen: string = '';
    organizador: string = '';
    categoria: string = '1';
}
