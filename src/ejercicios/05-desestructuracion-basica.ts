/*
    ==== Código de TypeScript ====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles:{
        autor: 'Ed Sheeran',
        anio: 2022
    }
}

const {volumen, segundo, cancion, detalles /*{autor}*/} = reproductor;
const {autor} = detalles; //ESTA FORMA ES MAS LEGIBLE QUE LA ANTERIOR



console.log ('El volumen actual es de: ', volumen);
console.log ('El segundo actual es de: ', segundo);
console.log ('La cancion actual es de: ', cancion );
console.log ('El autor es: ', autor);


const dbz: string [] = ['Goku', 'Vegeta', 'Trunks'];
const[p1, p2, p3] = dbz;

console.log('Personaje 1: ',p1);
console.log('Personaje 2: ',p3);
console.log('Personaje 3: ',p3);