let Vue = window.Vue
let x4plugin = window['X4WP.GLOB_NAME']


export default ({ options }) => ({

  name: 'values/coinTab',


  state: !x4plugin.multiValues[options.type].coinTab
    ? options.values.coinTab
    : {},


  mutations: {

    COIN_TAB_CHANGE(state, { id, coinTab }) {
      if (x4plugin.multiValues[state.type].coinTab) {
        if (id !== undefined) {
          Vue.set(state.values.coinTab, id, coinTab)
        }
      } else {
        state.values.coinTab = coinTab
      }
    },

  },


  getters: {

    _name(state) {
      return ({ id }) => x4plugin.multiValues[state.type].coinTab
        ? state.values.coinTab[id] || state.defaults.coinTab
        : state.values.coinTab
    },

  },

})
