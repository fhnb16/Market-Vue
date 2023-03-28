<script type="text/javascript" setup>
import { onBeforeMount, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";

import StoriesWrapper from "../components/stories_wrapper.vue";
import Button from "../components/button_component.vue";
import Section from "../components/section_component.vue";
import ModalContact from "../components/modal_contact_component.vue";
import NavMenu from "../components/navMenu_component.vue";

const store = useStore();
/*const getContent = computed(() => {
  return store.getters.getContent;
});
const getStories = computed(() => {
  return store.getters.getStories;
});*/
const content = computed(() => {
  return store.state.content;
});
const stories = computed(() => {
  return store.state.stories;
});
const modalVisible = computed(() => {
  return store.state.modalVisible;
});
const activeStory = computed(() => {
  return store.state.activeStory;
});
onBeforeMount(() => {
  store.dispatch("fetchContent");
});
onMounted(() => {
  console.clear();
});
const overflowState = computed(() => {
  return store.state.modalVisible || store.state.activeStory != -1;
});

watch(overflowState, (value) => {
  if (value) {
    document.body.classList.add("overflow-disable");
  } else {
    document.body.classList.remove("overflow-disable");
  }
});
</script>

<template>
  <div class="app-wrapper" id="app-wrapper">
    <h1 class="logo">
      {{ content["appTitle"] }}
    </h1>
    <StoriesWrapper v-bind:stories="stories" />
    <Button
      class="button-arrow center"
      v-on:click="store.dispatch('setModalVisibility', true)"
    >
      {{ content.mainPageButton["buttonText"] }}
    </Button>
    <div class="sections">
      <Section
        v-for="(section, index) in content.sections"
        :key="'section-' + index"
        v-bind:section="section"
        v-bind:index="index"
      />
    </div>
    <span class="break"></span>
    <NavMenu />
    <ModalContact />
    <div
      class="background-blur"
      v-if="modalVisible || activeStory != -1"
      v-on:click="
        store.dispatch('setActiveStory', -1);
        store.dispatch('setModalVisibility', false);
      "
    ></div>
  </div>
</template>

<style type="text/css">
/*////////////////////
        basics
////////////////////*/

.app-wrapper {
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
}

body.overflow-disable {
  overflow: hidden;
}

svg {
  pointer-events: none;
}

.background-blur {
  position: fixed;
  inset: 0;
  background: rgba(9, 9, 9, 0.6);
  backdrop-filter: blur(1px);
  -moz-backdrop-filter: blur(1px);
  z-index: 6;
}

h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  font-family: var(--text-font-rich), sans-serif;
  color: var(--color-black);
  margin-top: 24px;
  margin-bottom: 28px;
  margin-left: 20px;
}

h2 {
  display: inline-flex;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  font-family: var(--text-font-rich), sans-serif;
  color: var(--color-black);
  margin-top: 26px;
  margin-bottom: 28px;
}

span.break {
  display: inline-block;
}

span.break:before {
  content: "";
  width: 100%;
  height: 64px;
  display: inline-block;
  background: red;
}

/*////////////////////
        sections
////////////////////*/

.sections {
  display: flex;
  flex-direction: column;
}

/*////////////////////
  media screen width
////////////////////*/

@media (min-width: 1200px) {
  .sections {
    display: flex;
    flex-direction: row;
  }
  .logo {
    transition: var(--transition-default);
    text-align: center;
    font-size: 32px;
  }
}
</style>
