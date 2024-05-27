import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ServiceLocator } from '../../service-locator';
import { CategoriasEventoInterface } from '../../_interfaces/categorias-evento.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorias-evento',
  templateUrl: './categorias-evento.component.html',
  styleUrl: './categorias-evento.component.css'
})
export class CategoriasEventoComponent {

  constructor(private http: HttpClient) {
    ServiceLocator.setHttpClient(http); 
  }
  categorias : CategoriasEventoInterface[] = [];

  ngOnInit(){
      this.obtenerCategorias_evento();
  }

  formularioCategoriasCreate = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]),
  });

  mostrarForm = false;
  mostrarFormulario() {
    this.mostrarForm = !this.mostrarForm;
  }

  obtenerCategorias_evento() {
    const httpClient = ServiceLocator.getHttpClient(); 
    httpClient.get('http://127.0.0.1:8000/api/categorias_evento')
      .subscribe((categorias_evento: any) => {
        this.categorias = categorias_evento; 
        console.log(this.categorias);
      }, error => {
        console.error('Error al obtener categorias_evento:', error);
      });
  }

  insertarDatos() {
    if (this.formularioCategoriasCreate.valid) {
      const httpClient = ServiceLocator.getHttpClient();
      // Usamos los valores del formulario para crear el objeto a enviar al servidor
      const nuevoCategoria = {
        nombre: this.formularioCategoriasCreate.value.nombre
      };
  
      httpClient.post('http://127.0.0.1:8000/api/addCategoriasEvento', nuevoCategoria)
        .subscribe((response: any) => {
          console.log('categoria insertado correctamente:', response);
          this.obtenerCategorias_evento();
          // Reiniciar el formulario después de una inserción exitosa
          this.formularioCategoriasCreate.reset();
        }, error => {
          console.error('Error al insertar categoria:', error);
        });
    } else {
      this.formularioCategoriasCreate.markAllAsTouched();
    }
  }
  
  

  deleteCategoriasEvento(id: any){
    const httpClient = ServiceLocator.getHttpClient();
    console.log(id);
    httpClient.delete('http://127.0.0.1:8000/api/deleteCategoriasEvento/'+id)
      .subscribe((response: any) => {
        console.log('Categoria eliminado correctamente ' + id);
        this.obtenerCategorias_evento();
      }, error => {
        console.error('Error al eliminar categoria:', error);
      });
  }
}
