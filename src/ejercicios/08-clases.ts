import { Producto, calculaISV } from "./06-desestructuracion-funcion";


/*
    ==== Código de TypeScript ====
*/

class PersonaNormal {
    constructor(
        public nombre: String, 
        public direccion: string
        ){}
}

class Heroe extends PersonaNormal{

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,    
        ){
            super( nombreReal, 'New York, USA');
        }
    }



const ironman = new Heroe('Iron Man', 45, 'Tony');

console.log(ironman)