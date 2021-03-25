import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { promise } from 'selenium-webdriver';
import { Mensaje } from '../clases/mensaje';


@Injectable({
  providedIn: 'root'
})
export class MensajefireService {

  rutaDeLaColeccion = '/mensajeFire';
  referenciaALaColeccion: AngularFirestoreCollection<Mensaje>;


  constructor(private bd:AngularFirestore) {
      this.referenciaALaColeccion=bd.collection(this.rutaDeLaColeccion);
   }

   Crear(mensaje:Mensaje):any{
      return this.referenciaALaColeccion.add({...mensaje});
   }

   ObtenerTodos():AngularFirestoreCollection<Mensaje>
   {
      return this.referenciaALaColeccion;
   }

   BorrarMensaje(id:any):Promise<void>
   {
      return this.referenciaALaColeccion.doc(id).delete();
   }

   ModificarMensaje(id:any,datos:any):Promise<void>
   {
      return this.referenciaALaColeccion.doc(id).update(datos);
   }
}
