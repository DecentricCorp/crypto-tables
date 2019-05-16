<template lang="pug">

  div(
    :class="baseClass"
    v-html="value")

</template>


<script>

  import map from 'map'


  export default {

    props: ['name', 'coin', 'options'],


    computed: map.variables({

      options0({ state }) {
        return state.controls.coinColumn
      },

      formatExtra({ state }) {
        return {
          fiat: state.entities.fiats[state.values.fiat],
        }
      },

      baseClass() {
        let result = {
          'x4-value': true,
        }

        if (this.options.badge && this.options.badge.visible) {
          result['x4-badge'] = true

          let value = this.coin[this.options.badge.value]
          result[value > 0 ? 'x4-green' : (value < 0 ? 'x4-red' : 'x4-grey')] = true
        }

        return result
      },

      value({ state, getters }) {
        let value = this.coin[this.name]

        if (this.options.format) {
          this.options0.formatters[this.name].forEach(formatter => {
            value = getters['helpers/items/format/' + formatter](value, this.options.format, this.coin, this.formatExtra, value)
          })
        }

        return value
      },

    }),

  }

</script>
