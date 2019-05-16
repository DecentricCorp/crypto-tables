<template lang="pug">

  div(
    v-if="visible"
    :class="[baseClass, initFlash, flashClass]")

</template>


<script>

  import map from 'map'


  export default {

    props: ['coin', 'options'],


    data() {
      return {
        flashType: null,
      }
    },


    watch: {
      coin(coin1, coin2) {
        if (coin1.id !== coin2.id) {
          this.justCoinChanged = true
        }
      },
    },


    computed: map.variables({

      visible() {
        return this.options.flashes.visible
      },

      baseClass() {
        return {
          'x4-flash-line': true,
          'x4-transition': true,
        }
      },

      initFlash() {
        if (this.coin.price && this.coin.change !== 0 && !this.justCoinChanged) {
          this.flashType = this.coin.change === 1 ? 'green' : 'red'
          setTimeout(() => this.flashType = null, 300)
        }

        this.justCoinChanged = false

        return {}
      },

      flashClass() {
        let result = {}

        if (this.flashType) {
          result['x4-flash-' + this.flashType] = true
        }

        return result
      },

    }),

  }

</script>
