<template lang="pug">

  div(
    :is="component")

    slot(name="base" slot="base")
    slot(name="styles" slot="styles")

    template(
      v-if="dataLoaded")

      FiatSelect(
        slot="fiat-select")

      PerPageSelect(
        slot="per-page-select")

      SearchInput(
        slot="search-input")

      CoinTable(
        slot="coin-table")

      PagerBlock(
        slot="pager-block")

      Controls(
        slot="controls")

</template>


<script>

  import map from 'map'
  import layouts from './layouts'


  export default {

    components: map.components({
      FiatSelect: require('Main/FiatSelect'),
      PerPageSelect: require('Main/PerPageSelect'),
      SearchInput: require('Main/SearchInput'),
      CoinTable: require('Main/CoinTable'),
      PagerBlock: require('Main/PagerBlock'),
      Controls: require('./regions/Controls'),
    }),


    computed: map.variables({

      component({ state }) {
        return layouts[state.layout][state.sublayout]
      },

      dataLoaded({ state }) {
        return state.bootstrap === undefined || state.bootstrap.isLoaded === undefined || state.bootstrap.isLoaded === true
      },

    }),

  }

</script>
