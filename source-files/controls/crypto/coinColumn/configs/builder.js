export default async function(plugin, instance) {
  return {
    controls: {
      coinColumn: {
        path: 'controls.coinColumn',
        name: 'coinColumn',
        icon: 'crop_portrait',
        title: 'Coin column',
        rows: {
          orderOptions: {
            items: [],
            itemValue: 'value',
            itemTitle: 'title',
            icon: 'sort_by_alpha',
            label: 'Row name',
          },
          rank: {
            title: 'Rank',
          },
          trade: {
            title: 'Trade buttons',
            buy: {
              name: 'buy',
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
          },
          name: {
            title: 'Name',
            patterns: [
              { name: '[icon]', desc: 'coin icon' },
              { name: '[name]', desc: 'coin full name' },
              { name: '[short]', desc: 'coin abbreviation' },
            ],
          },
          links: {
            title: 'Coin buttons',
            website: {
              name: 'website',
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
            title: '24h Change',
            patterns: [
              { name: '[value]', desc: 'numeric value' },
            ],
          },
          more: {
            name: 'more',
            title: 'Read More',
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
        },
      },
    },
  }
}
