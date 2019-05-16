export default async function(config, plugin, instance) {
  return {
    controls: {
      coinTabs: {
        visible: true,
        items: 'state.selections.coinTab',
        itemValue: 'value',
        itemTitle: 'title',
        itemIcon: 'icon',
      },
    },
  }
}
