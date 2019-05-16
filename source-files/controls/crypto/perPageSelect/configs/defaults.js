export default async function(config, plugin, instance) {
  return {
    controls: {
      perPageSelect: {
        visible: true,
        icon: 'layers',
        label: 'Coins per page',
        items: 'state.selections.perPage',
        itemValue: 'value',
        itemTitle: 'title',
      },
    },
  }
}
