function redirectToRandomPage() {
    const pages = [
        "pages/qui-suis-je-intro.html",
        "pages/reference-intro.html",
        "pages/quiz-intro.html",
    ];
    const randomIndex = Math.floor(Math.random() * pages.length);
    window.location.href = pages[randomIndex];
}
