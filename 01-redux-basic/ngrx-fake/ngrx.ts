/* An action that the reducer should do   */

/* An interface is a rule that an object should follow */

export interface Action {
  type: string;
  payload?: any;  //Parameters that we can send to the action.
}


/*Create an interface Reducer
 Generic Type */
export interface Reducer<T>{
   //El estado es de tipo Genérico.
  (state: T, action: Action): T
}
