import { Component, OnInit} from '@angular/core';
import { Cliente } from '../../Classes/Cliente';
import { ListaClientesService } from '../../Services/ListaClientesClases-service/ListaClientes-service';
import { ListaClientesApiService } from '../../Services/ListaClientesApi-service/ListaClientesApi.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

  clientes: Array<Cliente> = [];
  cliente : Cliente = new Cliente(0,'','','','','',0,0,0,0);



  //Api
  //Provider
  constructor(private servicio: ListaClientesApiService) { }
  ngOnInit() {

    this.servicio.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }
  //Provider
  /*Prueba
  constructor(private servicio : ListaClientesService){}
  ngOnInit(){
    this.servicio.getClientes().then(data=>{
      this.clientes = data;
    });
  }
  */

  /*Prueba
    ngOnInit(){
      this.clientes.push(new Cliente(1,'Daniel','Rivera','Inferno','inferno@gmail.com','1234',26,1.76,68.5,30));
      this.clientes.push(new Cliente(2,'Marco','Rivera','Marquitos','marquitos@gmail.com','12345',29,1.74,74.5,40));
    }
  */

  /* Prueba provider
  guardar(model: Cliente) {
    let v = Math.max.apply(Math, this.clientes.map(function (o) { return o.idCliente; }));
    model.idCliente = ++v;
    this.clientes.push(model);
  }*/

  guardar(model : Cliente){
    if(model.Cliente_ID===0){
      this.servicio.addClientes(model).subscribe(data=>{
        this.clientes.push(data);
      });
    }
    else{this.servicio.updateClientes(model).subscribe();}
  }
  addCliente(){
    this.cliente = new Cliente(0,'','','','','',0,0,0,0)
  }
  onModificar(model : Cliente){
    this.cliente = model
  }


}
