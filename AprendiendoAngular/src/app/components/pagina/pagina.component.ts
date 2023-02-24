import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit{

  public nombre: string | undefined;
  public apellidos: string | undefined;

  constructor(
    
    private _route: ActivatedRoute,
    private _router: Router
    
    ){  }
  
  
    ngOnInit(): void {
  

      this._route.params.subscribe((params: Params)=>{
        this.nombre=params['nombre'];
        this.apellidos=params['apellidos'];
        console.log(params);
      });

  }

  redireccion(){
    this._router.navigate(['/formulario']);
  }

}
