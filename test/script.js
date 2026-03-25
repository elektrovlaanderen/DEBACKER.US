document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LEAFLET MAP INSTELLEN ---
    const mapElement = document.getElementById('map');
    if (mapElement) {
        const map = L.map('map').setView([51.1691, 4.1481], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker([51.1691, 4.1481]).addTo(map)
            .bindPopup('<b>Snapwithus360</b><br>Vijfstraten 163<br>9100 Sint-Niklaas')
            .openPopup();
    }

    // --- 2. TAAL KEUZE POPUP LOGICA ---
    const languageModal = document.getElementById('languageModal');
    const btnLangNL = document.getElementById('btnLangNL');
    const btnLangEN = document.getElementById('btnLangEN');

    const currentLanguage = localStorage.getItem('preferredLanguage');

    if (!currentLanguage) {
        languageModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    }

    function setLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
        languageModal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }

    if (btnLangNL) btnLangNL.addEventListener('click', () => setLanguage('nl'));
    if (btnLangEN) btnLangEN.addEventListener('click', () => setLanguage('en'));


    // --- 3. COOKIE BANNER LOGICA ---
    const cookieBanner = document.getElementById('cookieBanner');
    const btnAcceptCookies = document.getElementById('btnAcceptCookies');
    const btnDeclineCookies = document.getElementById('btnDeclineCookies');

    const cookieConsent = localStorage.getItem('cookieConsent');

    if (!cookieConsent) {
        setTimeout(() => {
            cookieBanner.classList.remove('translate-y-full');
        }, 1000);
    }

    function handleCookie(status) {
        localStorage.setItem('cookieConsent', status);
        cookieBanner.classList.add('translate-y-full'); 
    }

    if (btnAcceptCookies) btnAcceptCookies.addEventListener('click', () => handleCookie('accepted'));
    if (btnDeclineCookies) btnDeclineCookies.addEventListener('click', () => handleCookie('declined'));

});