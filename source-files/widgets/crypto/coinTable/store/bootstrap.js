let intervals = {
  fiats: null,
}


export default () => ({

  name: 'bootstrap',


  state: {
    isLoaded: false,
  },


  mutations: {

    LOADED_CHANGE(state, { isLoaded }) {
      state.bootstrap.isLoaded = isLoaded
    },

  },


  actions: {

    _name({ commit, dispatch }) {
      let promises = [
        dispatch('entities/fiats/retrieve'),
        dispatch('entities/coins/retrieve'),
      ]

      Promise.all(promises).then(() => {
        commit('LOADED_CHANGE', { isLoaded: true })
      })

      dispatch('entities/coinsMeta/retrieve', { cache: true })

      intervals.fiats = setInterval(() => {
        dispatch('entities/fiats/retrieve', { cache: 5 * 60 * 1000 })
      }, 5 * 60 * 1000 + 5000)
    },


    reset() {
      clearInterval(intervals.fiats)
    },

  },

})
