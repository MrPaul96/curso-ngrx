import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  multiplicar() {

    this.contador = this.contador * 2;
    this.cambioContador.emit(this.contador);

  }

  dividir() {

    this.contador = this.contador / 2;
    this.cambioContador.emit(this.contador);

  }

  resetNieto(nuevoContador){

    this.contador = nuevoContador;
    this.cambioContador.emit(0);
  }



}
