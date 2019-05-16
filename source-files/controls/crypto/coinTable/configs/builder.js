export default async function(plugin, instance) {
  return {
    colors: [
      { name: 'flashGreen', title: 'Green Flash<br/>Color' },
      { name: 'flashRed', title: 'Red Flash<br/>Color' },
      { name: 'badgeGreenText', title: 'Green Badge<br/>Text Color' },
      { name: 'badgeGreenBack', title: 'Green Badge<br/>Back Color' },
      { name: 'badgeRedText', title: 'Red Badge<br/>Text Color' },
      { name: 'badgeRedBack', title: 'Red Badge<br/>Back Color' },
    ],
    controls: {
      coinTable: {
        value: 'sort',
        path: 'controls.coinTable',
        main: {
          icon: 'grid_on',
          name: 'coinTable',
          title: 'Table block',
          coins: {
            exceptOptions: {
              items: 'getters.entities/coins/all',
              itemValue: 'id',
              itemTemplate: '[rank]. [name] ([short])',
              icon: 'copyright',
              label: 'Coin name',
            },
            topOptions: {
              items: 'state.entities.coins2',
              itemValue: 'id',
              itemTemplate: '[rank]. [name] ([short])',
              icon: 'copyright',
              label: 'Coin name',
            },
          },
          hideOrderOptions: {
            items: [],
            itemValue: 'value',
            itemTitle: 'title',
            icon: 'sort_by_alpha',
            label: 'Column name',
          },
        },
        columns: {
          icon: 'view_week',
          title: 'Table columns',
          orderOptions: {
            items: [],
            itemValue: 'value',
            itemTitle: 'title',
            icon: 'sort_by_alpha',
            label: 'Table column',
          },
          alignOptions: {
            items: [
              { value: 'left', title: 'to the left' },
              { value: 'right', title: 'to the right' },
              { value: 'center', title: 'center' },
            ],
            itemValue: 'value',
            itemTitle: 'title',
          },
          sortOptions: {
            items: [
              { value: 'asc', title: '(asc)ending' },
              { value: 'desc', title: '(desc)ending' },
            ],
            itemValue: 'value',
            itemTitle: 'title',
          },
          rank: {
            title: 'Rank',
          },
          name: {
            title: 'Name',
            patterns: [
              { name: '[icon]', desc: 'coin icon' },
              { name: '[name]', desc: 'coin full name' },
              { name: '[short]', desc: 'coin abbreviation' },
            ],
          },
          mktcap: {
            title: 'Market Cap',
            patterns: [
              { name: '[value]', desc: 'numeric value' },
              { name: '[symbol]', desc: 'currency symbol' },
              { name: '[short]', desc: 'currency abbreviation (only if the currency symbol does not exist)' },
            ],
          },
          price: {
            title: 'Price',
            patterns: [
              { name: '[value]', desc: 'numeric value' },
              { name: '[symbol]', desc: 'currency symbol' },
              { name: '[short]', desc: 'currency abbreviation (only if the currency symbol does not exist)' },
            ],
          },
          vwap: {
            title: 'VWAP',
            patterns: [
              { name: '[value]', desc: 'numeric value' },
              { name: '[symbol]', desc: 'currency symbol' },
              { name: '[short]', desc: 'currency abbreviation (only if the currency symbol does not exist)' },
            ],
          },
          supply: {
            title: 'Supply',
            patterns: [
              { name: '[value]', desc: 'numeric value' },
            ],
          },
          volume: {
            title: 'Volume',
            patterns: [
              { name: '[value]', desc: 'numeric value' },
              { name: '[symbol]', desc: 'currency symbol' },
              { name: '[short]', desc: 'currency abbreviation (only if the currency symbol does not exist)' },
            ],
          },
          change24h: {
            title: '%24h',
            patterns: [
              { name: '[value]', desc: 'numeric value' },
            ],
          },
          actions: {
            title: 'Actions',
          },
        },
        actions: {
          icon: 'queue',
          title: 'Table actions',
          orderOptions: {
            items: [],
            itemValue: 'value',
            itemTitle: 'title',
            icon: 'sort_by_alpha',
            label: 'Button name',
          },
          buy: {
            name: 'buy',
            path: 'controls.coinTable.actions.buy',
            icon: null,
            title: 'Buy button',
            iconOptions: {
              default: 'shopping_cart',
            },
            labelOptions: {
              default: 'Buy',
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
            tooltipOptions: {
              default: 'Buy Coins',
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
            urlOptions: {
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
          },
          sell: {
            name: 'sell',
            path: 'controls.coinTable.actions.sell',
            icon: null,
            title: 'Sell button',
            iconOptions: {
              default: 'local_mall',
            },
            labelOptions: {
              default: 'Sell',
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
            tooltipOptions: {
              default: 'Sell Coins',
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
            urlOptions: {
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
          },
          more: {
            name: 'more',
            path: 'controls.coinTable.actions.more',
            icon: null,
            title: 'Read more button',
            iconOptions: {
              default: 'launch',
            },
            labelOptions: {
              default: 'Read More',
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
            tooltipOptions: {
              default: 'Read More',
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
            urlOptions: {
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
          },
          website: {
            name: 'website',
            path: 'controls.coinTable.actions.website',
            icon: null,
            title: 'Website button',
            iconOptions: {
              default: 'public',
            },
            labelOptions: {
              default: 'Website',
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
            tooltipOptions: {
              default: 'Open Coin Website',
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
            urlOptions: {
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
          },
          explorer: {
            name: 'explorer',
            path: 'controls.coinTable.actions.explorer',
            icon: null,
            title: 'Explorer button',
            iconOptions: {
              default: 'equalizer',
            },
            labelOptions: {
              default: 'Explorer',
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
            tooltipOptions: {
              default: 'Open Coin Explorer',
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
            urlOptions: {
              patterns: [
                { name: '[id]', desc: 'coin ID (literal)' },
                { name: '[coin]', desc: 'coin abbreviation' },
                { name: '[coin_lc]', desc: 'coin abbreviation (lower case)' },
                { name: '[fiat]', desc: 'fiat abbreviation' },
                { name: '[fiat_lc]', desc: 'fiat abbreviation (lower case)' },
              ],
            },
          },
        },
      },
    },
  }
}
