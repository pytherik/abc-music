<script setup lang="ts">
import Chords from '@/components/Chords.vue'
import FullFret from '@/components/FullFret.vue'
import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'
import { keys } from '@/services/data'
import Relation from '@/components/Relation.vue'
import Scale from '@/components/Scale.vue'

const musicStore = useMusicStore()
const { selectedKey, relatedKeys, chordTones } = storeToRefs(musicStore)
const { getRelatedKeys, showFretboard } = musicStore
const emits = defineEmits(['closeModal'])

function changeSelectedKey(id: number) {
  selectedKey.value = keys[id]
  relatedKeys.value = getRelatedKeys(keys[id])
  showFretboard(keys[id]);
  const siblings = document.querySelectorAll('.related-chord')
  siblings.forEach(sibling => {
    sibling.classList.remove('active')
  })
  siblings[0].classList.add('active')
}
</script>

<template>
  <div class="modal">
    <div class="inner-modal">
      {{ chordTones }}
      <i class="pi pi-times" @click="emits('closeModal')" />
      <div class="relations-container">
          <Relation
            :relatedKey="relatedKeys.sub"
            :parallel="relatedKeys.subParallel"
            relation="Subdominante"
            @changeKey="changeSelectedKey" />
          <Relation
            :relatedKey="relatedKeys.selected"
            :parallel="relatedKeys.parallel"
            relation="Tonika"
            tonic="tonic"
            @changeKey="changeSelectedKey" />
          <Relation
            :relatedKey="relatedKeys.dom"
            :parallel="relatedKeys.domParallel"
            relation="Dominante"
            @changeKey="changeSelectedKey" />
      </div>
      <Chords />
      <FullFret />
      <Scale />
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
  background: #D6F3F4;
  min-width: 650px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  border-radius: 5px;
}

.pi-times {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.relations-container {
  margin: 1.5rem 0;
  width: 100%;
  display: flex;
}
</style>