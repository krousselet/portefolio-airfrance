<template>
  <div class="container-child">
  <select v-model="locale" @change="changeLang">
    <option value="en">English</option>
    <option value="fr">Français</option>
  </select>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLang = () => {
  localStorage.setItem('lang', locale.value);
};
</script>

<style scoped>
select {
  position: absolute;
  left: 15px;
  top: 150px;
  padding: 5px;
  border-radius: 5px;
  background: white;
  z-index: 1001;
}
</style>
