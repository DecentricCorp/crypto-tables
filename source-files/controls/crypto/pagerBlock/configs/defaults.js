export default async function(config, plugin, instance) {
  return {
    controls: {
      pagerBlock: {
        visible: true,
        items: 'state.entities.coins2',
        label: 'Showing [from]-[to] of [total] coins',
      },
    },
  }
}
