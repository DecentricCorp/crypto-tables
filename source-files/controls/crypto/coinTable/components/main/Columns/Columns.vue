<template lang="pug">

  div.x4-columns

    template(
      v-for="(columnName, columnIndex) of options.showOrder"
      v-if="options.columns[columnName].visible")

      Column(
        :options="options"
        :visible="columnElements[columnName] && columnElements[columnName].visible"
        :column="options.columns[columnName]"
        :columnElements="columnElements"
        :columnName="columnName"
        :columnIndex="columnIndex")

</template>


<script>

  import map from 'map'

  let overflow = 0


  export default {

    props: ['options'],


    components: map.components({
      Column: require('../Column'),
    }),


    data() {
      return {
        adjusting: true,
        columnElements: {},
      }
    },


    mounted() {
      setTimeout(() => this.adjust2())

      this.adjustInterval = setInterval(() => {
        if (this.adjusting) return

        if (this.$el.scrollWidth > this.$el.offsetWidth) {
          return this.adjust1()
        }

        for (let columnName in this.columnElements) {
          let offsetWidth = this.columnElements[columnName].component.$el.offsetWidth

          if (offsetWidth !== 0 && offsetWidth !== this.columnElements[columnName].width) {
            return this.adjust1()
          }
        }
      }, 1000)
    },


    destroyed() {
      clearInterval(this.adjustInterval)
    },


    methods: map.variables({

      adjust1() {
        this.adjusting = true

        for (let columnName in this.columnElements) {
          this.columnElements[columnName].visible = true
        }

        setTimeout(() => this.adjust2())
      },

      adjust2() {
        if (this.$el.scrollWidth > this.$el.offsetWidth) {
          let fullWidth = this.$el.scrollWidth

          for (let i = 0; i < this.options.hideOrder.length; i++) {
            let columnName = this.options.hideOrder[i]

            if (this.options.showOrder.indexOf(columnName) !== -1) {
              if (this.columnElements[columnName]) {
                fullWidth -= this.columnElements[columnName].component.$el.offsetWidth
                this.columnElements[columnName].visible = false
              }

              if (fullWidth <= this.$el.offsetWidth) {
                break
              }
            }
          }
        }

        setTimeout(() => {
          for (let columnName in this.columnElements) {
            this.columnElements[columnName].width = this.columnElements[columnName].component.$el.offsetWidth
          }
        })

        this.adjusting = false
      },

    }),

  }

</script>
