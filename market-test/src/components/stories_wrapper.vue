<script type="text/javascript" setup>
import StoriesItem from "./stories_item.vue";
import StoriesView from "./stories_view.vue";
import { mapActions } from "vuex";
</script>

<template>
  <div class="stories_wrapper">
    <StoriesItem
      v-for="(story, index) in stories"
      :key="'story-' + index"
      v-bind:story="story"
      v-on:click="selectStory(index)"
    />
    <StoriesView v-bind:stories="stories" />
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    stories: Array,
  },
  methods: {
    ...mapActions(["setActiveStory", "setViewedStory"]),
    selectStory(index) {
      this.setViewedStory(index);
      this.setActiveStory(index);
    },
  },
};
</script>

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
</style>
