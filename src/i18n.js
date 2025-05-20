// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    home: 'Home',
    about: 'About',
    slogan: 'Aiming for excellence',
    toggleDark: 'Dark Mode',
    hello: 'Hello',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    slogan: 'Viser l\'excellence',
    toggleDark: 'Mode Sombre',
    hello: 'Bonjour',
  }
};

const i18n = createI18n({
  legacy: false, // Composition API
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages
});

export default i18n;
