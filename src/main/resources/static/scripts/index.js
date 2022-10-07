//Iniciamos el servidor con spring boot
//Dejamos la dirección con la ruta .
const URL_API = "/mascotas"
let ID_MASCOTA = -1

//con async indicamos que la función será asincrona 
// con await indicamos que parte del código debera ser escuchado hasta que de respuesta

async function get_mascotas () {
  // Enviar Petición
  const resp = await fetch(URL_API)
  // Obtener datos de la petición
  // Esto es para datos json, significa 
  // Que retorna un objeto y lo organizamos en json
  const mascotas = await resp.json()
  return mascotas
}

//Ahora falta mostrar las mascotas

function show(mascotas) {
  const tbody = document.getElementById("tbody")
  // Crearemos el string para concatenar codigo
  let tr_body = ""
  //Iterar mascotas
  for(let i = 0; i < mascotas.length; i++){
    const obj = mascotas[i] //Para evitar que el código quede muy extenso
    // COn &nbsp dejamos un espacio
    // Con onclick se dispara al hacer click , ahí haremos llamado a una funcion update
    // Html no reconoce objetos por eso debemos convertir el obj en un objeto con
    //JSON.stringify(obj)
    tr_body += `
    <tr>
      <td>${obj.id}</td>
      <td>${obj.nombre_mascota}</td>
      <td>${obj.nombre_dueno}</td>
      <td>${obj.apellido_dueno}</td>
      <td>${obj.especie_mascota}</td>
      <td>${obj.raza}</td>
      <td>${obj.edad}</td>
      <td>${obj.comentarios}</td>
      <td>
        <button class="btn btn-warning" onclick='update(${JSON.stringify(obj)})'>Actualizar</button>
        &nbsp;
        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='save_id(${obj.id})'>Eliminar</button>
      </td>
    </tr>
    `
  }

  //Insertaremos en donde tenga id tbody el tr_body
  tbody.innerHTML = tr_body
}

//Acá dejamos al almacenado el id en una variable global
//Y en el html llamamos delete mascota.
function save_id (id) {
  ID_MASCOTA = id
}

function update (mascota) {
  //con window hacemos referencia a la pantalla del navegador
  // con location tenemos idferentes formas
  //con href referenciamos
  //podemos enviar por ejemrplo form.html?nombre=andres&apellido=quintero
  //pero como es algo maluco de largo y manual
  //mejor pasamos todo el objeto
  localStorage.mascota = JSON.stringify(mascota);
  window.location.href = "updateForm.html"
}

async function delete_mascota () {
  // Enviar Peticion
  const resp = await fetch (`${URL_API}/${ID_MASCOTA}`, {
    method: 'DELETE'
  })

  const text = await resp.text()
  
  alert(text)
  main()
}


async function main() {
  //guardamos las mascotas
  const mascotas = await get_mascotas()
  show(mascotas)
}

main()