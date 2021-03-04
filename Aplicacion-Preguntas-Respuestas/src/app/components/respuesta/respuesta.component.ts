import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta.module';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  listarPreguntas: Pregunta[]
  respuestasUsuario: any []
  constructor(private preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.listarPreguntas = this.preguntaService.preguntas
    this.respuestasUsuario = this.preguntaService.respuestaUsuario
  }

}
