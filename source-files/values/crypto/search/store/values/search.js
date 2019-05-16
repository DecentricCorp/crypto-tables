export default ({ options }) => ({

  name: 'values/search',


  state: options.values.search,


  mutations: {

    SEARCH_CHANGE(state, { search }) {
      state.values.search = search
      state.values.page = 1
    },

  },

})
