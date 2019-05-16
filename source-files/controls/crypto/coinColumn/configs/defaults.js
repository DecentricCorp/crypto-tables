export default async function(config, plugin, instance) {
  return {
    controls: {
      coinColumn: {
        visible: true,
        rowsOrder: [
          'rank',
          'trade',
          'name',
          'links',
          'mktcap',
          'price',
          'vwap',
          'change24h',
          'volume',
          'supply',
          'more',
        ],
        rows: {
          rank: {
            visible: true,
            title: 'Rank',
            badge: {
              visible: true,
              value: 'change24h',
            },
          },
          trade: {
            items: ['buy', 'sell'],
            buy: {
              visible: true,
              colorize: true,
              icon: 'shopping_cart',
              label: 'Buy',
              tooltip: 'Buy Coins',
              url: 'https://coinswitch.co/?from=[fiat_lc]&to=[coin_lc]&ref=02D3XFGEBD',
              blank: true,
            },
            sell: {
              visible: true,
              colorize: true,
              icon: 'local_mall',
              label: 'Sell',
              tooltip: 'Sell Coins',
              url: 'https://coinswitch.co/?from=[coin_lc]&ref=02D3XFGEBD',
              blank: true,
            },
          },
          name: {
            visible: true,
            title: '',
            format: {
              template: '[icon]  [name] ([short])',
            },
          },
          links: {
            items: ['website', 'explorer'],
            website: {
              visible: true,
              colorize: true,
              icon: 'public',
              label: 'Website',
              tooltip: 'Open Coin Website',
              url: true,
              blank: true,
              subtheme: 'standard',
            },
            explorer: {
              visible: true,
              colorize: true,
              icon: 'equalizer',
              label: 'Explorer',
              tooltip: 'Open Coin Explorer',
              url: true,
              blank: true,
              subtheme: 'standard',
            },
          },
          mktcap: {
            visible: true,
            title: 'Market Cap',
            badge: {
              visible: false,
              value: 'change',
            },
            format: {
              template: '[symbol][value] [short]',
              factor: '',
              separator: ',',
              precision: 0,
            },
          },
          price: {
            visible: true,
            title: 'Price',
            badge: {
              visible: true,
              value: 'change',
            },
            format: {
              template: '[symbol][value] [short]',
              factor: '',
              separator: ',',
              precision: 2,
            },
          },
          vwap: {
            visible: true,
            title: 'VWAP',
            badge: {
              visible: true,
              value: 'change',
            },
            format: {
              template: '[symbol][value] [short]',
              factor: '',
              separator: ',',
              precision: 2,
            },
          },
          supply: {
            visible: true,
            title: 'Supply',
            badge: {
              visible: false,
              value: 'change',
            },
            format: {
              template: '[value]',
              factor: '',
              separator: ',',
              precision: 0,
            },
          },
          volume: {
            visible: true,
            title: 'Volume',
            badge: {
              visible: false,
              value: 'change',
            },
            format: {
              template: '[symbol][value] [short]',
              factor: '',
              separator: ',',
              precision: 0,
            },
          },
          change24h: {
            visible: true,
            title: '24h Change',
            badge: {
              visible: true,
              value: 'change24h',
            },
            format: {
              template: '[value]%',
              factor: '',
              separator: ',',
              precision: 2,
            },
          },
          more: {
            visible: true,
            colorize: true,
            icon: 'launch',
            label: 'Read More',
            tooltip: 'Read More',
            url: 'https://coincap.io/assets/[id]',
            blank: true,
            subtheme: 'outlined',
          },
        },
        formatters: {
          name: [
            'template',
            'coin',
          ],
          mktcap: [
            'price',
            'number',
            'template',
            'fiat',
          ],
          price: [
            'price',
            'number',
            'template',
            'fiat',
          ],
          vwap: [
            'price',
            'number',
            'template',
            'fiat',
          ],
          supply: [
            'number',
            'template',
          ],
          volume: [
            'price',
            'number',
            'template',
            'fiat',
          ],
          change24h: [
            'number',
            'template',
          ],
        },
      },
    },
  }
}
