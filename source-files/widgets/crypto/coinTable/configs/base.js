export default async function(config, plugin, instance) {
  return {
    name: 'coinTable',
    title: 'Coin Table',
    contrOrder: [
      'coinTable',
      'fiatSelect',
      'perPageSelect',
      'searchInput',
      'coinTabs',
      'coinColumn',
      'lineChart',
      'periodSelect',
      'pagerBlock',
      'loader',
    ],
    valOrder: [
      'sort',
      'fiat',
      'perPage',
      'search',
      'coinTab',
      'period',
      'page',
    ],
    multiValues: [
      'coinTab',
      'period',
    ],
    hiddenValues: [
      
    ],
    scripts: [
      'momentjs',
      'chartjs',
    ],
    requests: [
      'coincapRates',
      'coincapAssets',
      'coincapAssetsMeta',
    ],
  }
}
