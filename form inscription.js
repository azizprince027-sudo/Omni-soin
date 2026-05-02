    const dropZones = document.querySelectorAll('.drop-zone');

    dropZones.forEach(zone => {
        const input = zone.querySelector('input');

        zone.addEventListener('click', () => input.click());

        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.style.borderColor = "#52e0a1";
            zone.style.background = "#eefaf5";
        });

        zone.addEventListener('dragleave', () => {
            zone.style.borderColor = "transparent";
            zone.style.background = "#e9eff1";
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileUpload(zone, files[0]);
            }
        });

        input.addEventListener('change', () => {
            if (input.files.length > 0) {
                handleFileUpload(zone, input.files[0]);
            }
        });
    });

    function handleFileUpload(zone, file) {
        if (file.type !== "application/pdf") {
            alert("Seuls les fichiers PDF sont acceptés !");
            return;
        }
        // Affichage du nom du fichier dans la zone
        zone.innerHTML = `<i class="fa-solid fa-file-pdf" style="font-size:2rem; color:#e74c3c"></i>
                        <p style="color:#27ae60; font-weight:bold;">${file.name}</p>
                        <span>Fichier prêt à l'envoi</span>`;
    }