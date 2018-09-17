import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './Component/main/app.component';
import {FormularioClienteComponent} from './Component/formulario-cliente/formulario-cliente.component';
import {ListadoClientesComponent} from './Component/listado-clientes/listado-clientes.component';
import {ListaClientesService} from './Services/ListaClientesClases-service/ListaClientes-service'
import {ListaClientesApiService} from './Services/ListaClientesApi-service/ListaClientesApi.service';

@NgModule({

    imports:[BrowserModule,FormsModule,HttpModule],
    declarations:[AppComponent,FormularioClienteComponent,ListadoClientesComponent],
    bootstrap:[AppComponent],
    providers:[ListaClientesService,ListaClientesApiService]
})
export class AppModule{}