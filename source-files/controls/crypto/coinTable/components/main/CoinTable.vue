<template lang="pug">

  DIV(
    v-if="options2.visible"
    :class="baseClass")

    Columns(
      :options="options2")

    Style(
      :colors="options2.colors")
      include ./CoinTable.sass
      | .x4-coin-table > 
      include ./Columns/Columns.sass
      | .x4-coin-table > .x4-columns > 
      include ./Column/Column.sass
      | .x4-coin-table 
      include ./HeadLine/HeadLine.sass
      | .x4-coin-table 
      include ./FlashLine/FlashLine.sass
      | .x4-coin-table 
      include ./HoverLine/HoverLine.sass
      | .x4-coin-table 
      include ./PopupLine/PopupLine.sass
      | .x4-coin-table 
      include ./PopupLine/PopupInside/PopupInside.sass
      | .x4-coin-table 
      include ./CoinLine/CoinLine.sass

    Style(
      v-if="options2.theme === 'material'"
      :colors="options2.colors")
      include ./themes/TableMaterial/TableMaterial.sass
      | .x4-coin-table > .x4-columns > 
      include ./Column/themes/material/ColumnMaterial.sass
      | .x4-coin-table 
      include ./HeadLine/themes/material/HeadLineMaterial.sass
      | .x4-coin-table .x4-head-line 
      include /common/components/ui/Underline/Underline.sass
      | .x4-coin-table .x4-head-line
      include /common/components/ui/Underline/Parent.sass
      | .x4-coin-table .x4-head-line 
      include /common/components/ui/Ripple/Ripple.sass

    Style(
      v-if="options2.theme === 'material' && options2.subtheme === 'filled'"
      :colors="options2.colors")
      include ./themes/TableMaterial/TableFilled.sass
      | .x4-coin-table > .x4-columns > 
      include ./Column/themes/material/ColumnFilled.sass
      | .x4-coin-table 
      include ./HeadLine/themes/material/HeadLineFilled.sass

    Style(
      v-if="options2.theme === 'material' && options2.subtheme === 'outlined'"
      :colors="options2.colors")
      include ./themes/TableMaterial/TableOutlined.sass
      | .x4-coin-table > .x4-columns > 
      include ./Column/themes/material/ColumnOutlined.sass
      | .x4-coin-table 
      include ./HeadLine/themes/material/HeadLineOutlined.sass

    Style(
      v-if="options2.theme === 'material' && options2.subtheme === 'standard'"
      :colors="options2.colors")
      include ./themes/TableMaterial/TableStandard.sass
      | .x4-coin-table > .x4-columns > 
      include ./Column/themes/material/ColumnStandard.sass
      | .x4-coin-table 
      include ./HeadLine/themes/material/HeadLineStandard.sass

    Style(
      :colors="actionColors"
      :scale=".64")
      | .x4-coin-table .x4-column-actions 
      include /common/components/ui/Button/Button.sass
      | .x4-coin-table .x4-column-actions 
      include /common/components/ui/Button/themes/ButtonMaterial/ButtonMaterial.sass
      | .x4-coin-table .x4-column-actions 
      include /common/components/ui/Button/themes/ButtonMaterial/ButtonFilled/ButtonFilled.sass
      | .x4-coin-table .x4-column-actions 
      include /common/components/ui/Button/themes/ButtonMaterial/ButtonOutlined/ButtonOutlined.sass
      | .x4-coin-table .x4-column-actions 
      include /common/components/ui/Button/themes/ButtonMaterial/ButtonStandard/ButtonStandard.sass

</template>


<script>

  import map from 'map'


  export default {

    components: map.components({
      DIV: require('DIV'),
      Style: require('Style'),
      Columns: require('./Columns'),
    }),


    data() {
      return {
        cellPadding: false,
      }
    },


    created() {
      window.addEventListener('resize', this.resize)
    },


    mounted() {
      this.resize()
    },


    destroyed() {
      window.removeEventListener('resize', this.resize)
    },


    computed: map.variables({

      options1({ state }) {
        return state.controls.coinTable
      },

      options2({ state }) {
        return Object.assign({}, this.options1, {
          theme: this.options1.theme || (this.options ? this.options.theme : null) || state.theme,
          subtheme: this.options1.subtheme || (this.options ? this.options.subtheme : null) || state.subtheme,
          colors: Object.assign({}, state.colors, (this.options ? this.options.colors : null), this.options1.colors),
        })
      },

      actionColors({ state }) {
        return Object.assign({}, this.options2.colors, this.options2.actions.colors)
      },

      baseClass() {
        return {
          'x4-coin-table': true,
          'x4-header-back': this.options2.background.header,
          'x4-body-back': this.options2.background.table,
          'x4-hover-back': this.options2.background.hover,
          'x4-sort-back': this.options2.background.sort,
          'x4-zebra-odd': this.options2.background.zebra && this.options2.background.even,
          'x4-zebra-even': this.options2.background.zebra && !this.options2.background.even,
          'x4-table-border': this.options2.grid.border,
          'x4-hgrid': this.options2.grid.horizontal,
          'x4-vgrid': this.options2.grid.vertical,
          'x4-cell-padding': this.cellPadding,
        }
      },

    }),


    methods: map.variables({

      resize() {
        this.cellPadding = this.$el.offsetWidth < this.options2.responsive.cellPaddingThreshold
      },

    }),

  }

</script>
