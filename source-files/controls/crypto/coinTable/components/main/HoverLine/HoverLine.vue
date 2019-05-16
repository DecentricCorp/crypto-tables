<template lang="pug">

  div(
    :class="baseClass"
    @click="popupToggle")

</template>


<script>

  import map from 'map'


  export default {

    props: ['coin', 'options'],


    computed: map.variables({

      baseClass({ state }) {
        return {
          'x4-hover-line': true,
          'x4-show-cursor': state.controls.coinTable.popup.visible,
        }
      },

    }),


    methods: map.variables({

      popupToggle({ dispatch }) {
        dispatch('entities/popups/toggle', { id: this.coin.id })
      },

    }),

  }

</script>
