<template lang="pug">

  Pager.x4-pager-block(
    :page="page"
    :perPage="perPage"
    :options="options"
    @change="change")

</template>


<script>

  import map from 'map'


  export default {

    components: map.components({
      Pager: require('Pager'),
    }),


    computed: map.variables({

      page({ state }) {
        return state.values.page
      },

      perPage({ state }) {
        return state.values.perPage
      },

      options({ state }) {
        return state.controls.pagerBlock
      },

    }),


    methods: map.variables({

      change({ commit }, { value }) {
        commit('PAGE_CHANGE', { page: value })
      },

    }),

  }

</script>
