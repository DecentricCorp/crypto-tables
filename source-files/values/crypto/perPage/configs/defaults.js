export default async function(config, plugin, instance) {
  return {
    selections: {
      perPage: [
        { value: 5, title: '5' },
        { value: 10, title: '10' },
        { value: 15, title: '15' },
        { value: 20, title: '20' },
        { value: 25, title: '25' },
        { value: 30, title: '30' },
        { value: 40, title: '40' },
        { value: 50, title: '50' },
        { value: 75, title: '75' },
        { value: 100, title: '100' },
      ],
    },
    values: {
      perPage: 20,
    },
  }
}
