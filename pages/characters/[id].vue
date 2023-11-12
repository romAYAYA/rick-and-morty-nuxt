<template>
  <Head>
    <Title>Wubba Lubba | {{ currentCharacter.name }}</Title>
    <Meta name="name" :content="currentCharacter.name" />
  </Head>

  <CharacterDetails :currentCharacter="currentCharacter" />
  <EpisodesTable
    :episodes="episodes"
    :currentCharacter="currentCharacter"

  />
</template>

<script setup>
const charactersStore = useCharactersStore()
const { fetchCharacterById } = charactersStore
const { currentCharacter } = toRefs(charactersStore)

const { id } = useRoute().params
await fetchCharacterById(id)

const episodesStore = useEpisodesStore()
const { fetchEpisodes } = episodesStore
const { episodes } = toRefs(episodesStore)
await fetchEpisodes()

async function loadNextPage() {
  if (store.page < 42) {
    store.page++
    await fetchEpisodes()
  }
}

async function loadPrevPage() {
  if (store.page > 1) {
    store.page--
    await fetchEpisodes()
  }
}
</script>

<style lang="scss" scoped></style>
