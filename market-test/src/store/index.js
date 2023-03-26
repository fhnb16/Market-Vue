import { createStore } from "vuex";

export default createStore({
  state: {
    content: {},
    stories: [],
    activeStory: -1,
    timerCountdown: 0,
    modalVisible: false,
  },
  getters: {
    getContent: (state) => state.content,
    getStories: (state) => state.stories,
    getActiveStory: (state) => state.activeStory,
    getTimerCount: (state) => state.timerCountdown,
    modalVisible: (state) => state.modalVisible,
  },
  actions: {
    setActiveStory({ commit }, activeStory) {
      if (activeStory < this.state.stories.length && activeStory > -1) {
        commit("SET_ACTIVE_STORY", activeStory);
      } else {
        commit("SET_ACTIVE_STORY", -1);
      }
    },
    setViewedStory({ commit }, activeStory) {
      if (activeStory < this.state.stories.length && activeStory > -1) {
        commit("SET_VIEWED_STORY", activeStory);
      }
    },
    setModalVisibility({ commit }, modalVisibility) {
      commit("SET_MODAL_VISIBILITY", modalVisibility);
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
    SET_MODAL_VISIBILITY(state, visibility) {
      if (visibility) {
        state.modalVisible = true;
      } else {
        state.modalVisible = false;
      }
    },
  },
});
