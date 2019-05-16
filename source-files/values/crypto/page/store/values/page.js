export default ({ options }) => ({

  name: 'values/page',


  state: options.values.page,


  mutations: {

    PAGE_CHANGE(state, { page }) {
      state.values.page = page
    },

  },

})
