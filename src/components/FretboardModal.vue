<script setup lang="ts">
import Chords from '@/components/Chords.vue'
import FullFret from '@/components/FullFret.vue'
import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'

const musicStore = useMusicStore();
const { selectedKey } = storeToRefs(musicStore);

const emits = defineEmits(['closeModal'])
</script>

<template>
<div class="modal">
  <div class="inner-modal">
    <i class="pi pi-times" @click="emits('closeModal')" />
    <h1>
      {{ selectedKey.longName }}
    </h1>
    <img :src="selectedKey.accidental" alt="accidental">
    <FullFret />
    <Chords />
  </div>
</div>
</template>

<style scoped>
  .modal {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background: #000000aa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner-modal {
    position: relative;
    background: #789FA9;
    min-width: 600px;
    min-height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem;
    border-radius: 5px;
  }

  .pi-times {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  img {
    width: 100px;
  }
</style>