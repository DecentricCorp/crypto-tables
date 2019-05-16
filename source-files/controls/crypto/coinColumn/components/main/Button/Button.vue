<template lang="pug">

  Button(
    :class="baseClass"
    :scale=".75"
    :options="options1"
    :labelPatterns="patterns"
    :tooltipPatterns="patterns"
    :urlPatterns="patterns")

</template>


<script>

  import map from 'map'


  export default {

    props: ['name', 'coin', 'options', 'options0'],


    components: map.components({
      Button: require('Button'),
    }),


    computed: map.variables({

      meta({ state }) {
        return state.entities.coinsMeta[this.coin.id]
      },

      fiat({ state }) {
        return state.entities.fiats[state.values.fiat]
      },

      baseClass() {
        let result = {}
        result['x4-' + this.name + '-button'] = true
        return result
      },

      options1({ state }) {
        let options = Object.assign({}, this.options, {
          theme: this.options.theme || this.options0.theme || state.theme,
          subtheme: this.options.subtheme || this.options0.subtheme || state.subtheme,
          colors: Object.assign({}, state.colors, this.options0.colors, this.options.colors),
        })

        if (['website', 'explorer'].indexOf(this.name) !== -1) {
          options.url = this.meta
            ? this.meta[this.name]
            : true
        }

        return options
      },

      patterns({ state }) {
        return {
          id: this.coin.id,
          coin: this.coin.short,
          coin_lc: this.coin.short.toLowerCase(),
          fiat: this.fiat.short,
          fiat_lc: this.fiat.short.toLowerCase(),
        }
      },

    }),

  }

</script>
