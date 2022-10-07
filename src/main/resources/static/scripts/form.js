//Recomendacion documento a parte con todas las URL
const URL_API = "/mascotas"

function get_data_form (evt) {
    // Indicar por medio del evento que no recargue página
    evt.preventDefault()
    //Con evt.target.nombre accedemos al elemento y a partir de ahí podemos acceder a su valor u otras cosas
    // para el valor es evt.target.nombre.value
    // evt.target es el formulario 
    // para evitar escribir tanto guardaremos ese codigo en una vartiable
    /* 
    const form = evt.target
    const nombre = form.nombre.value
    const apellido = form.apellido.value
    const raza = form.raza.value
    console.table({
        nombre, apellido, raza
    })

    console.log(document.getElementById(nombre_mascota))
    */
    //Vamos a hacerlo con un objeto para ser mejor
    const form = evt.target
    //los nombres de ese objeto deben ser igual a los del modelo de java
    // de esta forma nos ahorramos dolores de cabeza al enviarle esa info al server
    const mascota = {
        nombre_mascota: form.nombre_mascota.value,
        nombre_dueno: form.nombre_dueno.value,
        apellido_dueno: form.apellido_dueno.value,
        especie_mascota: form.especie_mascota.value,
        raza: form.raza.value,
        edad: form.edad.value,
        comentarios: form.comentarios.value
    }

    //Podemos llamar el nombre de las mascota por ejemplo con document.getElementById("nombre_mascota")
    
    //Nos vamos a tener ya este console.table 
    //console.table(mascota)


    create(mascota) 
    clear(form)

}

async function update (mascota) {
    // Enviar Peticion
    const resp = await fetch(URL_API, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mascota )
    })

    const text = await resp.text()
    //usamos un alert
    alert(text)
    window.location.href = "index.html"
}

async function create(mascota){
    // Enviar peticion
    const resp= await fetch(URL_API, {
        //por defecto el metodo es get por eso debemos indicarlo
        method: 'POST',
        //Vamos a indicar que enviará un objeto JSON
        headers: {
            'Content-Type': 'application/json'
        },
        //En el cuerpo enviaremos la mascota
        //convertimos el objeto mascota a JSON string
        body: JSON.stringify(mascota)
    })

    //Vamos a capturar lo que retorna el create del servidor
    //EN el servidor pusimos que cuando cree la mascota nos envia un texto
    //diciendo que mascota creada con éxito

    const text = await resp.text()
    //usamos un alert
    document.getElementById("mensaje_creado").innerText = text
    
}

function clear (form) {
    //con setAttribute primero pondremos el atributo y el segundo la acción o sea en este caso dejarlo vacio
    //document.getElementById("nombre_mascota").setAttribute("value", "")

    form.nombre_mascota.value = ""
    form.nombre_dueno.value = ""
    form.apellido_dueno.value = ""
    form.especie_mascota.value = ""
    form.raza.value = ""
    form.edad.value = ""
    form.comentarios.value = ""

}

