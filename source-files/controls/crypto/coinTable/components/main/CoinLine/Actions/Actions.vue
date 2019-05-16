<template lang="pug">

  div.x4-value

    template(
      v-for="name in options.actionsOrder")

      Button(
        :name="name"
        :coin="coin"
        :options="options")

</template>


<script>

  import map from 'map'


  export default {

    props: ['coin', 'options'],


    components: map.components({
      Button: require('./Button'),
    }),

  }

</script>
