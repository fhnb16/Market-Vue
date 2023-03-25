<script type="text/javascript" setup></script>

<template>
  <div class="button">
    <slot />
  </div>
</template>

<style scoped type="text/css">
/*////////////////////
        buttons
////////////////////*/

.button {
  padding: 12px;
  font-family: var(--text-font-rich), sans-serif;
  background-color: var(--color-white);
  color: var(--color-black);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  max-width: 360px;
  width: calc(100% - 40px);
  margin: 6px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  position: relative;
  cursor: pointer;
}

.button,
.button *,
.button:after {
  transition: all 150ms ease-in-out;
}

.button.center {
  margin: 12px auto;
}

.button.section-round {
  padding: 16px;
  border-radius: 60px;
  text-align: center;
  margin: 0 auto;
}

.button.section-round:hover,
.button.section-round:active {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2),
    inset 0 0px 4px rgba(0, 0, 0, 0.2);
}

.button.section-round:active {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3), inset 0 0px 8px rgba(0, 0, 0, 0.3);
}

.button:hover,
.button:active {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}

.button:active {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.button.button-arrow {
  padding-right: 34px;
}

.button.button-arrow:after {
  content: "";
  position: absolute;
  width: 10px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'%3E%3Cpath d='M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' fill='rgba(0, 0, 0, 0.35)'/%3E%3C/svg%3E");
  right: 20px;
  top: calc(50% - 10px);
}

.button.button-arrow:hover:after {
  transform: translateX(4px);
}

.button.button-arrow:active:after {
  transform: translateX(-2px);
}
</style>
