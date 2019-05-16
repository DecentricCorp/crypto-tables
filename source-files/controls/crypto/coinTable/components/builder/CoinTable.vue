<template lang="pug">

  div
    
    MainSection(
      :path="path"
      :values="values"
      :defaults="defaults"
      :schema="schema.main"
      :schema0="schema"
      :vvalue="vvalue"
      :vschema="vschema")

    ColumnsSection(
      :path="path + '.columns'"
      :path0="path"
      :values="values.columns"
      :values0="values"
      :defaults="defaults.columns"
      :defaults0="defaults"
      :schema="schema.columns"
      :schema0="schema")

    ActionsSection(
      :path="path + '.actions'"
      :path0="path"
      :values="values.actions"
      :values0="values"
      :defaults="defaults.actions"
      :defaults0="defaults"
      :schema="schema.actions")

</template>


<script>

  import map from 'map'

  let x4wp = window.x4wp
  let globName = 'X4WP.GLOB_NAME'
  let x4plugin = window[globName]
  let x4builder = x4wp.builders[globName]


  export default {

    props: ['path', 'values', 'defaults', 'schema', 'vvalue', 'vschema'],


    components: map.components({
      MainSection: require('./MainSection'),
      ColumnsSection: require('./ColumnsSection'),
      ActionsSection: require('./ActionsSection'),
    }),

  }

</script>
