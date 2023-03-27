<script type="text/javascript" setup>
import Button from "./button_component.vue";
</script>

<template>
  <section>
    <h2>
      <span class="section-number"> {{ index + 1 }} </span>
      {{ section["sectionText"] }}
    </h2>
    <div class="section-wrapper">
      <img v-bind:src="section.sectionImage" class="section-wrapper-img" />
      <Button class="section-round">
        {{ section["sectionText"] }}
      </Button>
    </div>
  </section>
</template>

<script type="text/javascript">
export default {
  props: {
    section: Object,
    index: Number,
  },
};
</script>

<style scoped type="text/css">
/*////////////////////
        section
////////////////////*/

section {
  max-width: 420px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 6px;
}

section .section-number {
  font-family: var(--text-font-monospace), monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  color: var(--color-white);
  background-color: var(--color-black);
  width: 24px;
  height: 24px;
  padding: 2px 6px 3px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  text-align: center;
  margin-right: 14px;
}

section .section-wrapper {
  position: relative;
  margin: 0 auto;
  border-radius: 26px;
  width: 335px;
}

section .section-wrapper .section-wrapper-img {
  width: 100%;
  height: 338px;
  border-radius: 24px;
  object-fit: cover;
  background-color: var(--color-purple-light);
}

section .section-wrapper .button {
  margin: 0 auto;
  left: 20px;
  right: 20px;
  bottom: 20px;
  position: absolute;
}

/*////////////////////
  media screen width
////////////////////*/

@media (min-width: 1200px) {
  section .section-wrapper {
    width: 338px;
  }
}

@media (max-width: 375px) {
  section .section-wrapper {
    width: unset;
  }
}
</style>
