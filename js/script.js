// =========================
// ELEMENTOS
// =========================

const botonAbrir = document.getElementById("abrirInvitacion");
const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");

let reproduciendo = false;


// =========================
// ABRIR INVITACIÓN
// =========================

if (botonAbrir) {

    botonAbrir.addEventListener("click", () => {

        if (musica && !reproduciendo) {

            musica.play().then(() => {

                reproduciendo = true;

                if (botonMusica) {
                    botonMusica.innerHTML =
                    '<i class="fa-solid fa-pause"></i>';
                }

            }).catch(() => {});

        }

        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

    });

}


// =========================
// BOTÓN DE MÚSICA
// =========================

if (musica && botonMusica) {

    botonMusica.addEventListener("click", () => {

        if (reproduciendo) {

            musica.pause();
            reproduciendo = false;

            botonMusica.innerHTML =
            '<i class="fa-solid fa-music"></i>';

        } else {

            musica.play().then(() => {

                reproduciendo = true;

                botonMusica.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

            }).catch(() => {});

        }

    });

}


// =========================
// CONTADOR
// =========================

const fechaEvento = new Date("September 26, 2026 18:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    if (distancia <= 0) {

        document.getElementById("contador").innerHTML =
        "<h2>¡Hoy es el gran día!</h2>";

        return;

    }

    document.getElementById("dias").textContent =
        Math.floor(distancia / (1000 * 60 * 60 * 24));

    document.getElementById("horas").textContent =
        Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutos").textContent =
        Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("segundos").textContent =
        Math.floor((distancia % (1000 * 60)) / 1000);

}, 1000);
