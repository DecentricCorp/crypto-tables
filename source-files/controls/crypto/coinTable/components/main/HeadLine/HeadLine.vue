<template lang="pug">

  div(
    :class="baseClass"
    @click="change")

    div.x4-value

      Icon.x4-sort.x4-sort-left.x4-transition(
        v-if="column.sort && (column.align === 'right' || column.align === 'center')"
        :icon="icon")

      div.x4-title.x4-transition
        | {{ title }}

      Icon.x4-sort.x4-sort-right.x4-transition(
        v-if="column.sort && column.align === 'left'"
        :icon="icon")

    Underline(
      :theme="options.theme"
      :subtheme="options.subtheme"
      :colors="options.colors"
      :nostyle="true")

    Ripple(
      v-if="column.sort"
      :theme="options.theme"
      :opacity=".04"
      :color="options.colors.primary"
      :nostyle="true")

</template>


<script>

  import __ from '__'
  import map from 'map'


  export default {

    props: ['options', 'column', 'columnName'],


    components: map.components({
      Icon: require('Icon'),
      Underline: require('Underline'),
      Ripple: require('Ripple'),
    }),


    computed: map.variables({

      sortField({ state }) {
        return state.values.sort.split(':')[0]
      },

      sortType({ state }) {
        return state.values.sort.split(':')[1]
      },

      baseClass({ state }) {
        return {
          'x4-head-line': true,
          'x4-active': this.sortField === this.columnName,
        }
      },

      icon() {
        let type = this.columnName !== this.sortField
          ? this.column.sort
          : this.sortType

        return 'arrow_' + (type === 'asc' ? 'down' : 'up') + 'ward'
      },

      title() {
        return __(this.column.title)
      },

      linesVisible() {
        return this.options.theme === 'material' && (this.options.subtheme === 'filled' || this.options.subtheme === 'standard')
      },

    }),


    methods: map.variables({

      change({ commit }) {
        if (!this.column.sort) {
          return
        }

        let type = this.columnName === this.sortField
          ? this.sortType === 'asc' ? 'desc' : 'asc'
          : this.column.sort

        commit('SORT_CHANGE', { sort: this.columnName + ':' + type })
      },

    }),

  }

</script>
