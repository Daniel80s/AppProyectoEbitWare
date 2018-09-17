import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import '../../rxjs/index';
import {Cliente} from '../../Classes/Cliente';
import {BsModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';


@Injectable()
export class ListaClientesApiService{

    private apiUrl='http://187.188.122.85:8091/NutriNET/';

    constructor(private http : Http){}

    getClientes(): Observable<Cliente[]> {
    return this.http.get(this.getUrl('Cliente')).map(this.getDatos).catch(this.error);
 
    }

     addClientes(model : Cliente): Observable<Cliente>{

        return this.http.post(this.getUrl('Cliente'),model).map(this.getDatos).catch(this.error);
 
    }

    updateClientes(model : Cliente){
        return this.http.put(this.getUrl('Cliente'),model).catch(this.error);
    }

    private error(error:any){
        let msg =(error.message) ? error.message : 'Error desconocido';
        console.error(msg);
        return Observable.throw(msg);
    }

    private getDatos(data : Response){
        let datos= data.json();
        return datos || [];
    }

    private getUrl(modelo:String){
        return this.apiUrl+modelo;
    }

}