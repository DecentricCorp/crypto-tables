<template lang="pug">

  BBSection(
    :path="path"
    :visibility="true"
    :visible="values.visible"
    :icon="schema.icon"
    :title="schema.title")

    BBOption(
      title="Rows order")

      BOActions(
        :path="path + '.rowsOrder'")

      BOInputList(
        type="select"
        :addremove="false"
        :value="values.rowsOrder"
        :options="rowsOrderOptions"
        :path="path + '.rowsOrder'")

    template(
      v-for="name in values.rowsOrder")

      Format(
        v-if="['rank', 'name', 'mktcap', 'price', 'vwap', 'supply', 'volume', 'change24h'].indexOf(name) !== -1"
        :path="path + '.rows.' + name"
        :values="values.rows[name]"
        :defaults="defaults.rows[name]"
        :schema="schema.rows[name]")

      template(
        v-else-if="['trade', 'links'].indexOf(name) !== -1"
        v-for="name2 in values.rows[name].items")

        Button(
          :path="path + '.rows.' + name + '.' + name2"
          :values="values.rows[name][name2]"
          :values0="values"
          :defaults="defaults.rows[name][name2]"
          :schema="schema.rows[name][name2]")

      Button(
        v-else-if="['more'].indexOf(name) !== -1"
        :path="path + '.rows.' + name"
        :values="values.rows[name]"
        :values0="values"
        :defaults="defaults.rows[name]"
        :schema="schema.rows[name]")

    BBOption(
      title="Theme")

      BOActions(
        :path="[path + '.theme', path + '.subtheme']")

      BOTheme(
        :path="path"
        :theme="themeValue"
        :subtheme="subthemeValue"
        :themes="themePresets"
        :decline="declineTheme")

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

    props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],


    components: map.components({
      BBSection: require('BBSection'),
      BBOption: require('BBOption'),
      BOActions: require('BOActions'),
      BOInputList: require('BOInputList'),
      BSButtn: require('BSButton'),
      BOTheme: require('BOTheme'),
      BOColors: require('BOColors'),
      Format: require('./Format'),
      Button: require('./Button'),
    }),


    computed: map.variables({

      themeValue({ state }) {
        return this.values.theme || state.theme
      },

      subthemeValue({ state }) {
        return this.values.subtheme || state.subtheme
      },

      colorsValue({ state }) {
        return Object.assign({}, state.colors, this.values.colors)
      },

      rowsOrderOptions() {
        return Object.assign({}, this.schema.rows.orderOptions, {
          items: this.values.rowsOrder
            .filter(name => {
              return this.values.rows[name].items
                ? this.values.rows[name].items.reduce((res, name2) => res || this.values.rows[name][name2].visible, false)
                : this.values.rows[name].visible
            })
            .map(name => ({
              value: name,
              title: this.schema.rows[name].title,
            })),
        })
      },

      themePresets({ getters }) {
        return getters['builder/presets/themes']({
          changeName: this.schema.name,
          allowedThemes: ['material'],
          allowedSubthemes: {
            material: ['filled', 'outlined', 'standard'],
          },
        })
      },

      colorPresets({ getters }) {
        return getters['builder/presets/colors']({
          allowedColors: ['primary', 'inverted', 'accent', 'badgeGreenText', 'badgeGreenBack', 'badgeRedText', 'badgeRedBack'],
        })
      },

      declineTheme({ state }) {
        return ({ theme, subtheme }) => {
          return theme === state.theme && subtheme === state.subtheme
        }
      },

      declineColor({ state }) {
        return ({ name, value }) => {
          return value === state.colors[name]
        }
      },

    }),

  }

</script>
