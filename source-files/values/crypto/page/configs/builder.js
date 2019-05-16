export default async function(config, plugin, instance) {
  return {
    values: {
      page: {
        name: 'page',
        type: 'number',
        path: {
          mutation: 'PAGE_CHANGE',
          value: 'values.page',
          var: 'page',
        },
        icon: 'style',
        title: 'Page number',
        options: {
          icon: 'style',
          label: 'Page number',
        },
      },
    },
  }
}
