import {Component,Input, Output, EventEmitter} from '@angular/core';
import {Cliente} from '../../Classes/Cliente';
import { ListaClientesApiService } from '../../Services/ListaClientesApi-service/ListaClientesApi.service';


@Component({

    moduleId:module.id,
    selector:'listado-clientes',
    templateUrl:'listado-clientes.html'
})

export class ListadoClientesComponent{
    @Input() clientes:Array<Cliente>;
    @Output() modificado : EventEmitter<Cliente> = new EventEmitter<Cliente>();
    displayCliente(cliente:Cliente){
        console.log(cliente);
    }

    constructor(private servicio : ListaClientesApiService){}

    modificarCliente(model : Cliente){
        this.modificado.emit(model);
    }
}