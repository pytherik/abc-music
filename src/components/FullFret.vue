<script setup lang="ts">

import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'

const musicStore = useMusicStore()
const { selectedKey, strings } = storeToRefs(musicStore)
</script>

<template>
  <div class="board">
    <!--info   durchnumerieren der Bundstäbchen  -->
    <div class="index-row">
      <div class="fret-index" v-for="idx in 12"
           :key="idx">
        <span class="fret-nr">{{ idx - 1 !== 0 ? idx - 1 : '' }}</span>
      </div>
    </div>
    <div class="string">
      <!--info    Erste Saite mit Bridge small-->
      <div v-for="idx in 12"
           :key="idx"
           :class="[idx === 1 ? 'bridge small': 'fret small']" />
    </div>
    <div class="string" v-for="(string, index) in strings" :key="index">
      <div :class="[index === 5 ? 'bridge small': 'bridge']">
        <div class="string-name"
             :class="[selectedKey.notes[0].includes(string[0]) ? string[0]: '']">
          {{ string[0] }}
        </div>
      </div>
      <div v-for="idx in 11"
           :key="idx"
           :class="[index === 5 ? 'fret small no-border': 'fret']">
        <div class="tone"
             :class="[selectedKey.notes[0].includes(string[idx]) ? string[idx]: 'invisible']">
          {{ string[idx] }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  margin: .5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.string {
  display: flex;
}

.index-row {
  display: flex;
  margin: 1rem;
}

.bridge {
  position: relative;
  width: 35px;
  border-right: 5px solid #000;
  text-align: right;
}

.string-name {
  position: absolute;
  text-align: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  top: -10px;
}

.fret-index {
  position: relative;
  width: 41px;
  text-align: center;
}

.fret-nr {
  position: absolute;
  top: -8px;
}

.fret {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

.tone {
  position: absolute;
  top: -10px;
  width: 1.2rem;
  height: 1.2rem;
  font-size: .7rem;
  font-weight: bold;
  line-height: 18px;
  border-radius: 100%;
  background: #fff;
}

.invisible {
  visibility: hidden;
}

.no-border {
  border: none;
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