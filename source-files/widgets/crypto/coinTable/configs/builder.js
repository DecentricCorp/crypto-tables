export default async function(config, plugin, instance) {
  return {
    values: {
      coinTab: {
        title: 'Popup Coin tab',
      },
      period: {
        title: 'Chart Period',
      },
    },
    controls: {
      coinTabs: {
        title: 'Popup Coin tabs',
      },
    },
  }
}
