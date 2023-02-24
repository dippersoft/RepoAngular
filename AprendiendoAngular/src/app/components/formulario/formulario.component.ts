import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public user: any;
  public campo:string | undefined;
  constructor(){

    this.user={
      nombre:'',
      apellidos:'',
      bio:'',
      genero:''
    }
  }

  onSubmit(){
    alert("Onsubmit");
    console.log(this.user)
  }

  hasDadoClic(){
    alert('Has dado clic');
      
  }

  hasSalido(){
    alert('Has salido');
  }
}
