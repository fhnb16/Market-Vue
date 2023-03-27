<script type="text/javascript" setup>
import Button from "./button_component.vue";
import { computed, watch, watchEffect, onMounted } from "vue";
import { useStore, mapActions } from "vuex";
import { useTimer } from "vue-timer-hook";

const store = useStore();

const stories = computed(() => {
  return store.state.stories;
});
const activeStory = computed(() => {
  return store.state.activeStory;
});
const storyFit = computed(() => {
  if (
    store.state.stories[store.state.activeStory].storyMediaFit == undefined ||
    store.state.stories[store.state.activeStory].storyMediaFit == "" ||
    store.state.stories[store.state.activeStory].storyMediaFit == "cover"
  ) {
    return "cover";
  } else {
    return "contain; min-height:unset";
  }
});

const time = new Date();
time.setSeconds(time.getSeconds() + 5); // 5 seconds timer
const timer = useTimer(time, false);

watch(activeStory, (value) => {
  if (value >= store.state.stories.length) {
    store.state.activeStory = -1;
  }
  if (value != store.state.stories.length && value != -1) {
    const time = new Date();
    if (
      stories.value[activeStory.value].storyShowSeconds == undefined ||
      stories.value[activeStory.value].storyShowSeconds == "" ||
      stories.value[activeStory.value].storyShowSeconds == 0 ||
      stories.value[activeStory.value].storyShowSeconds == "0" ||
      stories.value[activeStory.value].storyShowSeconds == "-1" ||
      stories.value[activeStory.value].storyShowSeconds == -1
    ) {
      time.setSeconds(time.getSeconds() + 5);
    } else {
      time.setSeconds(
        time.getSeconds() + stories.value[activeStory.value].storyShowSeconds
      );
    }
    timer.restart(time);
  } else {
    timer.pause();
  }
});

onMounted(() => {
  watchEffect(async () => {
    if (timer.isExpired.value) {
      store.dispatch("setViewedStory", activeStory.value + 1);
      store.dispatch("setActiveStory", activeStory.value + 1);
    }
  });
});

function storyCounterProgress(index) {
  if (index > activeStory.value) {
    return "width: 0%";
  } else if (index < activeStory.value) {
    return "width: 100%";
  } else {
    if (
      stories.value[activeStory.value].storyShowSeconds == undefined ||
      stories.value[activeStory.value].storyShowSeconds == "" ||
      stories.value[activeStory.value].storyShowSeconds == 0 ||
      stories.value[activeStory.value].storyShowSeconds == "0" ||
      stories.value[activeStory.value].storyShowSeconds == "-1" ||
      stories.value[activeStory.value].storyShowSeconds == -1
    ) {
      let mapProgress = toPercents(5 + 0.3 - timer.seconds.value, 5);
      return "width: " + mapProgress + "%";
    } else {
      let mapProgress = toPercents(
        stories.value[activeStory.value].storyShowSeconds +
          0.3 -
          timer.seconds.value,
        stories.value[activeStory.value].storyShowSeconds
      );
      return "width: " + mapProgress + "%";
    }
  }
}

function toPercents(x, y) {
  return (x / y) * 100;
}
</script>

<template>
  <div
    class="stories-view-wrapper"
    v-if="activeStory >= 0 && activeStory < stories.length"
    v-bind:style="
      stories[activeStory].storyBackground != undefined ||
      stories[activeStory].storyBackground != ''
        ? 'background:' + stories[activeStory].storyBackground
        : ''
    "
  >
    <div class="stories-state">
      <div
        v-for="(counter, index) in stories"
        :key="'story-counter-' + index"
        class="stories-state-item"
      >
        <span v-bind:style="storyCounterProgress(index)"></span>
      </div>
    </div>
    <div class="modal-header">
      <span> {{ stories[activeStory].storyText }} </span>
      <div class="modal-close" v-on:click="setActiveStory(-1)">Close</div>
    </div>
    <div class="stories-item-content">
      <template
        v-if="
          stories[activeStory].storyMediaType == 'image' ||
          stories[activeStory].storyMediaType == undefined ||
          stories[activeStory].storyMediaType == ''
        "
      >
        <img
          v-bind:src="stories[activeStory].storyMedia"
          v-bind:style="'object-fit: ' + storyFit"
        />
      </template>
      <template v-if="stories[activeStory].storyMediaType == 'video'">
        <video
          v-bind:src="stories[activeStory].storyMedia"
          v-bind:style="'object-fit: ' + storyFit"
          autoplay
          loop
          playsinline
          webkit-playsinline
          v-bind:poster="
            stories[activeStory].storyMediaPoster != undefined
              ? stories[activeStory].storyMediaPoster
              : ''
          "
        />
      </template>
    </div>
    <div
      class="stories-navigate left"
      v-on:click="
        {
          if (activeStory - 1 !== -1) {
            store.dispatch('setViewedStory', activeStory - 1);
          }
          setActiveStory(activeStory - 1);
        }
      "
    ></div>
    <div
      class="stories-navigate right"
      v-on:click="
        {
          if (activeStory + 1 !== stories.length) {
            store.dispatch('setViewedStory', activeStory + 1);
          }
          setActiveStory(activeStory + 1);
        }
      "
    ></div>
    <div class="stories-item-button">
      <Button class="section-round button-on-top">
        {{ stories[activeStory].buttonText }}
      </Button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    story: Object,
  },
  methods: {
    ...mapActions(["setActiveStory"]),
  },
  computed: {},
};
</script>

<style scoped type="text/css">
/*////////////////////
     stories view
////////////////////*/

.stories-view-wrapper {
  position: fixed;
  inset: 0;
  background-color: rgba(128, 128, 128, 0.9);
  background-color: var(--color-purple);
  background: hsla(0, 0%, 50%, 0.9);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stories-view-wrapper .modal-header {
  margin-top: 16px;
  font-family: var(--text-font-rich), sans-serif;
  color: var(--color-white);
  display: flex;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 12;
}

.stories-view-wrapper .modal-header span {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  padding: 2px 4px;
  background: rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(12px);
  -moz-backdrop-filter: blur(12px);
  margin-left: 20px;
  border-radius: 4px;
  max-width: 75%;
  white-space: break-spaces;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.stories-view-wrapper .modal-header .modal-close {
  background-image: url("data:image/svg+xml,%0A%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 28C22.5647 28 28 22.5529 28 16C28 9.43529 22.5529 4 15.9882 4C9.43529 4 4 9.43529 4 16C4 22.5529 9.44706 28 16 28ZM12.0471 20.9412C11.5059 20.9412 11.0824 20.5059 11.0824 19.9647C11.0824 19.7059 11.1765 19.4588 11.3647 19.2824L14.6235 16.0118L11.3647 12.7529C11.1765 12.5647 11.0824 12.3294 11.0824 12.0706C11.0824 11.5176 11.5059 11.1059 12.0471 11.1059C12.3176 11.1059 12.5294 11.2 12.7176 11.3765L16 14.6471L19.3059 11.3647C19.5059 11.1647 19.7176 11.0824 19.9765 11.0824C20.5176 11.0824 20.9529 11.5059 20.9529 12.0471C20.9529 12.3176 20.8706 12.5294 20.6588 12.7412L17.3882 16.0118L20.6471 19.2706C20.8471 19.4471 20.9412 19.6941 20.9412 19.9647C20.9412 20.5059 20.5059 20.9412 19.9529 20.9412C19.6824 20.9412 19.4353 20.8471 19.2588 20.6588L16 17.3882L12.7529 20.6588C12.5647 20.8471 12.3176 20.9412 12.0471 20.9412Z' fill='%23ffffff' fill-opacity='0.6'/%3E%3C/svg%3E%0A");
  z-index: 12;
}

.stories-view-wrapper .modal-header .modal-close:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.stories-state {
  position: absolute;
  top: 0;
  padding-top: 20px;
  left: 0;
  padding-left: 20px;
  right: 0;
  padding-right: 20px;
  height: 4px;
  display: flex;
  height: 80px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 95.24%,
    rgba(0, 0, 0, 0) 95.24%
  );
}

.stories-state-item {
  background: rgba(255, 255, 255, 0.3);
  height: 4px;
  margin-left: 2px;
  margin-right: 2px;
  border-radius: 8px;
  flex: 1;
}

.stories-state-item > span {
  display: block;
  height: 100%;
  background-color: var(--color-white);
  position: relative;
  overflow: hidden;
  width: 0;
  border-radius: 6px;
  transition: all 1s ease;
}

.stories-item-content {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
}

.stories-item-content img,
.stories-item-content video {
  width: 100%;
  /*max-height: 448px;*/
  object-fit: contain;
  min-height: 100vh;
}

.stories-item-button {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 20px;
}

.button-on-top {
  z-index: 12;
}

.stories-navigate {
  z-index: 11;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  width: 45%;
}

.stories-navigate.left {
  left: 0;
  background: linear-gradient(90deg, #00000042 0%, #00000000 100%);
}

.stories-navigate.left:active {
  background: linear-gradient(90deg, #ffffff42 0%, #ffffff00 100%);
}

.stories-navigate.right {
  right: 0;
  background: linear-gradient(-90deg, #00000042 0%, #00000000 100%);
}

.stories-navigate.right:active {
  background: linear-gradient(-90deg, #ffffff42 0%, #ffffff00 100%);
}

/*////////////////////
        modal
////////////////////*/

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-contact .modal-header > h2 {
  margin: 24px;
  margin-bottom: 6px;
  margin-top: 24px;
}

.modal-close {
  color: transparent;
  font-size: 1px;
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 24px;
  margin: 24px;
  background-position: center;
  margin-top: 24px;
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%0A%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 28C22.5647 28 28 22.5529 28 16C28 9.43529 22.5529 4 15.9882 4C9.43529 4 4 9.43529 4 16C4 22.5529 9.44706 28 16 28ZM12.0471 20.9412C11.5059 20.9412 11.0824 20.5059 11.0824 19.9647C11.0824 19.7059 11.1765 19.4588 11.3647 19.2824L14.6235 16.0118L11.3647 12.7529C11.1765 12.5647 11.0824 12.3294 11.0824 12.0706C11.0824 11.5176 11.5059 11.1059 12.0471 11.1059C12.3176 11.1059 12.5294 11.2 12.7176 11.3765L16 14.6471L19.3059 11.3647C19.5059 11.1647 19.7176 11.0824 19.9765 11.0824C20.5176 11.0824 20.9529 11.5059 20.9529 12.0471C20.9529 12.3176 20.8706 12.5294 20.6588 12.7412L17.3882 16.0118L20.6471 19.2706C20.8471 19.4471 20.9412 19.6941 20.9412 19.9647C20.9412 20.5059 20.5059 20.9412 19.9529 20.9412C19.6824 20.9412 19.4353 20.8471 19.2588 20.6588L16 17.3882L12.7529 20.6588C12.5647 20.8471 12.3176 20.9412 12.0471 20.9412Z' fill='%23090909' fill-opacity='0.3'/%3E%3C/svg%3E%0A");
}

.modal-contact .modal-header .modal-close {
  margin-bottom: 6px;
}

.modal-close:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.modal-close:active {
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
}

/*////////////////////
  media screen width
////////////////////*/

@media (min-width: 768px) {
  .stories-view-wrapper {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 480px;
    border-radius: 6px;
  }
  .stories-view-wrapper img,
  .stories-view-wrapper video,
  .stories-view-wrapper .stories-item-content {
    border-radius: 6px;
  }
}

/*@media (max-height: 666px) {
  .stories-view-wrapper .stories-item-content {
    height: 80%;
    margin-top: 10%;
  }
  .stories-view-wrapper .stories-item-content video {
    max-height: 100%;
  }
}*/
</style>
