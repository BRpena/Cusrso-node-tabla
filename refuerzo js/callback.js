const getUsarioByID= (id, callback)=>{
    const usuario = {
        id,
        nombre:'Brandon'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500);
}
getUsarioByID(10, (usuario)=>{
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase())
})