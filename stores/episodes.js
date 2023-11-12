export const useEpisodesStore = defineStore('episodes', {
  state: () => ({
    episodes: [],
  }),

  actions: {
    async fetchEpisodes() {
      try {
        const { data } = await useFetch(
          `https://rickandmortyapi.com/api/episode`
        )
        if (data.value) {
          this.episodes = data.value
        }
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    },
  },
})
