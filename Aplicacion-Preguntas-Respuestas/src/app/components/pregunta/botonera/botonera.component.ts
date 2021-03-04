import { Component, OnInit } from '@angular/core';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {
  btnString = "Aceptar"

  constructor(public preguntaService: PreguntaService) { }

  ngOnInit(): void {
  }

  siguiente() {
    switch (this.btnString) {
      case 'Aceptar': {
        this.preguntaService.preguntaConfirmada = true
        this.btnString = 'Siguiente'
    
      } 
    }
  }

}
