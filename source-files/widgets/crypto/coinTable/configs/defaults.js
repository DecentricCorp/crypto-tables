export default async function(config, plugin, instance) {
  return {
    margins: {
      width: 1280,
    },
    controls: {
      loader: {
        size: 200,
      },
      coinColumn: {
        rows: {
          name: {
            visible: false,
          },
        },
      },
    },
  }
}
