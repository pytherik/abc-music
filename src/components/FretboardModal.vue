<script setup lang="ts">
import Chords from '@/components/Chords.vue'
import FullFret from '@/components/FullFret.vue'
import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'
import { keys } from '@/services/data'

const musicStore = useMusicStore()
const { selectedKey } = storeToRefs(musicStore)
const emits = defineEmits(['closeModal'])
</script>

<template>
  <div class="modal">
    <div class="inner-modal">
      <i class="pi pi-times" @click="emits('closeModal')" />
      <div class="common">
        <div>
          <span class="sub">{{ keys[selectedKey.sub].longName }}</span>
          <span class="long-name">{{ selectedKey.longName }} / </span>
          <span class="parallel">{{ selectedKey.parallel }}</span>
          <span class="dom">{{ keys[selectedKey.dom].longName }}</span>
          <div>
            <img :src="selectedKey.accidental" alt="accidental">
          </div>
        </div>
        <Chords />
      </div>
      <FullFret />
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

.long-name {
  font-size: 1.3rem;
  font-weight: bold;
}

.common {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

img {
  width: 100px;
}
</style>