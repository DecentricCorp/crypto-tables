export default () => ({

  name: 'entities/coins2',


  state: [],


  mutations: {

    COINS_PRICES_CHANGE(state, { prices }) {
      let threshold = state.controls.coinTable.flashes.threshold

      for (let id in prices) {
        if (Math.abs(prices[id] - state.entities.coins[id].price) >= threshold) {
          state.entities.coins[id].change = prices[id] < state.entities.coins[id].price ? -1 : 1
          state.entities.coins[id].price = prices[id]
        }
      }
    },

    COINS_INIT(state, { coins }) {
      state.entities.coins2 = this.getters['entities/coins2/retrieve']({ coins })
    },

    SEARCH_CHANGE(state, { search }) {
      state.entities.coins2 = this.getters['entities/coins2/retrieve']({ search })
    },

    SORT_CHANGE(state, { sort }) {
      state.entities.coins2 = this.getters['entities/coins2/retrieve']({ sort })
    },

    BUILDER_OPTION_CHANGE(state, { path, value }) {
      let paths = [
        'controls.coinTable.strategy',
        'controls.coinTable.except',
        'controls.coinTable.top',
      ]

      if (paths.indexOf(path) !== -1) {
        state.entities.coins2 = this.getters['entities/coins2/retrieve']({})
      }
    },

  },


  getters: {

    'prices/callback'() {
      return ({ resp }) => {
        this.commit('COINS_PRICES_CHANGE', { prices: resp, log: false })
      }
    },


    paginated(state, getters) {
      let start = (state.values.page - 1) * state.values.perPage
      let coins = state.entities.coins2.slice(start, start + state.values.perPage)

      let assets = coins.map(coin => coin.id)
      let callback = getters['entities/coins2/prices/callback']

      this.dispatch('coincap/prices/connect', { assets, callback })

      return coins
    },


    retrieve(state, getters) {
      return ({ coins, search, sort }) => {
        coins = coins === undefined ? state.entities.coins : coins
        search = search === undefined ? state.values.search : search
        sort = sort === undefined ? state.values.sort : sort

        let filters = []

        if (search) {
          let regexp = new RegExp(search, 'i')
          filters.push(item => item.name.match(regexp) || item.short.match(regexp))
        }

        let { strategy, except, top } = state.controls.coinTable

        return getters['helpers/items/get']({
          hash: coins,
          strategy,
          except,
          top,
          filters,
          sort,
        })
      }
    },

  },

})
