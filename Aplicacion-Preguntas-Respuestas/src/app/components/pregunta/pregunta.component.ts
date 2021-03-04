import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta.module';
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

}
