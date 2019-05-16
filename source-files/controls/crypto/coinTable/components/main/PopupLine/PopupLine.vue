<template lang="pug">

  DropDown.x4-popup-line(
    :opened="visible"
    @enter="enter"
    @leave="leave")

    PopupInside(
      :coin="coin"
      :options="options")

</template>


<script>

  import map from 'map'


  export default {

    props: ['coin', 'options'],


    components: map.components({
      DropDown: require('DropDown'),
      PopupInside: require('./PopupInside'),
    }),


    computed: map.variables({

      popup({ state }) {
        return state.entities.popups[this.coin.id]
      },

      visible({ state, commit }) {
        return this.popup && this.popup.visible
      },

    }),


    methods: map.variables({

      enter({ commit }, { scrollHeight }) {
        commit('POPUP_SET_HEIGHT', { id: this.coin.id, height: scrollHeight })
      },

      leave({ state, commit }) {
        if (this.popup) {
          commit('POPUP_SET_HEIGHT', { id: this.coin.id, height: 0 })
        }
      },

    }),

  }

</script>
