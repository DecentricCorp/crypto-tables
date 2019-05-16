export default async function(plugin, instance) {
  return {
    controls: {
      coinTabs: {
        value: 'coinTab',
        name: 'coinTabs',
        path: 'controls.coinTabs',
        icon: 'tab',
        title: 'Coin tabs',
        itemsOptions: {
          path: 'selections.coinTab',
          items: 'state.selections.coinTab',
          itemValue: 'value',
          itemTitle: 'title',
          icon: 'tab',
          label: 'Coin tab',
        },
      },
    },
  }
}
