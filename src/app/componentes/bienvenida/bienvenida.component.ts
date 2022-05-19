import { FirestoreService } from 'src/app/servicios/firestore.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  usuarios : Usuario[] = [];
  @Input() inputPantalla : boolean = false;
  @Output() usuarioSeleccionado : EventEmitter<any>= new EventEmitter<any>();
  

  constructor(public srv: FirestoreService) { }

  ngOnInit(): void {
     this.srv.getCollection('Actor').then( (ref:any) => ref.subscribe((listadoRef:any) => {
       listadoRef.forEach((element : any) => {
         this.usuarios.push(element.payload.doc.data());
       });
    }));
  }

  getUsuarioSeleccionado(detalleUsuario: Usuario, accionSeleccionada:string){
    this.usuarioSeleccionado.emit({usuario: detalleUsuario, accion: accionSeleccionada});

  }

}
