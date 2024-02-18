<script setup lang="ts">
import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'
import { scaleTones } from '@/services/data'

const musicStore = useMusicStore()
const { currentScale, relatedKeys } = storeToRefs(musicStore)


</script>

<template>
  <div class="scale-container">
    <span class="long-name">{{ relatedKeys.selected.longName }}</span>
    <img class="accidental" :src="relatedKeys.selected.accidentalScale" alt="accidentals">
    <div class="scale" v-for="idx in 2" :key="idx">
    <div class="tone big" v-for="idx in 22" :key="idx">
      <div class="inner"
           :class="[idx % 2 !== 0 ? 'gap': idx <= 6 || idx > 16 ? 'line invisible': 'line']">
      </div>
    </div>
    </div>
    <div v-for="tone in currentScale" :key="tone" class="scale">
      <div class="tone" v-for="idx in 22" :key="idx">
        <div class="inner"
             :class="[idx % 2 !== 0 ? 'gap': idx <= 6 || idx > 16 ? 'line small': 'line']">
          <div :class="[idx % 2 === 0 ? 'line-tone': 'gap-tone']"
               v-if="tone.includes(scaleTones[idx - 1])">
            <img class="full-note" src="/images/icons/full-note.png" alt="">
          </div>
        </div>
      </div>
     <span class="name">{{ tone }}</span>
    </div>
  </div>
</template>

<style scoped>
.scale-container {
  display: flex;
  position: relative;
}

.scale {
  font-size: 8px;
  display: flex;
  flex-direction: column;
}

.tone {
  position: relative;
  width: 30px;
}

.big {
  width: 35px;
}
.gap, .line {
  width: 100%;
  height: 6px;
}

.line {
  height: 1px;
  border-bottom: 1px solid #333;
}

.small {
  border-color: #aaa;
  width: 50%;
}

.gap-tone {
  position: absolute;
  top: -3px;
}

.line-tone {
  position: absolute;
  top: -5px;
}

.accidental {
  position: absolute;
  top: 11px;
  left: 0;
  width: 75px;
}

.long-name {
  position: absolute;
  top:79px;
  left: -5px;
  padding: 0 4px;
  background: #CCC087;
  border-radius: 5px;
}

.name {
  margin-top: 0.3rem;
  font-size: 0.7rem;
  font-weight: bold;
}

.full-note {
  width: 13px;
}

.invisible {
  visibility: hidden;
}
</style>