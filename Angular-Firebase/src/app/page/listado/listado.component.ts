import { Component, OnInit } from '@angular/core';
import { MensajefireService } from '../../services/mensajefire.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  item$: Observable<any[]>;

  constructor(firestore: MensajefireService) {
    this.item$ = firestore.ObtenerTodos().valueChanges();
  }

  ngOnInit(): void {
  }

}
