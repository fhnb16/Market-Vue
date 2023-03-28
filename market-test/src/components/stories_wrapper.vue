<script type="text/javascript" setup>
import StoriesItem from "./stories_item.vue";
import StoriesView from "./stories_view2.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const stories = computed(() => {
  return store.state.stories;
});

const overflowState = computed(() => {
  return store.state.modalVisible || store.state.activeStory != -1;
});

const selectStory = function (index) {
  store.dispatch("setViewedStory", index);
  store.dispatch("setActiveStory", index);
};
</script>

<template>
  <div
    class="stories_wrapper"
    v-bind:class="overflowState ? 'hideOverlay' : ''"
  >
    <StoriesItem
      v-for="(story, index) in stories"
      :key="'story-' + index"
      v-bind:story="story"
      v-on:click="selectStory(index)"
    />
    <StoriesView v-bind:stories="stories" />
  </div>
</template>

<style scoped type="text/css">
/*////////////////////
        stories
////////////////////*/

.stories_wrapper {
  width: 100%;
  display: block;
  overflow: auto;
  overflow: overlay;
  white-space: nowrap;
  padding-bottom: 6px;
  display: inline-block;
  text-align: center;
}

.stories_wrapper.hideOverlay {
  overflow: hidden;
}
</style>
