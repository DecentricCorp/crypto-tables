export default async function(config, plugin, instance) {
  return {
    values: {
      coinTab: {
        name: 'coinTab',
        type: 'select',
        path: {
          mutation: 'COIN_TAB_CHANGE',
          value: 'defaults.coinTab',
          var: 'coinTab',
        },
        icon: 'tab',
        title: 'Coin tab',
        options: {
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
