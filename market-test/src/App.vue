<script>
import MainPage from "./views/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<template>
  <MainPage />
</template>

<style lang="scss" type="text/css">
* {
  box-sizing: border-box;
  color: inherit;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: default;
  outline: inherit;
  text-decoration: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
*,
::after,
::before {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  height: 12px;
  width: 12px;
  z-index: 8;
  background: transparent;
  overflow: visible;
}
::-webkit-scrollbar-track,
::-webkit-scrollbar-button {
  display: none;
}
::-webkit-scrollbar-corner {
  background: rgb(67, 73, 83);
}
::-webkit-scrollbar-thumb {
  width: 4px;
  min-height: 32px;
  z-index: 8;
  background-image: none;
  background-color: rgba(67, 73, 83, 0.6);
  background-clip: padding-box;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  border-radius: 10px;
  transition: background-color 0.32s ease-in-out 0s;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(67, 73, 83, 0.9);
}
::-webkit-scrollbar-track,
::-webkit-scrollbar-button {
  display: none;
}
:root {
  --text-font-rich: "ALS Gorizont Variable";
  --text-font-monospace: "Space Mono";
  --transition-default: all 100ms ease-out;
  --color-blue: #1f75fe;
  --color-gray: #c4c8cc;
  --color-black: #000000;
  --color-white: #ffffff;
  --color-gray-light: #f9f9f9;
  --color-gray-dark: #e0e0e0;
  --color-purple: #dcbef0;
  --color-purple-light: #ccd3ff;
}

/*@font-face {
  font-family: "ALS Gorizont Variable";
  src: url("https://dev.fhnb.ru/assets/?page=view&dir=Fonts&name=ALSGorizontGX.ttf");
}*/

/*@font-face {
  font-family: "Space Mono";
  src: url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");
}*/

/*@font-face {
  font-family: "ALS Gorizont Variable";
  src: url(https://db.onlinewebfonts.com/c/51148dedef2c8ef3ba08d21f3cc7bb06?family=ALS+Gorizont+Variable)
    format("woff");
}*/

/*@import url(https://db.onlinewebfonts.com/c/51148dedef2c8ef3ba08d21f3cc7bb06?family=ALS+Gorizont+Variable);*/

@font-face {
  font-family: "ALS Gorizont Variable";
  src: url("https://dev.fhnb.ru/assets/Fonts/ALSGorizontGX.ttf")
    format("truetype");
}

@import url(https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap);

#app {
}

body {
  touch-action: pan-x pan-y;
}
</style>
