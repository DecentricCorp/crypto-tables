<template lang="pug">

  div(
    v-show="visible"
    :class="baseClass")

    HeadLine(
      :options="options"
      :column="column"
      :columnName="columnName")

    div.x4-coin-blocks
      template(
        v-for="coin in coins")

        div.x4-coin-block(
          :class="'x4-coin-' + coin.short")

          div.x4-zebra-line(
            v-if="columnIndex === 0")

          FlashLine(
            v-if="columnIndex === 0"
            :coin="coin"
            :options="options")

          HoverLine(
            v-if="columnIndex === 0"
            :coin="coin"
            :options="options")

          PopupLine(
            v-if="columnIndex === 0 && popupsVisible"
            :coin="coin"
            :options="options")

          CoinLine(
            :coin="coin"
            :options="options"
            :column="column"
            :columnName="columnName")

</template>


<script>

  import map from 'map'


  export default {

    props: ['options', 'visible', 'column', 'columnElements', 'columnName', 'columnIndex'],


    components: map.components({
      HeadLine: require('../HeadLine'),
      FlashLine: require('../FlashLine'),
      HoverLine: require('../HoverLine'),
      PopupLine: require('../PopupLine'),
      CoinLine: require('../CoinLine'),
    }),


    created() {
      let Vue = window.Vue

      Vue.set(this.columnElements, this.columnName, {
        component: this,
        visible: true,
        width: 0,
      })
    },


    computed: map.variables({

      coins({ getters }) {
        return getters['entities/coins2/paginated']
      },

      sortField({ state }) {
        return state.values.sort.split(':')[0]
      },

      baseClass({ state }) {
        let result = {}

        result['x4-column'] = true
        result['x4-column-' + this.columnName] = true
        result['x4-no-sort'] = !this.column.sort
        result['x4-sort-active'] = this.sortField === this.columnName
        result['x4-align-' + this.column.align] = true

        return result
      },

      popupsVisible({ state }) {
        return this.options.popup.visible
      },

    }),

  }

</script>
