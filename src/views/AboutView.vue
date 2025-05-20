<template>
  <main>
    <div class="title-container appear">
      <h2>{{ $t('hello') }}</h2>
    </div>
  </main>
</template>

<style scoped lang="scss">
  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    @media (min-width:551px) {
      margin-top: 200px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    div {
      opacity: 0;
    }
  }
</style>