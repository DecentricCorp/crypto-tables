<template lang="pug">
  
  BBSection(
    :icon="schema.icon"
    :title="schema.title")

    BBOption(
      title="Columns order")

      BOActions(
        :path="path0 + '.showOrder'")

      BOInputList(
        type="select"
        :addremove="false"
        :value="values0.showOrder"
        :options="orderOptions"
        :path="path0 + '.showOrder'")

    template(
      v-for="name in values0.showOrder")

      ColumnSection(
        :path="path + '.' + name"
        :values="values[name]"
        :defaults="defaults[name]"
        :schema="schema[name]"
        :schema0="schema0"
        :name="name")

</template>


<script>

  import map from 'map'


  export default {

    props: ['path', 'path0', 'values', 'values0', 'defaults', 'defaults0', 'schema', 'schema0', 'vvalue', 'vschema'],


    components: map.components({
      BBSection: require('BBSection'),
      BBOption: require('BBOption'),
      BOActions: require('BOActions'),
      BOInputList: require('BOInputList'),
      BSButton: require('BSButton'),
      ColumnSection: require('./ColumnSection'),
    }),


    computed: map.variables({

      orderOptions() {
        return Object.assign({}, this.schema.orderOptions, {
          items: this.defaults0.showOrder
            .filter(name => this.values[name].visible)
            .map(name => ({ value: name, title: this.values[name].title || this.schema[name].title })),
        })
      },

    }),

  }

</script>