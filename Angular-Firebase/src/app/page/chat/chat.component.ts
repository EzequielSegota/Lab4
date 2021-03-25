import { Component, OnInit } from '@angular/core';
import { MensajefireService } from '../../services/mensajefire.service';
import { Mensaje } from '../../clases/mensaje';
import {MensajeRealService} from '../../services/mensaje-real.service';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensaje:Mensaje;


  constructor(private miServicio:MensajefireService, private miServicioReal:MensajeRealService,
             private miServicioUsuario:UsuarioService) { 
    this.mensaje= new Mensaje;
  }

  Enviar(){
    this.mensaje.usuario=this.miServicioUsuario.usuarioVigente;
    this.miServicio.Crear(this.mensaje).then(()=>{
      console.log('Se envió el mensaje fire');
    });

    this.miServicioReal.CrearUno(this.mensaje).then(()=>{
      console.log('Se envió el mensaje real');
    });
  }

  ngOnInit(): void {
  }

}
