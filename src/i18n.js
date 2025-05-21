// src/i18n.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    // NAV
    home: "Home",
    about: "About",
    apply: "Apply",
    // SLOGAN
    slogan: "Aiming for excellence",
    toggleDark: "Dark Mode",
    // ABOUT PAGE
    hello: "Hello",
    myself: "I am Kevin and my wings are brand new",
    data: "Service record",
    amateur: "Even though I am a novice",
    determination: "I am ready to prove myself in the sky",
    qualities: "Discipline, passion, cold-blood, safety...",
    motivation: "To make every flight a success",
    flightAttended: "Flights attended",
    milesTravelled: "Miles travelled",
    hoursInFlight: "Flight hours",
    incidentEncountered: "Incidents encountered",
    countryDiscovered: "Country Discovered",
  },
  fr: {
    // NAV
    home: "Accueil",
    about: "À propos",
    apply: "Postuler",
    // SLOGAN
    slogan: "Viser l'excellence",
    toggleDark: "Mode Sombre",
    // ABOUT PAGE
    hello: "Bonjour",
    myself: "Moi, c'est Kevin, et je viens d'avoir mes ailes",
    data: "Mes états de service",
    determination: "Je suis prêt à prouver ma valeur dans les airs",
    qualities: "Rigueur, passion, sang-froid, sécurité...",
    amateur: "Bien que je sois novice",
    motivation: "Pour faire de chaque vol un succès",
    flightAttended: "Vols effectués",
    milesTravelled: "Miles parcourues",
    hoursInFlight: "Heures de vol",
    incidentEncountered: "Incidents rencontrés",
    countryDiscovered: "Pays découverts",
    //APPLY
  },
  it: {
    // NAV
    home: "Home",
    about: "Chi sono",
    apply: "Candidatura",
    // SLOGAN
    slogan: "Puntare all'eccellenza",
    toggleDark: "Modalità scura",
    // ABOUT PAGE
    hello: "Ciao",
    myself: "Mi chiamo Kevin, e ho appena ottenuto le mie ali",
    data: "I miei dati di servizio",
    determination: "Sono pronto a dimostrare il mio valore in volo",
    qualities: "Rigore, passione, sangue freddo, sicurezza...",
    amateur: "Anche se sono un principiante",
    motivation: "Per rendere ogni volo un successo",
    flightAttended: "Voli effettuati",
    milesTravelled: "Miglia percorse",
    hoursInFlight: "Ore di volo",
    incidentEncountered: "Incidenti incontrati",
    countryDiscovered: "Paesi scoperti",
    // APPLY
  },

  es: {
    // NAV
    home: "Inicio",
    about: "Acerca de mí",
    apply: "Solicitud",
    // SLOGAN
    slogan: "Apuntar a la excelencia",
    toggleDark: "Modo oscuro",
    // ABOUT PAGE
    hello: "Hola",
    myself: "Me llamo Kevin y acabo de obtener mis alas",
    data: "Mis datos de servicio",
    determination: "Estoy listo para demostrar mi valía en el aire",
    qualities: "Rigor, pasión, sangre fría, seguridad...",
    amateur: "Aunque soy principiante",
    motivation: "Para hacer de cada vuelo un éxito",
    flightAttended: "Vuelos realizados",
    milesTravelled: "Millas recorridas",
    hoursInFlight: "Horas de vuelo",
    incidentEncountered: "Incidentes encontrados",
    countryDiscovered: "Países descubiertos",
    // APPLY
  },
   de: {
    // NAV
    home: "Startseite",
    about: "Über mich",
    apply: "Lebenslauf",
    // SLOGAN
    slogan: "Streben nach Spitzenleistung",
    toggleDark: "Modo oscuro",
    // ABOUT PAGE
    hello: "Hola",
    myself: "Me llamo Kevin y acabo de obtener mis alas",
    data: "Mis datos de servicio",
    determination: "Estoy listo para demostrar mi valía en el aire",
    qualities: "Rigor, pasión, sangre fría, seguridad...",
    amateur: "Aunque soy principiante",
    motivation: "Para hacer de cada vuelo un éxito",
    flightAttended: "Anzahl absolvierte Flüge",
    milesTravelled: "Zurückgelegte Flugmeilen",
    hoursInFlight: "Gesammelte Flugstunden",
    incidentEncountered: "Zwischenfälle",
    countryDiscovered: "Bereiste Länder",
    // APPLY
  },
};

const i18n = createI18n({
  legacy: false, // Composition API
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
