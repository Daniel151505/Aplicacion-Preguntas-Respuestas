import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Respuesta{ 
  nombre: string
  esCorrecta: number

  public (nombre: string, esCorrecta: number) {
    this.nombre = nombre
    this.esCorrecta = esCorrecta
  }

}