import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta.module';
import { Respuesta } from 'src/app/models/respuesta.module';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

listarPregunta: Pregunta []

  constructor(public preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.listarPregunta = this.preguntaService.getPreguntas()
  }

  obtenerPregunta(){
    return this.listarPregunta[this.preguntaService.indexPregunta].descripcionPregunta
  }

  respuestaSeleccionada(respuesta: Respuesta) {
    this.preguntaService.opcionSeleccionada = respuesta
    this.preguntaService.deshabilitarBtn = false
  }

  addClassOption(respuesta: Respuesta){
     // respuesta seleccionada y NO esta confirmada
     if (respuesta === this.preguntaService.opcionSeleccionada && !this.preguntaService.preguntaConfirmada) {
      return 'active text-light';
    }

    // respuesta CORRECTA y esta confirmada
    if (respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.preguntaConfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return 'list-group-item-success';
    }

    // respuesta es incorrecta y esta confirmada
    if (respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.preguntaConfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return 'list-group-item-danger';
    }

  }

  
 
}
