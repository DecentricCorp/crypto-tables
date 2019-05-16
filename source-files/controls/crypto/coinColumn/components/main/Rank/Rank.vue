<template lang="pug">

  div(
    :class="baseClass")

    div.x4-title {{ options.title }}
    div.x4-rank {{ coin.rank }}

</template>


<script>

  import map from 'map'


  export default {

    props: ['coin', 'options'],


    computed: map.variables({

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

    }),

  }

</script>
