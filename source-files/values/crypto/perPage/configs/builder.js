export default async function(config, plugin, instance) {
  return {
    values: {
      perPage: {
        name: 'perPage',
        type: 'select',
        path: {
          mutation: 'PER_PAGE_CHANGE',
          value: 'values.perPage',
          var: 'perPage',
        },
        icon: 'layers',
        title: 'Coins per page',
        options: {
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
