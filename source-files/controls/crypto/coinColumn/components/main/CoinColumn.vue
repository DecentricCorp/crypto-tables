<template lang="pug">

  DIV(
    v-if="options2.visible"
    :class="baseClass")

    template(
      v-for="name of options2.rowsOrder")

      RowLine(
        :name="name"
        :coin="coin2"
        :options="options2")


    Style(
      :colors="options2.colors")
      include ./CoinColumn.sass
      | .x4-coin-column 
      include ./RowLine/RowLine.sass
      | .x4-coin-column 
      include ./Format/Format.sass
      | .x4-coin-column 
      include ./Rank/Rank.sass
      | .x4-coin-column 
      include ./Buttons/Buttons.sass

    Style(
      v-if="options2.theme === 'material'"
      :colors="options2.colors")
      include ./themes/material/ColumnMaterial.sass

</template>


<script>

  import map from 'map'


  export default {

    props: ['coin', 'options'],


    components: map.components({
      DIV: require('DIV'),
      Style: require('Style'),
      RowLine: require('./RowLine'),
    }),


    computed: map.variables({

      coin1({ state }) {
        return this.coin || state.values.coin
      },

      coin2({ state }) {
        return state.entities.coins[this.coin1]
      },

      options1({ state }) {
        return state.controls.coinColumn
      },

      options2({ state }) {
        return Object.assign({}, this.options1, {
          theme: this.options1.theme || (this.options ? this.options.theme : null) || state.theme,
          subtheme: this.options1.subtheme || (this.options ? this.options.subtheme : null) || state.subtheme,
          colors: Object.assign({}, state.colors, (this.options ? this.options.colors : null), this.options1.colors),
        })
      },

      baseClass() {
        return {
          'x4-coin-column': true,
        }
      },

    }),

  }

</script>
