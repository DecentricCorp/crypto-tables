<template lang="pug">
  
  BSSort(
    :value="value"
    :schema="schema")

</template>


<script>

  import map from 'map'

  
  export default {

    props: ['value', 'schema'],


    components: map.components({
      BSSort: require('BSSort'),
    }),

  }

</script>
