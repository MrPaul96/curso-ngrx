import * as todoActions from './todo.actions';
import { Todo } from './model/todo.model';


const todo1: Todo = new Todo('Vencer a Thanos');
const todo2: Todo = new Todo('Salvar al mundo');
const todo3: Todo = new Todo('Pedir prestado el traje de IronMan');

const estadoInicial: Todo[] = [todo1, todo2, todo3];


todo2.completado = true;

export function todoReducer(state = estadoInicial, action: todoActions.Acciones): Todo[] {

  switch (action.type) {
    case todoActions.AGREGAR_TODO:
      const todo = new Todo ( action.texto );
      return [...state, todo];
    default:
      return state;
  }
}
