const dropZone = document.querySelector('.drop-zone');
const fileInput = dropZone.querySelector('input[type="file"]');

// Simuler le clic sur l'input caché
dropZone.addEventListener('click', () => fileInput.click());

// Afficher le nom du fichier quand il est choisi
fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        dropZone.querySelector('p').innerText = `Fichier sélectionné : ${fileName}`;
        dropZone.style.borderColor = "#2e9df7"; // Feedback visuel bleu
    }
});