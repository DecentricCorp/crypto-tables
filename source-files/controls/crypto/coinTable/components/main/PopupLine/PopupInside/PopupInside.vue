<template lang="pug">

  div(
    :class="baseClass")

    CoinColumn(
      :coin="coin.id"
      :options="options")

    div.x4-main-content

      CoinTabs(
        :scale=".86"
        :id="coin.id"
        :options="options")

      template(
        v-if="coinTab === 'chart'")

        PeriodSelect(
          :scale=".8"
          :coin="coin.id"
          :options="options")

        LineChart(
          :coin1="coin.id"
          :options="options")

</template>


<script>

  import map from 'map'


  export default {

    props: ['coin', 'options'],


    components: map.components({
      CoinColumn: require('Main/CoinColumn'),
      CoinTabs: require('Main/CoinTabs'),
      PeriodSelect: require('Main/PeriodSelect'),
      LineChart: require('Main/LineChart'),
    }),


    watch: {

      'controls.coinColumn': { handler() { this.resize() }, deep: true },
      'controls.periodSelect': { handler() { this.resize() }, deep: true },
      'controls.lineChart': { handler() { this.resize() }, deep: true },

    },


    created() {
      window.addEventListener('resize', this.resize)
    },


    destroyed() {
      window.removeEventListener('resize', this.resize)
    },


    computed: map.variables({

      controls({ state }) {
        return state.controls
      },

      popup({ state }) {
        return state.entities.popups[this.coin.id]
      },

      coinTab({ getters }) {
        return getters['values/coinTab']({ id: this.coin.id })
      },

      baseClass({ state, commit }) {
        return {
          'x4-popup-inside': true,
          'x4-with-coin-column': state.controls.coinColumn.visible,
        }
      },

    }),


    methods: map.variables({

      resize({ state, commit }) {
        setTimeout(() => {
          if (this.popup && this.popup.height !== this.$el.scrollHeight) {
            commit('POPUP_SET_HEIGHT', { id: this.coin.id, height: this.$el.scrollHeight })
          }
        })
      },

    }),

  }

</script>
