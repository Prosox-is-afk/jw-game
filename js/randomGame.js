function redirectToRandomPage() {
    const pages = [
        "pages/qui-suis-je.html",
        "pages/image-perso.html",
        "pages/quiz.html",
    ];
    const randomIndex = Math.floor(Math.random() * pages.length);
    window.location.href = pages[randomIndex];
}
