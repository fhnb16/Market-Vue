import { createStore } from "vuex";

export default createStore({
  state: {
    content: {},
    stories: [],
    activeStory: -1,
  },
  getters: {
    getContent: (state) => state.content,
    getStories: (state) => state.stories,
    getActiveStory: (state) => state.activeStory,
  },
  actions: {
    setActiveStory({ commit }, activeStory) {
      commit("SET_ACTIVE_STORY", activeStory);
    },
    setViewedStory({ commit }, index) {
      commit("SET_VIEWED_STORY", index);
    },
    async fetchContent({ commit }) {
      try {
        await fetch("https://test.fhnb.ru/market/api/data.json")
          .then((res) => res.json())
          .then((out) => {
            commit("SET_CONTENT", out);
            commit("SET_STORIES", out.stories);
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CONTENT(state, data) {
      state.content = data;
    },
    SET_STORIES(state, data) {
      state.stories = data;
    },
    SET_ACTIVE_STORY(state, activeStory) {
      state.activeStory = activeStory;
    },
    SET_VIEWED_STORY(state, index) {
      state.stories[index].storyViewed = true;
    },
  },
});
