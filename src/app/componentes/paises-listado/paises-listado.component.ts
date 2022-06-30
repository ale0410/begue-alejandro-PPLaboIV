import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { HttpService } from 'src/app/servicios/http.service';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  public paises : [] | any;
  // public paises2 : [] | any;
  // public todosLosPaises:[] | any = [];

  @Output() paisSeleccionado : EventEmitter<any>= new EventEmitter<any>();

  constructor(private http: HttpService) {
    http.getArrayPaisesEurope().subscribe((listaPaises)=>{
      this.paises = listaPaises;
    });

    http.getArrayPaisesAfrica().subscribe((listaPaises: [] | any)=>{
      listaPaises.map((pais:any) =>{
        if(this.paises)
          this.paises.push(pais);
      });
    });
  }

  ngOnInit(): void {

  }

  getPaisSeleccionado(pais: [] | any){
    this.paisSeleccionado.emit(pais);
  }

}
