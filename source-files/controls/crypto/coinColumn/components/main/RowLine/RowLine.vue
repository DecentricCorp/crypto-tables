<template lang="pug">

  div(
    v-if="options1.visible !== false"
    :class="baseClass")

    template(
      v-if="['name', 'mktcap', 'price', 'vwap', 'supply', 'volume', 'change24h'].indexOf(name) !== -1")

      div.x4-title(
        v-if="options1.title")
        | {{ __(options1.title) }}

      Format(
        :name="name"
        :coin="coin"
        :options="options1")

    Rank(
      v-else-if="name === 'rank'"
      :coin="coin"
      :options="options1")

    Buttons(
      v-else-if="['trade', 'links'].indexOf(name) !== -1"
      :name="name"
      :coin="coin"
      :options="options1"
      :options0="options")

    Button(
      v-else-if="['more'].indexOf(name) !== -1"
      :name="name"
      :coin="coin"
      :options="options1"
      :options0="options")

</template>


<script>

  import __ from '__'
  import map from 'map'


  export default {

    props: ['name', 'coin', 'options'],


    components: map.components({
      Rank: require('../Rank'),
      Format: require('../Format'),
      Buttons: require('../Buttons'),
      Button: require('../Button'),
    }),


    computed: map.variables({

      options1() {
        return this.options.rows[this.name]
      },

      baseClass() {
        let result = {}

        result['x4-row-line'] = true
        result['x4-row-' + this.name] = true

        return result
      },

    }),


    methods: {

      __,

    },

  }

</script>
