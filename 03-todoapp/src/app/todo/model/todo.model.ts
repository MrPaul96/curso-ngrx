export class Todo {


    public id: number;
    public texto:  string;
    public completado: boolean;


    constructor( texto: string){

      this.texto = texto.charAt(0).toUpperCase()+texto.slice(1);
      this.completado = false; //Todos los  todo van a crearse como penditnes.
      this.id = Math.random();

    }

}
