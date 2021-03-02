import { Respuesta } from "./respuesta.module";

export class Pregunta {
    constructor() {}

    descripcionPregunta: string;
    respuestas: Respuesta[]
    
    public(descripcionRespuesta: string, respuestas: Respuesta[]) {
        this.descripcionPregunta = descripcionRespuesta
        this.respuestas = respuestas
    }s
    

}