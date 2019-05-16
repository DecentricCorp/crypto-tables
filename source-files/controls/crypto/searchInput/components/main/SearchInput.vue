<template lang="pug">

  Input.x4-search-input(
    type="search"
    :value="value"
    :options="options"
    @change="change")

</template>


<script>

  import map from 'map'


  export default {

    components: map.components({
      Input: require('Input'),
    }),


    computed: map.variables({

      value({ state }) {
        return state.values.search
      },

      options({ state }) {
        return state.controls.searchInput
      },

    }),


    methods: map.variables({

      change({ commit }, { value }) {
        setTimeout(() => {
          if (value === this.$refs.input.value) {
            commit('SEARCH_CHANGE', { search: value })
          }
        }, 500)
      },

    }),

  }

</script>
