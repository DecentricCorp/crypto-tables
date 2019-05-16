<template lang="pug">

  Button(
    :class="baseClass"
    :scale=".64"
    :options="options2"
    :labelPatterns="patterns"
    :tooltipPatterns="patterns"
    :urlPatterns="patterns"
    :nostyle="true")

</template>


<script>

  import map from 'map'


  export default {

    props: ['name', 'coin', 'options'],


    components: map.components({
      Button: require('Button'),
    }),


    computed: map.variables({

      options1() {
        return this.options.actions[this.name]
      },

      meta({ state }) {
        return state.entities.coinsMeta[this.coin.id]
      },

      fiat({ state }) {
        return state.entities.fiats[state.values.fiat]
      },

      baseClass() {
        let result = {}
        result['x4-' + name + '-button'] = true
        return result
      },

      options2({ state }) {
        let options = Object.assign({}, this.options1, {
          theme: this.options1.theme || this.options.theme || state.theme,
          subtheme: this.options1.subtheme || this.options.subtheme || state.subtheme,
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
