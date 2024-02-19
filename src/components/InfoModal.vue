<script setup lang="ts">
import Chords from '@/components/Chords.vue'
import FullFret from '@/components/FullFret.vue'
import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'
import { keys } from '@/services/data'
import Relation from '@/components/Relation.vue'
import Scale from '@/components/Scale.vue'
import { ref } from 'vue'

const musicStore = useMusicStore()
const { selectedKey, relatedKeys, chordTones, hint } = storeToRefs(musicStore)
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
<!--      {{ chordTones }}-->
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
      <div class="digit" v-if="hint">
        <div class="warning">Achtung! Internationale Notation: B ist H und Bb is B</div>
        <i class="pi pi-check" title="Hinweis ausblenden" @click="hint=false"/>
      </div>
      <Chords />
      <FullFret />
      <Scale />
    </div>
  </div>
</template>

<style scoped>
.warning {
  color: #A9345A;
}

.digit {
  display: flex;
}
.modal {
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0;
  right: 0;
  background: #00000077;
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
  border-radius: 40px;
}

.pi-times {
  background: #444;
  color: #dedeed;
  padding: .2rem;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}

.pi-times:hover {
  background-color: #ff0000dd;
  color: #000;
}

.pi-check {
  margin-left: 1rem;
  border: 1px solid #444;
  border-radius: 100%;
  font-weight: bold;
  color: green;
}

.pi-check:hover {
  background-color: #00ff0055;
  color: #000;
}
.relations-container {
  margin: 1.5rem 0;
  width: 100%;
  display: flex;
}
</style>