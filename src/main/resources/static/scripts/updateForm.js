const URL_API = "/mascotas"

if(localStorage.mascota) {
    const mascota = JSON.parse(localStorage.mascota);
    window.localStorage.removeItem('mascota');
    llenarCampos(mascota);
} else {
    alert("Usted no tiene mascota por actualizar");
    document.getElementById("form").innerHTML = "<h2>No ha seleccionado mascota para actualizar</h2>";
}


function llenarCampos(mascota) {
    const form = document.getElementById("form");
    localStorage.id = mascota.id;
    form.nombre_mascota.value = mascota.nombre_mascota;
    form.nombre_dueno.value = mascota.nombre_dueno;
    form.apellido_dueno.value = mascota.apellido_dueno;
    form.especie_mascota.value = mascota.especie_mascota;
    form.raza.value = mascota.raza;
    form.edad.value = mascota.edad;
    form.comentarios.value = mascota.comentarios;
}

function updateMascota(evt) {
    evt.preventDefault()
    const form = evt.target
    const datos = {
        id: localStorage.id,
        nombre_mascota: form.nombre_mascota.value,
        nombre_dueno: form.nombre_dueno.value,
        apellido_dueno: form.apellido_dueno.value,
        especie_mascota: form.especie_mascota.value,
        raza: form.raza.value,
        edad: form.edad.value,
        comentarios: form.comentarios.value
    }

    window.localStorage.removeItem("id");
    create(datos);
}

async function create(mascota){
    // Enviar peticion
    const resp= await fetch(URL_API, {
        //por defecto el metodo es get por eso debemos indicarlo
        method: 'PUT',
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

