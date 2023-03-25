<script type="text/javascript" setup>
import StoriesItem from "./stories_item.vue";
import StoriesView from "./stories_view.vue";
</script>

<template>
  <div class="stories_wrapper">
    <StoriesItem />
    <StoriesView />
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
</style>
