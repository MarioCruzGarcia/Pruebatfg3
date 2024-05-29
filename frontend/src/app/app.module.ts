import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EspaciosComponent } from './components/espacios/espacios.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { CategoriasEventoComponent } from './components/categorias-evento/categorias-evento.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { AdminComponent } from './views/admin/admin.component';
import { LandingComponent } from './views/landing/landing.component';
import { CommonModule } from '@angular/common';
import { EspacioEspecificoComponent } from './views/espacio-especifico/espacio-especifico.component';
import { EventoEspecificoComponent } from './views/evento-especifico/evento-especifico.component';
import { EventsComponent } from './views/events/events.component';
import { SitesComponent } from './views/sites/sites.component';
import { CategoriasEventoEditComponent } from './components/categorias-evento/categorias-evento-edit/categorias-evento-edit.component';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceLocator } from './service-locator';
import { AuthGuard } from './Auth/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard2 } from './Auth/auth2.guard';
import { CalendarioComponent } from './views/calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CreacionComponent } from './views/creacion/creacion.component';


// , canActivate: [AuthGuard] Propiedad a añadir en los casos que el usuario quiera entrar algun sitio
// sino ha iniciado sesion no entra
// AuthGuard2: en el caso de que sea rol_id = 1 [ADMIN], entras sino te lleva al landing


const appRoutes : Routes = [
    {path: '', component: LandingComponent},
    {path: 'eventos', component: EventsComponent},
    {path: 'espacios', component: SitesComponent},
    {path: 'espacio/:id', component: EspacioEspecificoComponent},
    {path: 'evento/:id', component: EventoEspecificoComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard2]},
    {path: 'usersCRUD', component: UsersComponent, canActivate: [AuthGuard2]},
    {path: 'editUser/:id', component: UsersEditComponent, canActivate: [AuthGuard2]},
    {path: 'categoriasCRUD', component: CategoriasEventoComponent, canActivate: [AuthGuard2]},
    {path: 'editCategoria/:id', component: CategoriasEventoEditComponent, canActivate: [AuthGuard2]},
    {path: 'eventosCRUD', component: EventosComponent, canActivate: [AuthGuard2]},
    {path: 'espaciosCRUD', component: EspaciosComponent, canActivate: [AuthGuard2]},
    {path: 'comentariosCRUD', component: ComentariosComponent, canActivate: [AuthGuard2]},
    {path: 'login', component: LoginComponent},
    {path: 'calendario', component: CalendarioComponent, canActivate: [AuthGuard]},
    //Ruta comodin
    {path: '**', redirectTo: '' }
]

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UsersEditComponent,
        EventosComponent,
        EspaciosComponent,
        ComentariosComponent,
        CategoriasEventoComponent,
        CategoriasEventoEditComponent,
        BarraNavegacionComponent,
        LandingComponent,
        EventsComponent,
        SitesComponent,
        LoginComponent,
        CalendarioComponent
        
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 2000,
            progressBar: true,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        }),
        FullCalendarModule 
          
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
