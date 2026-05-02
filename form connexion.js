document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const btn = document.querySelector('.btn-login');

    // 1. Petite animation de chargement
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Connexion...';
    btn.style.opacity = "0.7";

    // 2. Simulation d'une vérification (Backend factice)
    setTimeout(() => {
        if (email === "test@omnisoin.com" && password === "12345678") {
            alert("Connexion réussie ! Bienvenue sur OmniSoin.");

            // 3. Redirection (On imagine que ta page principale est index.html)
            // window.location.href = "page_principale.html"; 

            // Ou on cache simplement le login pour montrer le reste
            document.querySelector('.login-container').style.display = 'none';
            // document.querySelector('.hero-section').style.display = 'block'; 

        } else {
            alert("Erreur : Email ou mot de passe incorrect.");
            btn.innerHTML = "Connexion";
            btn.style.opacity = "1";
        }
    }, 1500);
});

// Gestion du bouton "Mots de passe oublié"
document.querySelector('.forgot-link').addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt("Entrez votre email pour recevoir un lien de récupération :");
    if (email) alert("Un lien a été envoyé à : " + email);
});