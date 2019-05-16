export default async function(config, plugin, instance) {
  return {
    values: {
      search: {
        name: 'search',
        type: 'text',
        path: {
          mutation: 'SEARCH_CHANGE',
          value: 'values.search',
          var: 'search',
        },
        icon: 'search',
        title: 'Search value',
        options: {
          icon: 'search',
          label: 'Search value',
        },
      },
    },
  }
}
