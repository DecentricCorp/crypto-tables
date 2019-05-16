<template lang="pug">

  Tabs.x4-coin-tabs(
    :scale="scale"
    :value="value"
    :options="options2"
    @change="change")

</template>


<script>

  import map from 'map'

  let x4plugin = window['X4WP.GLOB_NAME']


  export default {

    props: ['id', 'options', 'scale'],


    components: map.components({
      Tabs: require('Tabs'),
    }),


    computed: map.variables({

      value({ state }) {
        return x4plugin.multiValues[state.type].coinTab
          ? state.values.coinTab[this.id] || state.defaults.coinTab
          : state.values.coinTab
      },

      options1({ state }) {
        return state.controls.coinTabs
      },

      options2({ state }) {
        return Object.assign({}, this.options1, {
          theme: this.options1.theme || (this.options ? this.options.theme : null) || state.theme,
          subtheme: this.options1.subtheme || (this.options ? this.options.subtheme : null) || state.subtheme,
          colors: Object.assign({}, state.colors, (this.options ? this.options.colors : null), this.options1.colors),
        })
      },

    }),


    methods: map.variables({

      change({ commit }, { value }) {
        commit('COIN_TAB_CHANGE', { id: this.id, coinTab: value })        
      },

    }),

  }

</script>
