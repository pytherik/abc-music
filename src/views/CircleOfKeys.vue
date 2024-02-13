<script setup lang="ts">
import { keys } from '@/services/data'
import { ref } from 'vue'
import FretboardModal from '@/components/FretboardModal.vue'

const allNotes: any = {
  0: 'C',
  1: ['Cis', 'Des'],
  2: 'D',
  3: ['Dis', 'Es'],
  4: 'E',
  5: 'F',
  6: ['Fis', 'Ges'],
  7: 'G',
  8: ['Gis', 'As'],
  9: 'A',
  10: ['Ais', 'B'],
  11: 'H'
};

const starts = [4, 11, 7, 2, 9, 4];
let cord: string[] = [];
let strings: string[][] = [];

const showFret = ref(false);
const selectedKey = ref();
function showFretboard(key: any) {
  strings = []
  selectedKey.value = key;


  let j = 0;
  starts.forEach(start => {
    cord = [];
    for (let i = 0; i < 12; i++) {
      +i + +start < 12 ? j = +i + +start : j = -12 + +i + +start;
      if (typeof allNotes[j.toString()] === 'string') {
        cord.push(allNotes[j.toString()]);
      } else {
        if (selectedKey.value?.flat === 'true') {
          cord.push(allNotes[j.toString()]['1']);
        } else {
          cord.push(allNotes[j.toString()]['0']);
        }
      }
    }
    strings.push(cord);
  });
  console.log(strings);

  console.log(selectedKey.value);
  showFret.value = true;
}

</script>

<template>
  <main>
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
      :selectedKey="selectedKey"
      :strings="strings"
      @closeModal="showFret = false"/>
  </main>
</template>

<style scoped>

.circle-big {
  position: relative;
  width: 500px;
  height: 500px;
  background: #A98E5C;
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