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

const getEmpleado = (id, callback)=>{

    const empleado = empleados.find((e)=>  e.id === id)?.nombre
    if(empleado){
        callback(null, empleado)
    }else{
        callback(`Èmpleado con el id ${id} no existe`)
    }
}

const getSalario = (id, callback)=>{
    const salarios = salario.find(s => s.id===id)?.salario
    if (salarios){
        callback(null, salarios)
    }else{
        callback(`Empleado con el id ${id} NO existe`)
    }

}

getEmpleado(1,(err,empleado)=>{
    if (err){
        console.log('Error!')
        return console.log(err)
    }
    console.log('Empleado existe')
    console.log(empleado.nombre)
})

getSalario(1,(err,salario)=>{
    if(err){
        console.log('Error!')
        return(console.log(err))
    }
    console.log(salario)
})