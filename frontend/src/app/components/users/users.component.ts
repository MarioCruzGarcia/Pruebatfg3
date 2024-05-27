import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersInterface } from '../../_interfaces/users.interface';
import { Users } from './users';
import { ServiceLocator } from '../../service-locator';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) {
    ServiceLocator.setHttpClient(http); 
  }
  user = new Users();
  users: Users[] = [];

  formularioUserCreate = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), this.passwordValidator()]),
    rol_id: new FormControl('', [Validators.required, Validators.min(1), Validators.max(3)])
  });

  ngOnInit() {
    this.obtenerUsuarios();
  }

  mostrarForm = false;
  mostrarFormulario() {
    this.mostrarForm = !this.mostrarForm;
  }

  obtenerUsuarios() {
    const httpClient = ServiceLocator.getHttpClient(); 
    httpClient.get('http://127.0.0.1:8000/api/users')
      .subscribe((response: any) => {
        this.users = response; 
        console.log(this.users);
      }, error => {
        console.error('Error al obtener user:', error);
      });
  }

  insertarDatos() {
    if (this.formularioUserCreate.valid) {
      const httpClient = ServiceLocator.getHttpClient();
      // Usamos los valores del formulario para crear el objeto a enviar al servidor
      const nuevoUser = {
        nombre: this.formularioUserCreate.value.nombre,
        correo: this.formularioUserCreate.value.correo,
        password: this.formularioUserCreate.value.password,
        rol_id: this.formularioUserCreate.value.rol_id
      };
  
      httpClient.post('http://127.0.0.1:8000/api/addUser', nuevoUser)
        .subscribe((response: any) => {
          console.log('Usuario insertado correctamente:', response);
          this.obtenerUsuarios();
          // Reiniciar el formulario después de una inserción exitosa
          this.formularioUserCreate.reset();
        }, error => {
          console.error('Error al insertar usuario:', error);
        });
    } else {
      this.formularioUserCreate.markAllAsTouched();
    }
  }
  
  

  deleteUser(id: any){
    const httpClient = ServiceLocator.getHttpClient();
    console.log(id);
    httpClient.delete('http://127.0.0.1:8000/api/deleteUser/'+id)
      .subscribe((response: any) => {
        console.log('Usuario eliminado correctamente ' + id);
        this.obtenerUsuarios();
      }, error => {
        console.error('Error al eliminar usuario:', error);
      });
  }

  //https://es.stackoverflow.com/questions/493232/como-puedo-crear-una-expresion-regular-que-valide-una-contraseña-segura
  //https://angular.io/api/forms/ValidatorFn
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Obtenemos el valor, la password
      const value: string = control.value || '';
      // Comprobamos si la password contiene al menos un número
      const hasNumber = /\d/.test(value); 
      // Comprobamos si la password contiene al menos un carácter especial
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value); 
  
      // Si la password no contiene al menos un número o no contiene al menos un carácter especial,
      // devolvemos un objeto de errores con la clave 'invalidPassword' establecida en true
      if (!hasNumber || !hasSpecial) {
        return { 'invalidPassword': true };
      }
      // Si la password pasa ambas comprobaciones, devolvemos null, indicando que la validación fue exitosa
      // Se devuelve null por el ValidatorErrors
      return null;
    };
  }
}
