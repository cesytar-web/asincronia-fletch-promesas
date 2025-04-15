let users = [];

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    users = response.data; 

//lista de usuarios
    console.log("Todos los usuarios:");
    console.log(users);

//nombre de los usuarios
    console.log("Solo los nombres:");
    users.forEach(user => {
      console.log(user.name);
    });
  })
  
  .catch(function(error) {
    console.error("Error al obtener usuarios:", error);
  });


function mostrarUsuarios() {
  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = ""; 

  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    lista.appendChild(li);
  });
}
