export default async function(config, plugin, instance) {
  return {
    values: {
      sort: {
        name: 'sort',
        path: {
          mutation: 'SORT_CHANGE',
          value: 'values.sort',
          var: 'sort',
        },
        icon: 'sort_by_alpha',
        title: 'Sort column',
        options: {
          items: [
            { value: 'rank', title: 'Rank' },
            { value: 'name', title: 'Name' },
            { value: 'mktcap', title: 'Market Cap' },
            { value: 'price', title: 'Price' },
            { value: 'vwap', title: 'VWAP' },
            { value: 'supply', title: 'Supply' },
            { value: 'volume', title: 'Volume' },
            { value: 'change24h', title: '%24h' },
          ],
          itemValue: 'value',
          itemTitle: 'title',
          icon: 'sort_by_alpha',
          label: 'Sort column',
        },
      },
    },
  }
}
