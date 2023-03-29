export async function getCursos(){
    const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
    const resultado = await respuesta.json()
    return resultado
}

