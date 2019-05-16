<template lang="pug">

  div(
    :class="baseClass"
    :style="baseStyle")

    Format(
      v-if="['rank', 'name', 'mktcap', 'price', 'vwap', 'supply', 'volume', 'change24h'].indexOf(columnName) !== -1"
      :options="options"
      :column="column"
      :columnName="columnName"
      :coin="coin")

    Actions(
      v-if="columnName === 'actions'"
      :coin="coin"
      :options="options")

</template>


<script>

  import map from 'map'


  export default {

    props: ['coin', 'options', 'column', 'columnName'],


    components: map.components({
      Format: require('./Format'),
      Actions: require('./Actions'),
    }),


    computed: map.variables({

      baseClass({ state }) {
        return {
          'x4-coin-line': true,
          'x4-transition': true,
        }
      },

      baseStyle({ state }) {
        let result = {}

        if (state.controls.coinTable.popup.visible && state.entities.popups[this.coin.id]) {
          result['margin-bottom'] = state.entities.popups[this.coin.id].height + 'px'
        }

        return result
      },

    }),

  }

</script>
