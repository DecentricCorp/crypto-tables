export default async function(plugin, instance) {
  return {
    controls: {
      searchInput: {
        value: 'search',
        name: 'searchInput',
        path: 'controls.searchInput',
        icon: 'search',
        title: 'Search input',
        iconOptions: {
          default: 'search',
        },
        labelOptions: {
          default: 'Search for coins',
        },
      },
    },
  }
}
