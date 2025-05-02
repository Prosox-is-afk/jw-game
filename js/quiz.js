let quiz = [];
let index = 0;

const questionEl = document.getElementById("question-container");
const resultatEl = document.getElementById("resultat");
const explicationEl = document.getElementById("explication");
const boutonSuivant = document.getElementById("btn-suivant");

fetch("../data/quiz.json")
    .then((res) => res.json())
    .then((data) => {
        quiz = data;
        melangerTableau(quiz); // Mélange des questions
        afficherQuestion();
    });

function melangerTableau(tableau) {
    for (let i = tableau.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
}

function afficherQuestion() {
    const current = quiz[index];
    questionEl.textContent = current.question;
    resultatEl.textContent = "";
    explicationEl.textContent = "";
    boutonSuivant.classList.add("d-none");
    document.getElementById("reponses").classList.remove("d-none");
}

function verifierReponse(reponseUtilisateur) {
    const current = quiz[index];
    const juste =
        current.reponse.toLowerCase() === reponseUtilisateur.toLowerCase();

    resultatEl.textContent = juste
        ? "✅ Bonne réponse !"
        : "❌ Mauvaise réponse.";
    resultatEl.style.color = juste ? "limegreen" : "crimson";
    explicationEl.textContent = current.explication;

    document.getElementById("reponses").classList.add("d-none");
    boutonSuivant.classList.remove("d-none");
}

boutonSuivant.addEventListener("click", () => {
    index = (index + 1) % quiz.length;
    afficherQuestion();
});
