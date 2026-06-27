const usuarios = [
    {
        username: "admin",
        password: "123",
        rol: "administrador"
    },
    {
        username: "evaluador1",
        password: "1234",
        rol: "evaluador"
    },
    {
        username: "jsanidad",
        password: "1234",
        rol: "Jefe Sanidad"
    },
];

const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usuarioEncontrado = usuarios.find(function(user) {

        return user.username === usuario &&
               user.password === password;

    });

     if (usuarioEncontrado) {

        alert("Inicio de sesión exitoso");

        console.log(usuarioEncontrado);

        // GUARDAR USUARIO EN LOCALSTORAGE
        localStorage.setItem(
            "usuario",
            JSON.stringify(usuarioEncontrado)
        );

        // REDIRECCIONES POR ROL
        if(usuarioEncontrado.rol === "evaluador"){

            window.location.href = "pages/monitoreo.html";

        } else if(usuarioEncontrado.rol === "administrador") {

            window.location.href = "pages/admin.html";

        } else if(usuarioEncontrado.rol === "Jefe Sanidad") {

            window.location.href = "pages/dashboard.html";

        }

    } else {

        alert("Usuario o contraseña incorrectos");

    }
    formulario.reset();

});

