import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocator } from '../../../service-locator';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  userId: string | undefined;
  userData: any = {};
  formularioUserEdit = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), this.passwordValidator()]),
    rol_id: new FormControl('', [Validators.required, Validators.min(1), Validators.max(3)])
  });


  constructor(private route: ActivatedRoute, private http: HttpClient) {
    ServiceLocator.setHttpClient(http);
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    console.log(this.userId);
    this.cogerDatos();
  }

  cogerDatos() {
    const httpClient = ServiceLocator.getHttpClient();
    httpClient.get('http://127.0.0.1:8000/api/getUser/' + this.userId)
      .subscribe((response: any) => {
        this.userData = response;
        console.log(this.userData);
        // Rellenar el formulario con los datos del usuario
        this.formularioUserEdit.patchValue({
          nombre: this.userData.nombre,
          correo: this.userData.correo,
          password: this.userData.password,
          rol_id: this.userData.rol_id
        });
      }, error => {
        console.error('Error al obtener datos:', error);
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

  updateUser() {
    if (this.formularioUserEdit.valid) {
      const httpClient = ServiceLocator.getHttpClient();
      httpClient.put('http://127.0.0.1:8000/api/updateUser/' + this.userId, this.formularioUserEdit.value)
        .subscribe((response: any) => {
          console.log('Usuario actualizado correctamente:', response);
          // Redirigir a la página principal
          window.location.href = '/usersCRUD';
        }, error => {
          console.error('Error al actualizar usuario:', error);
        });
    } else {
      // Mostrar los mensajes de error en caso de haberlos
      this.formularioUserEdit.markAllAsTouched();
    }
  }
}
