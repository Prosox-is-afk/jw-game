```markdown
# 📖 JW Games

**JW Games** est une collection interactive de mini-jeux bibliques destinés à aider à mémoriser, apprendre et approfondir les récits et versets de la Bible, d'une manière ludique et moderne.  
Ce projet est entièrement développé en **HTML**, **CSS (Bootstrap + personnalisé)** et **JavaScript** classique, sans framework.

---

## 🚀 Aperçu des jeux

### 🎭 Qui suis-je ?

Un personnage biblique est tiré au sort. Un joueur doit le faire deviner aux autres uniquement par des réponses **oui / non**.  
Chaque personnage inclut : nom, description, référence biblique, et un niveau de difficulté (étoiles de 1 à 5).

### 📖 Référence

Un verset ou une référence est affiché sur une carte. En cliquant, elle se retourne pour révéler l’autre côté. Le but : **mémoriser les versets bibliques**.

### 🧠 Portrait

Une image générée par IA d’un personnage s’affiche. Le joueur doit deviner de qui il s’agit en **3 tentatives** :

1. Sans aide
2. Nombre de lettres (\_ \_ \_ \_)
3. Initiale du prénom

### ❓ Quiz Vrai/Faux

Un quiz de type **vrai ou faux**, avec explication détaillée après chaque réponse.  
Les questions sont **tirées aléatoirement** d'une base JSON et couvrent des faits bibliques.

### 🕰️ Timeline _(à venir)_

Une **frise chronologique verticale interactive** mêlant événements bibliques et faits historiques profanes, pour visualiser l’histoire dans son contexte.

---

## 🗂️ Structure du projet
```

JW-Games/
│
├── assets/ # Images, icônes, logos
├── css/
│ └── style.css # Style personnalisé global
├── data/
│ ├── personnages.json # Données "Qui suis-je ?"
│ ├── reference.json # Données versets & références
│ ├── quiz.json # Données du quiz
├── js/
│ ├── quiz.js # Logique du quiz
│ ├── quiSuisJe.js # Logique "Qui suis-je ?"
│ ├── reference.js # Logique verset/référence
├── pages/
│ ├── qui-suis-je.html
│ ├── reference.html
│ ├── quiz.html
│ ├── portrait.html
│ ├── ...-intro.html # Pages d’introduction des jeux
│ └── ...
├── index.html # Page d'accueil
└── README.md

```

---

## 📌 Technologies utilisées

- HTML5 / CSS3
- Bootstrap 5
- JavaScript Vanilla
- JSON (pour les données)
- Font Awesome

---

## 🛠️ À venir

- Frise chronologique complète
- Système de points ou scores (optionnel)
- Mode multijoueur local ou en ligne (étude en cours)
- Ajout progressif de versets, personnages et quiz

---

## 🧑‍💻 Développeur

Projet développé par **Pierre Burnier** (2025)
📬 Contact : https://pierreburnier.dev

---

## 📜 Remerciements

Les versets bibliques proviennent de la **Traduction du monde nouveau (JW.org)**.
Ce projet n’est pas affilié officiellement à l’organisation des Témoins de Jéhovah, mais a été conçu pour l’étude personnelle ou en petit groupe.

---

## 📄 Licence

Ce projet est open-source. Usage personnel ou communautaire libre, mais toute revente est interdite.
```
