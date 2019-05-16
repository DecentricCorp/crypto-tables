<template lang="pug">
  
  BBOption(
    :path="path"
    :visibility="true"
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
      :options="{ icon: 'text_fields', label: 'Row title' }"
      :path="path + '.title'")

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


  export default {

    props: ['path', 'values', 'defaults', 'schema'],


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