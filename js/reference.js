let data = [];
let index = 0;
let isFlipped = false;

fetch("../data/reference.json")
    .then((res) => res.json())
    .then((json) => {
        data = json;
        melangerTableau(data);
        afficherVerset();
    });

function melangerTableau(tableau) {
    for (let i = tableau.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
}

function afficherVerset() {
    const carte = document.querySelector(".carte");
    const recto = document.getElementById("contenu-recto");
    const verso = document.getElementById("contenu-verso");

    // Cacher temporairement les contenus
    recto.textContent = "";
    verso.textContent = "";

    // Forcer le retour à l'état "non flip"
    carte.classList.remove("flip");
    isFlipped = false;

    // Attendre la fin de l’animation pour afficher le nouveau contenu (300ms)
    setTimeout(() => {
        const item = data[index];
        const showReferenceFirst = Math.random() < 0.5;

        if (showReferenceFirst) {
            recto.textContent = item.reference;
            verso.textContent = item.text;
        } else {
            recto.textContent = item.text;
            verso.textContent = item.reference;
        }
    }, 300);
}

document.getElementById("carte-verset").addEventListener("click", () => {
    document.querySelector(".carte").classList.toggle("flip");
    isFlipped = !isFlipped;
});

document.getElementById("suivant").addEventListener("click", () => {
    index = (index + 1) % data.length;
    afficherVerset();
});
