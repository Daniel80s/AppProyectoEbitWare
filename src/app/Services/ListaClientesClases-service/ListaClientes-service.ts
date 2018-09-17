import {Injectable} from '@angular/core'
import {Cliente} from '../../../app/Classes/Cliente';

const CLIENTES : Array<Cliente>=[

   new Cliente(3,'M','ra','co','o@gmail.com','1SAS455S',52,1.73,75.5,40),
   new Cliente(4,'I','R','a','a@gmail.com','123455S',47,1.68,75.5,40),
   new Cliente(5,'S','ve','hie','8o@gmail.com','12J45678',5,1.44,20.5,10),
   new Cliente(6,'P','iz','o','p888@gmail.com','JG5FDE8E',29,1.67,77.0,50),
];

const RETRASO = 500;

@Injectable()
export class ListaClientesService{
    getClientes(){
        return new Promise<Cliente[]>(data=>{
            setTimeout(()=>{
                data(CLIENTES);
            },RETRASO);
        });
    }
}