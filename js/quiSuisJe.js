let personnagesData = []; // Déclaration globale

fetch("../data/personnages.json")
    .then((response) => response.json())
    .then((data) => {
        personnagesData = data; // On stocke les données globalement
        afficherPersonnage(personnagesData); // Première génération
    })
    .catch((error) =>
        console.error("Erreur lors du chargement des données :", error)
    );

function afficherPersonnage(personnages) {
    const perso = personnages[Math.floor(Math.random() * personnages.length)];

    document.getElementById("nom-personnage").textContent = perso.nom;
    document.getElementById("desc-personnage").textContent = perso.description;
    document.getElementById(
        "ref-personnage"
    ).innerHTML = `<i>${perso.reference}</i>`;
    document.getElementById(
        "diff-personnage"
    ).innerHTML = `<strong>Difficulté :</strong> ${genererEtoiles(
        perso.difficulte
    )}`;
}

function genererEtoiles(difficulte) {
    let html = "";
    for (let i = 1; i <= 5; i++) {
        html += `<span class="etoile">${i <= difficulte ? "★" : "☆"}</span>`;
    }
    return html;
}

document.getElementById("nouveau-personnage").addEventListener("click", () => {
    afficherPersonnage(personnagesData);
});
