import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as contadorActions from './contador/contador.actions';

//El estado se rige por el contador.
//Ok store mira lo que tu vas a manejar es ese objeto.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  contador: number;

  constructor(private store: Store<AppState>) {
    //this.store.subscribe toma todas.
    //Propiedad especifica del estado de la aplicación.
    this.store.select('contador').subscribe( contador => {
       this.contador = contador;
    })
  }

  incrementar(){
    const accion = new contadorActions.IncrementarAction();
    this.store.dispatch( accion);
  }
  decrementar(){
    const accion = new contadorActions.DecrementarAction();
    this.store.dispatch( accion);
  }
}
