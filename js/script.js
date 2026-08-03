// =========================
// BOTÓN ABRIR INVITACIÓN
// =========================

const botonAbrir = document.getElementById("abrirInvitacion");

if (botonAbrir) {

    botonAbrir.addEventListener("click", () => {

        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

    });

}


// =========================
// CONTADOR XV AÑOS
// =========================

const fechaEvento = new Date("September 26, 2026 18:00:00").getTime();


const contador = setInterval(() => {


    const ahora = new Date().getTime();

    const distancia = fechaEvento - ahora;


    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const segundos = Math.floor(
        (distancia % (1000 * 60)) /
        1000
    );


    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;


    if (distancia < 0) {

        clearInterval(contador);

        document.getElementById("contador").innerHTML =
        "¡Hoy es el gran día!";

    }


}, 1000);

// =========================
// MÚSICA DE FONDO
// =========================

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");

if (musica && botonMusica) {

    let reproduciendo = false;

    botonMusica.addEventListener("click", () => {

        if (reproduciendo) {

            musica.pause();
            reproduciendo = false;
            botonMusica.innerHTML = '<i class="fa-solid fa-music"></i>';

        } else {

            musica.play();
            reproduciendo = true;
            botonMusica.innerHTML = '<i class="fa-solid fa-pause"></i>';

        }

    });

}
