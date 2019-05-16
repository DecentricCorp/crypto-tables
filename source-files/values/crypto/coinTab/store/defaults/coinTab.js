let x4plugin = window['X4WP.GLOB_NAME']


export default ({ options }) => ({

  name: 'defaults/coinTab',


  state: options.values.coinTab,


  mutations: {

    COIN_TAB_CHANGE(state, { id, coinTab }) {
      if (id === undefined && x4plugin.multiValues[state.type].coinTab) {
        state.defaults.coinTab = coinTab
      }
    },

  },

})
