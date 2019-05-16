<template lang="pug">
  
  BSButton(
    tag="option"
    :path="path"
    :values="values"
    :defaults="defaults"
    :schema="schema1")

</template>


<script>

  import map from 'map'


  export default {

    props: ['path', 'values', 'values0', 'defaults', 'schema'],


    components: map.components({
      BSButton: require('BSButton'),
    }),


    computed: map.variables({

      schema1({ state }) {
        let commonSchema = {
          theme: this.values0.theme,
          subtheme: this.values0.subtheme,
        }

        return Object.assign(commonSchema, this.schema, {
          colors: Object.assign({}, this.values0.colors, this.schema.colors),
        })
      },

    }),

  }

</script>