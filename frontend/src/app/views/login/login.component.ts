import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MyJwtPayload } from '../../_interfaces/MyJwtPayload';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  isLogin: boolean = true;
  data: any;
  token: any;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router, private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z]).{8,}$/)]],
      rememberMe: [false]
    });

    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z]).{8,}$/)]],
      terms: [false, Validators.requiredTrue],
      tipoUsuario: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Elimina los elementos innecesarios en el ngOnInit
  }

  //Ponemos y quitamos el formulario
  toggleForm() {
    this.isLogin = !this.isLogin;
  }


  /**
   * Hacemos la peticion post para que nos devulva el status y si es correcto se loguea
   */
  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);

      // Hacer la solicitud HTTP POST usando HttpClient
      this.httpClient.post('http://127.0.0.1:8000/api/login', this.loginForm.value)
        .subscribe((res: any) => {
          this.data = res;
          if (this.data.status === 1) {
            this.token = this.data.data.token;
            localStorage.setItem('token', this.token);

          } else if (this.data.status === 0) {
            this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
              timeOut: 2000,
              progressBar: true
            });
          }
          console.log('Respuesta del servidor:', res);
          // Maneja la respuesta del servidor aquí
          if (this.data.status === 1) {
            this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code));
            this.router.navigate(['/']);
            this.loginForm.reset();
          }
        }, (error: any) => {
          console.error('Error en la solicitud HTTP:', error);
        });
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      console.log('Register Data:', this.registerForm.value);

      let tipoUsuario;
      if (this.registerForm.value.tipoUsuario === 'organizador') {
        tipoUsuario = 2; // Si el usuario selecciona 'organizador'
      } else {
        tipoUsuario = 3; // Si el usuario selecciona 'participante'
      }

      // Crear un nuevo usuario con los datos del formulario
      const nuevoUser = {
        nombre: this.registerForm.value.nombre,
        correo: this.registerForm.value.correo,
        password: this.registerForm.value.password,
        rol_id: tipoUsuario
      };

      // Hacer la solicitud HTTP POST usando HttpClient
      this.httpClient.post('http://127.0.0.1:8000/api/register', nuevoUser)
        .subscribe((res: any) => {
          this.data = res;
          if (this.data.status === 1) {
            this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code));
            this.router.navigate(['login']);
            this.toggleForm();
            this.registerForm.reset();
          } else if (this.data.status === 0) {
            this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
              timeOut: 2000,
              progressBar: true
            });
          }
        }, error => {
          console.error('Error en la solicitud HTTP:', error);
        });
    }
  }

  get loginCorreo() {
    return this.loginForm.get('correo');
  }

  get loginPassword() {
    return this.loginForm.get('password');
  }

  get registerNombre() {
    return this.registerForm.get('nombre');
  }

  get registerCorreo() {
    return this.registerForm.get('correo');
  }

  get registerPassword() {
    return this.registerForm.get('password');
  }

  get registerTipoUsuario() {
    return this.registerForm.get('tipoUsuario');
  }

  get registerTerms() {
    return this.registerForm.get('terms');
  }
}
