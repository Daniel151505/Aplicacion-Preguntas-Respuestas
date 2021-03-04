import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta.module';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  listarPreguntas: Pregunta[]
  constructor() { }

  ngOnInit(): void {
  }

}
