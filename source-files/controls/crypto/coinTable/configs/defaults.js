export default async function(config, plugin, instance) {
  return {
    colors: {
      flashGreen: 'rgba(185,246,202,.5)',
      flashRed: 'rgba(252,228,236,.5)',
      badgeGreenText: 'rgba(102,187,106,1)',
      badgeGreenBack: 'rgba(185,246,202,1)',
      badgeRedText: 'rgba(240,98,146,1)',
      badgeRedBack: 'rgba(252,228,236,1)',
    },
    changes: {
      material: {
        filled: {
          coinTable: [
            { path: 'controls.coinTable.background.table', value: true },
            { path: 'controls.coinTable.grid.border', value: false },
          ],
        },
        outlined: {
          coinTable: [
            { path: 'controls.coinTable.background.table', value: false },
            { path: 'controls.coinTable.grid.border', value: true },
          ],
        },
        standard: {
          coinTable: [
            { path: 'controls.coinTable.background.table', value: false },
            { path: 'controls.coinTable.grid.border', value: false },
          ],
        },
      },
    },
    controls: {
      coinTable: {
        visible: true,
        showOrder: [
          'rank',
          'name',
          'mktcap',
          'price',
          'vwap',
          'change24h',
          'volume',
          'supply',
          'actions',
        ],
        hideOrder: [
          'supply',
          'volume',
          'vwap',
          'change24h',
          'mktcap',
          'actions',
          'rank',
          'price',
        ],
        actionsOrder: [
          'buy',
          'sell',
          'more',
          'website',
          'explorer',
        ],
        columns: {
          rank: {
            visible: true,
            title: '#',
            sort: 'asc',
            align: 'right',
            badge: {
              visible: true,
              value: 'change24h',
            },
          },
          name: {
            visible: true,
            title: 'Name',
            sort: 'asc',
            align: 'left',
            format: {
              template: '[icon]  [name] ([short])',
            },
          },
          mktcap: {
            visible: true,
            title: 'Market Cap',
            sort: 'desc',
            align: 'right',
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
            sort: 'desc',
            align: 'right',
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
            sort: 'desc',
            align: 'right',
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
            sort: 'desc',
            align: 'right',
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
            sort: 'desc',
            align: 'right',
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
            title: '%24h',
            sort: 'desc',
            align: 'right',
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
          actions: {
            visible: true,
            title: 'Actions',
            sort: false,
            align: 'center',
            value: 'actions',
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
        actions: {
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
          more: {
            visible: false,
            colorize: true,
            icon: 'launch',
            label: false,
            tooltip: 'Read More',
            url: 'https://coincap.io/assets/[id]',
            blank: true,
          },
          website: {
            visible: false,
            colorize: true,
            icon: 'public',
            label: false,
            tooltip: 'Open Coin Website',
            url: true,
            blank: true,
          },
          explorer: {
            visible: false,
            colorize: true,
            icon: 'equalizer',
            label: false,
            tooltip: 'Open Coin Explorer',
            url: true,
            blank: true,
          },
        },
        background: {
          table: true,
          header: false,
          sort: false,
          hover: true,
          zebra: false,
          even: false,
        },
        grid: {
          border: false,
          horizontal: true,
          vertical: false,
        },
        flashes: {
          visible: true,
          threshold: 0.0001,
        },
        responsive: {
          cellPaddingThreshold: 960,
        },
        popup: {
          visible: true,
        },
      },
    },
  }
}
