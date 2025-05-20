// src/i18n.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    // NAV
    home: "Home",
    about: "About",
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
  },
};

const i18n = createI18n({
  legacy: false, // Composition API
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
