export default async function(plugin, instance) {
  return {
    controls: {
      pagerBlock: {
        value: 'page',
        name: 'pagerBlock',
        path: 'controls.pagerBlock',
        icon: 'style',
        title: 'Pager block',
        labelOptions: {
          default: 'Showing [from]-[to] of [total] coins',
          patterns: [
            { name: '[total]', desc: 'total number of coins' },
            { name: '[from]', desc: 'from number on the current page' },
            { name: '[to]', desc: 'to number on the current page' },
          ],
        },
      },
    },
  }
}
