<template lang="pug">
  
  BBSection(
    :icon="schema.icon"
    :title="schema.title")

    BBOption(
      title="Actions Order")

      BOActions(
        :path="path0 + '.actionsOrder'")

      BOInputList(
        type="select"
        :addremove="false"
        :value="values0.actionsOrder"
        :options="orderOptions"
        :path="path0 + '.actionsOrder'")

    template(
      v-for="name in values0.actionsOrder")

      BSButton(
        tag="option"
        :path="path + '.' + name"
        :values="values[name]"
        :defaults="defaults[name]"
        :schema="schema1[name]"
        :nocolors="true")

    BBOption(
      title="Colors")

      BOActions(
        :path="path + '.colors'")

      BOColors(
        :value="colorsValue"
        :colors="colorPresets"
        :path="path + '.colors'"
        :decline="declineColor")

</template>


<script>

  import map from 'map'


  export default {

    props: ['path', 'path0', 'values', 'values0', 'defaults', 'defaults0', 'schema', 'vvalue', 'vschema'],


    components: map.components({
      BBSection: require('BBSection'),
      BBOption: require('BBOption'),
      BOActions: require('BOActions'),
      BOInputList: require('BOInputList'),
      BSButton: require('BSButton'),
      BOColors: require('BOColors'),
    }),


    computed: map.variables({

      colors({ state }) {
        return Object.assign({}, state.colors, this.values0.colors, this.schema.colors)
      },

      colorsValue() {
        return Object.assign({}, this.colors, this.values.colors)
      },

      orderOptions() {
        return Object.assign({}, this.schema.orderOptions, {
          items: this.defaults0.actionsOrder
            .filter(name => this.values[name].visible)
            .map(name => ({ value: name, title: this.schema1[name].title })),
        })
      },

      schema1({ state }) {
        let result = {}

        let commonSchema = {
          theme: this.values0.theme,
          subtheme: this.values0.subtheme,
        }

        this.values0.actionsOrder.forEach(name => {
          result[name] = Object.assign({}, commonSchema, this.schema[name])
        })

        return result
      },

      colorPresets({ getters }) {
        return getters['builder/presets/colors']({
          allowedColors: ['primary', 'inverted', 'accent'],
        })
      },

      declineColor({ state }) {
        return ({ name, value }) => {
          return value === this.colors[name]
        }
      },

    }),

  }

</script>