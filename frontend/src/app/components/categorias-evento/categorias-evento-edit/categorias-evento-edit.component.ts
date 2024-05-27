import { Component, OnInit } from '@angular/core';
import { ServiceLocator } from '../../../service-locator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categorias-evento-edit',
  templateUrl: './categorias-evento-edit.component.html',
  styleUrl: './categorias-evento-edit.component.css'
})
export class CategoriasEventoEditComponent implements OnInit{

  categoriaId: string | undefined;
  categoriaData: any = {};

  formularioCategoriaEdit: FormGroup= new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')])
  });

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    ServiceLocator.setHttpClient(http);
  }

  ngOnInit(): void {
    this.categoriaId = this.route.snapshot.params['id'];
    console.log(this.categoriaId);
    this.cogerDatos();
  }

  cogerDatos() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/getCategoriasEvento/' + this.categoriaId)
      .subscribe((response: any) => {
        this.categoriaData = response;
        console.log(this.categoriaData);
        // Rellenar el formulario con los datos del Categoria
        this.formularioCategoriaEdit.patchValue({
          nombre: this.categoriaData.nombre
        });
      }, error => {
        console.error('Error al obtener datos:', error);
      });
  }

  updateCategoria() {
    if (this.formularioCategoriaEdit.valid) {
      const httpClient = ServiceLocator.getHttpClient();
      httpClient.put('http://127.0.0.1:8000/api/updateCategoriasEvento/' + this.categoriaId, this.formularioCategoriaEdit.value)
        .subscribe((response: any) => {
          console.log('Categoria actualizado correctamente:', response);
          // Redirigir a la página principal
          window.location.href = '/categoriasCRUD';
        }, error => {
          console.error('Error al actualizar Categoria:', error);
        });
    } else {
      // Mostrar los mensajes de error en caso de haberlos
      this.formularioCategoriaEdit.markAllAsTouched();
    }
  }
}
