import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioHijo = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.cambioHijo.emit(0);
  }

}
