export default async function(config, plugin, instance) {
  return {
    controls: {
      searchInput: {
        visible: true,
        icon: 'search',
        label: 'Search for coins',
      },
    },
  }
}
