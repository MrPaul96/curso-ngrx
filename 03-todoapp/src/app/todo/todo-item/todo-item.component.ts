import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { todoReducer } from '../todo.reducer';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  //Ya tengo el elemento fisico como si hubiera hecho una selección de JQuery.
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;


  constructor() { }

  ngOnInit() {
    console.log(this.todo);

    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
  }

  editar() {
    this.editando = true;

    setTimeout( () => {
      //Esto continua la edición.
      this.txtInputFisico.nativeElement.select();
    }, 1);

  }

  terminarEdicion(){
    this.editando = false;
  }

}
