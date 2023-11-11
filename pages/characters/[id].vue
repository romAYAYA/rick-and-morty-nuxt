<template>
  <Head>
    <Title>Wubba Lubba | {{ currentCharacter.name }}</Title>
    <Meta name="name" :content="currentCharacter.name" />
  </Head>

  <CharacterDetails :currentCharacter="currentCharacter" />
</template>

<script setup>
const store = useCharactersStore()
const { fetchCharacterById } = store
const { currentCharacter } = toRefs(store)

const { id } = useRoute().params
await fetchCharacterById(id)
</script>

<style lang="scss" scoped></style>
