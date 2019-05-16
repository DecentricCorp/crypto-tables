<template lang="pug">
  
  BBOption(
    :path="path"
    :visibility="name !== 'name'"
    :visible="values.visible"
    :icon="schema.icon"
    :title="schema.title")

    BOActions(
      :path="path")

    BOSwitchbox(
      v-if="defaults.badge !== undefined"
      :value="values.badge.visible"
      :options="{ label: 'Show badge' }"
      :path="path + '.badge.visible'")

    BOInput.x4-margin-top(
      type="text"
      :value="values.title"
      :options="{ icon: 'text_fields', label: 'Column title' }"
      :path="path + '.title'")

    div.x4-margin-top Alignment:

    BORadioButtons.x4-margin-semi-top(
      :value="values.align"
      :options="schema0.columns.alignOptions"
      :path="path + '.align'")

    div(
      v-if="values.sort")

      div.x4-margin-top Sort Type:

      BORadioButtons.x4-margin-semi-top(
        :value="values.sort"
        :options="schema0.columns.sortOptions"
        :path="path + '.sort'")

    div(v-if="values.format") &nbsp;

    BOTemplate(
      v-if="schema.patterns"
      :options="{ patterns: schema.patterns }"
      :value="values.format.template"
      :path="path + '.format.template'")

    BONumberPrecision.x4-margin-top(
      v-if="values.format && defaults.format.precision !== undefined"
      :path="path + '.format.precision'"
      :value="values.format.precision")

    BONumberSeparator.x4-margin-top(
      v-if="values.format && defaults.format.separator !== undefined"
      :path="path + '.format.separator'"
      :value="values.format.separator")

    BONumberFactor.x4-margin-top(
      v-if="values.format && defaults.format.factor !== undefined"
      :path="path + '.format.factor'"
      :value="values.format.factor")

</template>


<script>

  import map from 'map'

  let x4wp = window.x4wp
  let globName = 'X4WP.GLOB_NAME'
  let x4builder = x4wp.builders[globName]


  export default {

    props: ['path', 'values', 'defaults', 'schema', 'schema0', 'name'],


    components: map.components({
      BBOption: require('BBOption'),
      BOActions: require('BOActions'),
      BOInput: require('BOInput'),
      BORadioButtons: require('BORadioButtons'),
      BOSwitchbox: require('BOSwitchbox'),
      BOTemplate: require('BOTemplate'),
      BONumberPrecision: require('BONumberPrecision'),
      BONumberSeparator: require('BONumberSeparator'),
      BONumberFactor: require('BONumberFactor'),
    }),

  }

</script>