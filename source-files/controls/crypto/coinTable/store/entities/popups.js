let Vue = window.Vue


export default () => ({

  name: 'entities/popups',


  state: {},


  mutations: {

    POPUP_INIT(state, { id }) {
      Vue.set(state.entities.popups, id, {
        visible: true,
        height: 0,
      })
    },

    POPUP_TOGGLE(state, { id }) {
      state.entities.popups[id].visible = !state.entities.popups[id].visible
    },

    POPUP_SET_HEIGHT(state, { id, height }) {
      if (state.entities.popups[id]) {
        state.entities.popups[id].height = height
      }
    },

    SORT_CHANGE(state) {
      closePopups({ state })
    },

    PER_PAGE_CHANGE(state) {
      closePopups({ state })
    },

    SEARCH_CHANGE(state) {
      closePopups({ state })
    },

    PAGE_CHANGE(state) {
      closePopups({ state })
    },

    BUILDER_OPTION_CHANGE(state, { path, value }) {
      let paths = [
        'controls.coinTable.strategy',
        'controls.coinTable.except',
        'controls.coinTable.top',
      ]

      if (paths.indexOf(path) !== -1) {
        closePopups({ state })
      }
    },

  },


  actions: {

    toggle({ state, commit, dispatch }, { id }) {
      let mutName = state.entities.popups[id]
        ? 'POPUP_TOGGLE'
        : 'POPUP_INIT'

      commit(mutName, { id })
    },

  },

})


function closePopups({ state }) {
  for (let id in state.entities.popups) {
    Vue.set(state.entities.popups, id)
  }
}
