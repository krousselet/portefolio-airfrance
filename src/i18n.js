// src/i18n.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    // NAV
    home: "Home",
    about: "About",
    apply: "Apply",
    contact: "Contact",
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
    // ABOUT PAGE
    formTitle: "Contact me",
    placeholderName: "Your name",
    placeholderEmail: "Your email",
    placeholderMessage: "Your message",
    formSend: "Send",
    formValidationText: "Your message has been sent",
  },
  fr: {
    // NAV
    home: "Accueil",
    about: "À propos",
    apply: "Postuler",
     contact: "Contacter",
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
    // ABOUT PAGE
    formTitle: "Contactez moi",
    placeholderName: "Votre nom",
    placeholderEmail: "Votre email",
    placeholderMessage: "Votre message",
    formSend: "Envoyer",
    formValidationText: "Votre message a bien été envoyé",
  },
  it: {
    // NAV
    home: "Home",
    about: "Chi sono",
    apply: "Candidatura",
    contact: "Contattare",
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
    // ABOUT PAGE
    formTitle: "Contattarmi",
    placeholderName: "Nome",
    placeholderEmail: "Mail",
    placeholderMessage: "Messagio",
    formSend: "Mandare",
    formValidationText: "Il messagio è partito",
  },

  es: {
    // NAV
    home: "Inicio",
    about: "Acerca de mí",
    apply: "Solicitud",
    contact: "Contactar",
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
    // ABOUT PAGE
    formTitle: "Contactar conmigo",
    placeholderName: "Nombre",
    placeholderEmail: "Correo electrónico",
    placeholderMessage: "Mensaje",
    formSend: "Mandar",
     formValidationText: "El mensaje fue enviado",
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
     ru: {
    // NAV
    home: "Главная",
    about: "О себе",
    apply: "Реэюме",
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
    // ABOUT PAGE
    formTitle: "Contactar conmigo",
    placeholderName: "Nombre",
    placeholderEmail: "Correo electrónico",
    placeholderMessage: "Mensaje",
    formSend: "отправля́ть",
     formValidationText: "El mensaje fue enviado",
  },
  ja: {
    // NAV
    home: "ホーム ",
    about: "概要",
    apply: "応募",
    contact: "Contactar",
    // SLOGAN
    slogan: "高みを目指して",
    toggleDark: "Modo oscuro",
    // ABOUT PAGE
    hello: "こんにちは",
    myself: "私はケビン。新品の翼を手に入れたばかりです。",
    data: "これまでの制作実績",
    amateur: " 初心者ですが、",
    determination: "空で自分の力を証明する準備はできています。",
    qualities: "正確さ、情熱、冷静、安全…",
    motivation: "すべてのフライトを成功させるために ",
    flightAttended: "運航された便",
    milesTravelled: "飛行距離s",
    hoursInFlight: "飛行時間",
    incidentEncountered: "遭遇したインシデント",
    countryDiscovered: "就航路線 ",
    // APPLY
    // ABOUT PAGE
    formTitle: "Contactar conmigo",
    placeholderName: "Nombre",
    placeholderEmail: "Correo electrónico",
    placeholderMessage: "Mensaje",
    formSend: "Mandar",
     formValidationText: "El mensaje fue enviado",
  },
};

const i18n = createI18n({
  legacy: false, // Composition API
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
