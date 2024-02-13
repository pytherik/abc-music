<script setup lang="ts">
import Chords from '@/components/Chords.vue'

const { selectedKey } = defineProps(['selectedKey']);

const emits = defineEmits(['closeModal'])
</script>

<template>
<div class="modal">
  <div class="inner-modal">
    <i class="pi pi-times" @click="emits('closeModal')" />
    <h1>
      {{ selectedKey.longName }}
<!--      <span v-if="selectedKey.pitch && selectedKey.pitch === 'up'">&#9839; </span>-->
<!--      <span v-if="selectedKey.pitch && selectedKey.pitch === 'down'">&#9837; </span>-->
<!--      <span v-else> Moll</span>-->
    </h1>
    <Chords :selectedKey="selectedKey"/>
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
    background: #52779A;
    min-width: 500px;
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
  }

  .pi-times {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  img {
    width: 300px;
  }
</style>