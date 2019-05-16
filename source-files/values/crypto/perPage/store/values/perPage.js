export default ({ options }) => ({

  name: 'values/perPage',


  state: options.values.perPage,


  mutations: {

    PER_PAGE_CHANGE(state, { perPage }) {
      state.values.perPage = perPage
      state.values.page = 1
    },

  },

})
