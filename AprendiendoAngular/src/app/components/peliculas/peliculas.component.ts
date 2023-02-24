import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]
})
export class PeliculasComponent implements OnInit{

  public titulo: string;
  public peliculas: Pelicula[] | undefined;
  public favorita: Pelicula| undefined;
  public fecha:any;


  constructor(
    private _peliculaService: PeliculaService
  ){
    this.titulo='Componente de Peliculas';
    this.peliculas=[
      new Pelicula("Spiderman",2019,"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/1200px-Spider-Man.jpg"),
      new Pelicula("Xmen",2018,"https://sm.ign.com/t/ign_latam/image/h/how-to-wat/how-to-watch-the-wolverine-movies-in-chronological-order_yb84.1280.png")
    ];
    this.fecha= new Date(2020,8,12);
  }

  ngOnInit(): void {
    console.log(this._peliculaService.holaMundo());
  }

}
