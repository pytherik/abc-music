<script setup lang="ts">
import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'
import RelatedChords from '@/components/RelatedChords.vue'
import Legend from '@/components/Legend.vue'

const musicStore = useMusicStore()
const { selectedKey } = storeToRefs(musicStore)
const tuning = ['E', 'B', 'G', 'D', 'A', 'E']

function max(arr: number[]) {
  return Math.max.apply(null, arr) + 1
}
</script>

<template>
  <div class="chords-container">
    <div class="section">
      <Legend />
    </div>
    <div class="section center">
<!--info   durchnumerieren der Bundstäbchen  -->
      <div class="index-container">
        <div class="fret-index" v-for="index in max(selectedKey.chords[0])"
             :key="index">
          {{ index }}
        </div>
      </div>
      <div class="board">
<!--info       Leersaiten und Bridge außerhalb   -->
        <div class="fret">
          <div v-for="(string, idx) in tuning"
               :key="idx" class="bridge">
            <span :class="[selectedKey.notes[0].includes(string) ? `not-dead ${string}` : 'dead']">
              {{ string }}
            </span>
          </div>
        </div>
<!--info     Aufbau des Griffs Bundweise  -->
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
          <div class="string small no-border" />
        </div>
      </div>
      <span class="actual-relation">
      {{ selectedKey.longName }}
      </span>
    </div>
    <div class="section">
      <RelatedChords />
    </div>
  </div>
</template>

<style scoped>
h4 {
  margin: .5rem 0;
}

.chords-container {
  display: flex;
}

.section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 .5rem;
}

.center {
  margin: 0 2rem;
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
  width: 40px;
  text-align: right;
}

.bridge {
  width: 25px;
  height: 20px;
  border-right: 5px solid #000;
}

.dead {
  color: #222;
}

.not-dead {
  color: #000;
  font-weight: bold;
  width: 40px;
  height: 20px;
  border-radius: 100%;
  padding: 0 .2rem;
}

.string {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
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
  border: 1px solid #444;
  border-radius: 100%;
}

.no-border {
  border: none;
}

.small {
  height: 10px;
}

.actual-relation {
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: .7rem;
  background: #C2F794;
  border-radius: 5px;
  padding: 0 .5rem;
}
</style>