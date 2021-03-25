import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeRealService {
  
  rutaDeLaColeccion = '/mensajeReal';
  referenciaALaColeccion: AngularFireList<Mensaje>;

  constructor(private db:AngularFireDatabase) {
    this.referenciaALaColeccion=db.list(this.rutaDeLaColeccion);
   }

   CrearUno(mensaje:Mensaje):any{
      return this.referenciaALaColeccion.push(mensaje);
   }
}
