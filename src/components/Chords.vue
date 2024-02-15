<script setup lang="ts">
import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'

const musicStore = useMusicStore();
const { selectedKey } = storeToRefs(musicStore)
const tuning = ['E', 'H', 'G', 'D', 'A', 'E'];

function max(arr: number[]) {
  return Math.max.apply(null, arr) + 1;
}
</script>

<template>
  <div class="container">
    <div class="index-container">
      <div class="fret-index" v-for="index in max(selectedKey.chords[0])" :key="index">{{ index }}</div>
    </div>
  <div class="board">
    <div  class="fret">
      <div v-for="(string, idx) in tuning"
           :key="idx" class="bridge">
         <span class="dead" :class="[selectedKey.notes[0].includes(string) ? `not-dead ${string}` : '']">
           {{ string }}
         </span>
      </div>
    </div>
    <div class="fret" v-for="index in max(selectedKey.chords[0])" :key="index">
      <div v-for="(string, idx) in selectedKey.chords[0]"
           :key="idx"
           :class="[idx === 0 ? 'string small': 'string']">
        <div class="finger"
             :class="[selectedKey.notes[0][idx]]"
             v-if="string === index">
          {{ selectedKey.fingers[0][idx] }}
        </div>
      </div>
      <div class="string small no-border"/>
    </div>
  </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.index-container {
  position: absolute;
  top: 10px;
  display: flex;
}

.board {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fret {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fret-index {
  width: 50px;
  text-align: right;
}

.bridge {
  width: 25px;
  height: 20px;
  border-right: 5px solid #000;
}
.dead {
  color: #444;
}
.not-dead {
  background: #fff;
  border-radius: 100%;
  padding: 0 .2rem;
}
.string {
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  margin-left: 1px;
  border-bottom: 1px solid goldenrod;
  background: #4F2D17;
}

.finger {
  position: absolute;
  bottom: -10px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: #a9b
}

.no-border {
  border: none;
}

.small {
  height: 10px;
}

.C, .Cis {
  background-color: #F75396;
}

.D, .Dis, .Des {
  background-color: #F7E978;
}

.E, .Es {
  background-color: #487BE7;
}

.F, .Fis {
  background-color: #CC9648;
}

.G, .Gis, .Ges {
  background-color: #E72B55;
}

.A, .Ais, .As {
  background-color: #79E77E;
}

.H, .B {
  background-color: #aaaaaa;
}

</style>