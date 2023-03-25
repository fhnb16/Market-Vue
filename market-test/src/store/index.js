import { createStore } from "vuex";

export default createStore({
  state: {
    content: {},
    stories: [],
  },
  getters: {
    getContent: (state) => state.content,
    getStories: (state) => state.stories,
  },
  actions: {
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
  },
});
