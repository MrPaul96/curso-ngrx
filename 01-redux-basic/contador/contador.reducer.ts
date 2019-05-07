import { Action } from '../ngrx-fake/ngrx';
/* Reducer is just a function */

/* The main goal of reducer is to return a new state. Reducer must return a state. */
/* Default Value = 10 */
/* It is not usual to work with if - else inside a reducer. You use switch.*/

export function contadorReducer(state = 10, action: Action) {
  switch (action.type) {
      case 'INCREMENTAR':
          return state += 1;
      case 'DECREMENTAR':
          return state -= 1;
      case 'MULTIPLICAR':
          return state * action.payload;
      case 'DIVIDIR':
          return state / action.payload;
      case 'RESET':
          return state = 0;
      default:
          return state;
  }
}
