import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta.module';
import { Respuesta } from '../models/respuesta.module';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  indexPregunta = 0
  opcionSeleccionada: Respuesta
  deshabilitarBtn = true
  preguntaConfirmada = false
  indexRespuesta = null
  respuestaUsuario: Array<number> = []

  public preguntas: Pregunta[] = [
    new Pregunta('¿Cuál es la capital de Argentina?', [
      new Respuesta('Buenos Aires', 1),
      new Respuesta('Montevideo', 0),
      new Respuesta('Santiago', 0),
      new Respuesta('Lima', 0),
    ]),
    new Pregunta('¿Cuál es la capital de Francia?', [
      new Respuesta('Roma', 0),
      new Respuesta('Paris', 1),
      new Respuesta('Dublin', 0),
      new Respuesta('Atenas', 0),
    ]),
    new Pregunta('¿Cuál es la capital de Egipto?', [
      new Respuesta('Londres', 0),
      new Respuesta('Berlin', 0),
      new Respuesta('El Cairo', 1),
      new Respuesta('Casablanca', 0),
    ]),
  ];
  constructor() { }

  getPreguntas() {
    return this.preguntas.slice()
  }

}
