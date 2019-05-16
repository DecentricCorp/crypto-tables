<template lang="pug">
  
  BBSection(
    :path="path"
    :visibility="true"
    :visible="values.visible"
    :icon="schema.icon"
    :title="schema.title")

    BBOption(
      title="Base options")

      BOActions(
        :path="[path + '.background', path + '.grid', path + '.popup']")

      div.x4-margin-semi-bottom Grid & Border:

      BOSwitchbox(
        :value="values.grid.border"
        :options="{ label: 'show table border' }"
        :path="path + '.grid.border'")

      BOSwitchbox(
        :value="values.grid.horizontal"
        :options="{ label: 'show horizontal grid' }"
        :path="path + '.grid.horizontal'")

      BOSwitchbox(
        :value="values.grid.vertical"
        :options="{ label: 'show vertical grid' }"
        :path="path + '.grid.vertical'")

      div &nbsp;
      div.x4-margin-semi-bottom Background:

      BOSwitchbox(
        :value="values.background.table"
        :options="{ label: 'show table background' }"
        :path="path + '.background.table'")

      BOSwitchbox(
        v-if="values.background.table"
        :value="values.background.header"
        :options="{ label: 'show header background' }"
        :path="path + '.background.header'")

      BOSwitchbox(
        :value="values.background.hover"
        :options="{ label: 'highlight on mouse hover' }"
        :path="path + '.background.hover'")

      BOSwitchbox(
        :value="values.background.sort"
        :options="{ label: 'highlight sorted column' }"
        :path="path + '.background.sort'")

      BOSwitchbox(
        :value="values.background.zebra"
        :options="{ label: 'show zebra background' }"
        :path="path + '.background.zebra'")

      BOSwitchbox(
        v-if="values.background.zebra"
        :value="values.background.even"
        :options="{ label: 'switch odd/even zebra' }"
        :path="path + '.background.even'")

      div &nbsp;
      div.x4-margin-semi-bottom Coin Popup:

      BOSwitchbox(
        :value="values.popup.visible"
        :options="{ label: 'show popup dropdown' }"
        :path="path + '.popup.visible'")

    BBOption(
      title="Sort column")

      BOActions(
        :path="vschema.path")

      BOSort(
        :value="vvalue"
        :options="vschema.options"
        :path="vschema.path")

    BBOption(
      title="Coins list")

      BOActions(
        :path="[path + '.strategy', path + '.except']")

      BOItemsStrategy(
        :value="values.strategy"
        :path="path + '.strategy'")

      BOInputList.x4-margin-top(
        type="select"
        :value="values.except"
        :options="schema.coins.exceptOptions"
        :path="path + '.except'")

    BBOption(
      title="Top coins")

      BOActions(
        :path="path + '.top'")

      BOInputList(
        type="select"
        :value="values.top"
        :options="schema.coins.topOptions"
        :path="path + '.top'")

    BBOption(
      title="Flashes")

      BOActions(
        :path="path + '.flashes'")

      BOSwitchbox(
        :value="values.flashes.visible"
        :options="{ label: 'Show flashes' }"
        :path="path + '.flashes.visible'")

      div.x4-hint.x4-margin-top.x4-margin-bottom Increase the coin price changing threshold to reduce the number of flashes:

      BOInput(
        type="number"
        :value="values.flashes.threshold"
        :options="{ icon: 'fullscreen_exit', label: 'Threshold', min: 0, step: 0.0001 }"
        :path="path + '.flashes.threshold'")

    BBOption(
      title="Responsiveness")

      BOActions(
        :path="[path + '.responsive', path + '.hideOrder']")

      div.x4-hint.x4-margin-bottom Descrease cell padding when the table width is less than the following value (px):

      BOInput(
        type="number"
        :value="values.responsive.cellPaddingThreshold"
        :options="{ icon: 'fullscreen_exit', label: 'Threshold', min: 0, step: 4 }"
        :path="path + '.responsive.cellPaddingThreshold'")

      div &nbsp;

      div.x4-hint.x4-margin-bottom Select the order in which the columns will disappear as the table width decreases to fit the available space:

      BOInputList(
        type="select"
        :addremove="false"
        :value="values.hideOrder"
        :options="hideOrderOptions"
        :path="path + '.hideOrder'")

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

    props: ['path', 'values', 'defaults', 'schema', 'schema0', 'vvalue', 'vschema'],


    components: map.components({
      BBSection: require('BBSection'),
      BBOption: require('BBOption'),
      BOActions: require('BOActions'),
      BOSort: require('BOSort'),
      BOInputList: require('BOInputList'),
      BOItemsStrategy: require('BOItemsStrategy'),
      BOSwitchbox: require('BOSwitchbox'),
      BOInput: require('BOInput'),
      BOTheme: require('BOTheme'),
      BOColors: require('BOColors'),
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

      hideOrderOptions({ state }) {
        return Object.assign({}, this.schema.hideOrderOptions, {
          items: this.defaults.hideOrder
            .filter(name => this.values.columns[name].visible)
            .map(name => ({ value: name, title: this.values.columns[name].title || this.schema0.columns[name].title })),
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
          allowedColors: ['primary', 'inverted', 'accent', 'flashGreen', 'flashRed', 'badgeGreenText', 'badgeGreenBack', 'badgeRedText', 'badgeRedBack'],
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
