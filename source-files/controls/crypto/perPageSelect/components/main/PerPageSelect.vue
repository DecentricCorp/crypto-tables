<template lang="pug">

  Input.x4-per-page-select(
    type="select"
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
        return state.values.perPage
      },

      options({ state }) {
        return state.controls.perPageSelect
      },

    }),


    methods: map.variables({

      change({ commit }, { value }) {
        commit('PER_PAGE_CHANGE', { perPage: value })        
      },

    }),

  }

</script>
