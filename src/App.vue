<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">

*, ::before, ::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes fromLeftToRight {
  100% {
    left: 0;
  }
}

.appear {
  animation: appear 3s .1s ease-in-out forwards;
}

.fromLeftToRight {
  position: relative;
  left: -100vw;
  animation: fromLeftToRight 2s .2s ease-in-out forwards
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
