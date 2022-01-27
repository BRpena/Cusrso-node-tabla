const deadpool = {
    nombre: 'wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder } `
    }
} 

//const { nombre, apellido, poder, edad = 0 }= deadpool;
//console.log(nombre, apellido, poder, edad )

function impimeHeroe ({ nombre, apellido, poder, edad = 0 }) {
    console.log(nombre, apellido, poder, edad )
}
//mpimeHeroe(deadpool)

const heroes = ['Deadpool', 'Superman','Batman'];
const [h1, h2, h3] = heroes;
console.log(h1, h2, h3)