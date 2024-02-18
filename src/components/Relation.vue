<script setup lang="ts">
const { relatedKey, parallel, relation, tonic } = defineProps(['relatedKey', 'parallel', 'relation', 'tonic'])
const emits = defineEmits(['changeKey'])
</script>

<template>
  <div class="relations" :class="tonic">
    <h5>{{ relation }}</h5>
    <div>
      <span class="sub rel-link" @click="emits('changeKey',relatedKey.id)">
        {{ relatedKey.longName }}/</span>
      <span class="parallel rel-link"
            @click="emits('changeKey',parallel.id)">
        {{ parallel.longName }}
      </span>
    </div>
    <img :src="relatedKey.accidental" alt="accidental">
  </div>
</template>

<style scoped>
h4, h5 {
  margin: .5rem 0;
}

img {
  width: 60px;
}

.rel-link {
  cursor: pointer;
}

.relations {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tonic {
  font-size: 1.1rem;
  background: #C49F3E99;
  border-radius: 5px;
  padding-bottom: .5rem;
}


.rel-link:hover {
  background: #bbb;
  border-radius: 5px;
  font-weight: bold;
}

.sub {
  font-weight: bold;
}

</style>