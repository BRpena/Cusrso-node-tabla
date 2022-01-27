const empleados = [
    {id:1,
    nombre:'Brandon'},
    {id:2,
    nombre:'Alejandro'},
    {id:3,
    nombre: 'Ricardo'}
]

const salario = [
    {id:1,
    salario:1000},
    {id:2,
    salario:1500}
]

const getEmpleado = (id)=>{

    const promesa = new Promise((resolve,reject)=>{
        const empleado = empleados.find((e)=>  e.id === id)?.nombre
        if(empleado){
            resolve(empleado)
        }else{
            reject(`No exite empleado con id ${id} `)
        }
    })
    return promesa
}

const getSalario = (id)=>{

    const promise = new Promise ((resolve, reject)=>{
        const salarios = salario.find(s => s.id===id)?.salario
        if(salarios){
            resolve(salarios)
        }else{
            reject(`NO existe salario para empleado con id ${id}`)
        }
    })
    return promise
}

const id= 3

//getEmpleado(id)
    //.then(empleado => console.log(empleado))
    //.catch(err => console.log(err))

//getSalario(id)
    //.then(salario => console.log(salario))
    //.catch(err => console.log(err))
let nombre;
getEmpleado(id)
    .then(empleado=> {
        nombre=empleado;
        return getSalario(id)
    })
    .then(salario=> console.log('El empleado con el nombre:', nombre,'tiene un salario de:', salario))
    .catch(err=> console.log(err))