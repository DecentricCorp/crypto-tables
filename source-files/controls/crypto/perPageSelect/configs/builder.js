export default async function(plugin, instance) {
  return {
    controls: {
      perPageSelect: {
        value: 'perPage',
        name: 'perPageSelect',
        path: 'controls.perPageSelect',
        icon: 'layers',
        title: 'Per Page select',
        iconOptions: {
          default: 'layers',
        },
        labelOptions: {
          default: 'Coins per page'
        },
        itemsOptions: {
          path: 'selections.perPage',
          items: 'state.selections.perPage',
          itemValue: 'value',
          itemTitle: 'title',
          icon: 'layers',
          label: 'Coins per page',
        },
      },
    },
  }
}
