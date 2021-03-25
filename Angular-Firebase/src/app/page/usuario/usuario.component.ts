import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario:string='nadie';

  constructor(private miServicioUsuario:UsuarioService) {
      console.log(miServicioUsuario.usuarioVigente);
   }

  ngOnInit(): void {
  }

  Guardar(){
      this.miServicioUsuario.usuarioVigente=this.usuario;
  }
}
