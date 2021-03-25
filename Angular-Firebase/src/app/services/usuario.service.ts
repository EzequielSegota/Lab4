import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public usuarioVigente:string;

  constructor() {
    this.usuarioVigente='alguien';
  }
}
