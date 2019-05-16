export default ({ options }) => ({

  name: 'controls/coinTable',


  state: options.controls.coinTable,


  mutations: {

    BUILDER_OPTION_CHANGE(state, { path, value }) {
      if (path === 'controls.coinTable.showOrder' && value.indexOf('name') === -1) {
        value = value.slice()
        
        if (value[0] === 'rank') {
          value.splice(1, 0, 'name')
        } else {
          value.unshift('name')
        }

        setTimeout(() => {
          this.commit('BUILDER_OPTION_CHANGE', { path, value })
        })
      }
    },

  },

})
