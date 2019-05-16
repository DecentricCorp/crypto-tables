<template lang="pug">

  div(
    :class="baseClass")

    template(
      v-for="name in options.items")

      Button(
        :name="name"
        :coin="coin"
        :options="options[name]"
        :options0="options0")

</template>


<script>

  import map from 'map'


  export default {

    props: ['name', 'coin', 'options', 'options0'],


    components: map.components({
      Button: require('../Button'),
    }),


    computed: map.variables({

      visible() {
        return this.options.items.reduce((res, name) => {
          return res || this.options[name].visible
        }, false)
      },

      baseClass() {
        let result = {}
        result['x4-' + this.name] = true
        return result
      },

    }),

  }

</script>
