<script setup lang="ts">
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
  11: 'H',
}

const starts = [4, 11, 7, 2, 9, 4];
let cord: string[] = [];
const strings: string[][] = []

let j = 0;
starts.forEach(start => {
  cord = [];
  for(let i = 0; i < 12; i++){
    +i + +start < 12 ? j = +i + +start: j = -12 + +i + +start;
    if(typeof allNotes[j.toString()] === 'string'){
      cord.push(allNotes[j.toString()])
    } else {
      cord.push(allNotes[j.toString()]['0'])
    }
  }
  strings.push(cord);
})
</script>

<template>
<div class="board">
  <div class="string">
    <div class="fret-index" v-for="idx in 12" :key="idx">{{ idx - 1 !== 0 ? idx -1 : '' }}</div>
  </div>
  <div class="string">
    <div v-for="idx in 12" :key="idx" :class="[idx === 1 ? 'bridge small': 'fret small']">&nbsp;</div>
  </div>
  <div class="string" v-for="(string, index) in strings" :key="index">
    <div v-for="idx in 12"
         :key="idx"
         :class="[idx === 1 ? 'bridge': index === 5 ? 'fret small no-border': 'fret']" >
      {{ string[idx - 1] }}
    </div>
  </div>
</div>
</template>

<style scoped>
.board {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.string {
  display: flex;
}

.bridge {
  width: 35px;
  border-right: 5px solid #000;
  text-align: right;
}

.fret-index {
  width: 41px;
  text-align: center;
}
.fret {
  width: 40px;
  height: 20px;
  border-bottom: 1px solid goldenrod;
  background: #4F2D17;
  text-align: center;
  margin-right: 1px;
}

.small {
  height: 10px;
}

.no-border {
  border: none;
}
</style>