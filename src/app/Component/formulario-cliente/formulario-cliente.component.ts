import {Component,Output,EventEmitter} from '@angular/core';
import {Cliente} from '../../Classes/Cliente';

@Component({

    moduleId:module.id,
    selector:'formulario-cliente',
    templateUrl:'formulario-cliente.html'
})

export class FormularioClienteComponent{
    model:Cliente=new Cliente(0,'','','','','',0,0,0,0)
    @Output() onsubmit=new EventEmitter<any>();

    public submit(){
        this.onsubmit.emit(this.model);
        console.log(this.model);
        this.model = new Cliente(0,'','','','','',0,0,0,0)
    }

}