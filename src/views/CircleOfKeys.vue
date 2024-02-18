<script setup lang="ts">
import { keys } from '@/services/data'
import FretboardModal from '@/components/InfoModal.vue'
import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'

const musicStore = useMusicStore();
const { showFretboard } = musicStore;
const { showFret } = storeToRefs(musicStore);

</script>

<template>
  <main class="main">
    <h1>Der Quintenzirkel</h1>
    <div class="circle-big">
      <div class="keys"
           v-for="key in keys"
           :key="key.id"
           :style="{'top': `${key.pos[0]}px`,'right': `${key.pos[1]}px` }"
           :class="[key.mode === 'major' ? 'keys-major': 'keys-minor']"
           @click="showFretboard(key)">
        {{ key.name }}
        <span v-if="key.pitch && key.pitch === 'up'">&#9839;</span>
        <span v-if="key.pitch && key.pitch === 'down'">&#9837;</span>
        <span v-if="key.id === 7 || key.id === 27">|</span>
      </div>
    </div>
    <FretboardModal
      v-if="showFret"
      @closeModal="showFret = false"/>
  </main>
</template>

<style scoped>

.circle-big {
  position: relative;
  width: 500px;
  height: 500px;
  background: #A98E5C11;
  border-radius: 100%;
  box-shadow: 2px 2px 5px #000;
  margin-top: 4rem;
}

.keys {
  cursor: pointer;
  position: absolute;
  font-size: 2rem;
  display: flex;
}

.keys-minor:hover {
  color: lightgreen;
}

.keys-major:hover {
  color: cadetblue;
}
</style>