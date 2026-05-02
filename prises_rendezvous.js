    // --- CONFIGURATION DES HORAIRES ---
    const planning = {
        0: "Fermé", // Dimanche
        1: "8h - 17h", // Lundi
        2: "8h - 17h", // Mardi
        3: "9h - 15h", // Mercredi
        4: "8h - 17h", // Jeudi
        5: "8h - 17h", // Vendredi
        6: "10h - 13h" // Samedi
    };
    const nomsJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    // --- LOGIQUE DISPONIBILITÉ ---
    function setupAvailability() {
        const now = new Date();
        const jourIndex = now.getDay();
        const box = document.getElementById('availabilityBox');

        document.getElementById('todayLabel').innerHTML = `Aujourd'hui : <b>${planning[jourIndex]}</b>`;

        let listHtml = "";
        nomsJours.forEach((nom, index) => {
            const isToday = index === jourIndex ? "style='color:var(--primary-blue); font-weight:bold;'" : "";
            listHtml += `<div class="day-row" ${isToday}><span>${nom}</span> <span>${planning[index]}</span></div>`;
        });
        document.getElementById('weeklyList').innerHTML = listHtml;

        box.addEventListener('click', () => box.classList.toggle('open'));
    }

    // --- LOGIQUE CALENDRIER ---
    let viewDate = new Date(2026, 3, 1); // Fixé à Avril 2026 pour correspondre à ton image
    let selectedDay = 7;

    function drawCalendar() {
        const grid = document.getElementById('gridDisplay');
        const monthYear = document.getElementById('monthDisplay');
        const monthsFr = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

        monthYear.innerText = `${monthsFr[viewDate.getMonth()]} ${viewDate.getFullYear()}`;
        grid.innerHTML = `<div class="day-label">Lu</div><div class="day-label">Ma</div><div class="day-label">Me</div><div class="day-label">Je</div><div class="day-label">Ve</div><div class="day-label">Sa</div><div class="day-label">Di</div>`;

        const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();
        const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();

        // Décalage pour commencer le lundi (JS: 0=Dim, 1=Lun...)
        const offset = (firstDay === 0) ? 6 : firstDay - 1;

        for (let i = 0; i < offset; i++) {
            grid.innerHTML += `<div class="calendar-day empty"></div>`;
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isActive = (day === selectedDay) ? 'active' : '';
            grid.innerHTML += `<div class="calendar-day ${isActive}" onclick="handleDayClick(this, ${day})">${day}</div>`;
        }
    }

    function handleDayClick(el, day) {
        document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active'));
        el.classList.add('active');
        selectedDay = day;
    }

    function moveMonth(step) {
        viewDate.setMonth(viewDate.getMonth() + step);
        selectedDay = null;
        drawCalendar();
    }

    // --- INITIALISATION ---
    document.getElementById('btnConfirm').addEventListener('click', () => {
        if (!selectedDay) return alert("Choisissez une date !");
        alert(`Demande envoyée pour le ${selectedDay} ${document.getElementById('monthDisplay').innerText}`);
    });

    setupAvailability();
    drawCalendar();