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

const id=10;

const getInfoUsuario=async(id)=>{

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de ${salario}`;
    } catch (error) {
        throw error
    }
}

getInfoUsuario(id)
    .then(msg=>{
        console.log('TODO BIEN')
        console.log(msg)
    })
    .catch(err=>{
        console.log('TODO MAL')
        console.log(err)
    })