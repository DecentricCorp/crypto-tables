export default async function(config, plugin, instance) {
  return {
    selections: {
      coinTab: [
        { value: 'chart', icon: 'show_chart', title: 'Chart' },
      ],
    },
    values: {
      coinTab: 'chart',
    },
  }
}
