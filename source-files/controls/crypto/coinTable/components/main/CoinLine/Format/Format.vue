<template lang="pug">

  div(
    :class="baseClass"
    v-html="value")

</template>


<script>

  import map from 'map'


  export default {

    props: ['coin', 'options', 'column', 'columnName'],


    computed: map.variables({

      formatExtra({ state }) {
        return {
          fiat: state.entities.fiats[state.values.fiat],
        }
      },

      baseClass() {
        let result = {
          'x4-value': true,
        }

        if (this.column.badge && this.column.badge.visible) {
          result['x4-badge'] = true

          let value = this.column.badge.value
            ? this.coin[this.column.badge.value]
            : this.coin.change

          result[value > 0 ? 'x4-green' : (value < 0 ? 'x4-red' : 'x4-grey')] = true
        }

        return result
      },

      value({ state, getters }) {
        let value = this.coin[this.columnName]

        if (this.column.format) {
          this.options.formatters[this.columnName].forEach(formatter => {
            value = getters['helpers/items/format/' + formatter](value, this.column.format, this.coin, this.formatExtra, value)
          })
        }

        return value
      },

    }),

  }

</script>
