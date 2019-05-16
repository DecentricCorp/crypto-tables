export default ({ options }) => ({

  name: 'values/sort',


  state: options.values.sort,


  mutations: {

    SORT_CHANGE(state, { sort }) {
      state.values.sort = sort
      state.values.page = 1
    },

  },

})
