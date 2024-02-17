<script setup lang="ts">
import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'

const musicStore = useMusicStore()
const { scale, majorScale } = storeToRefs(musicStore)

const scaleTones = [
  'F', 'E', 'D', 'C', 'B', 'A', 'G', 'F',
  'E', 'D', 'C', 'B', 'A', 'G', 'F', 'E',
  'D', 'C', 'B', 'A', 'G', 'F', 'E', 'D'
]

</script>

<template>
  <div class="scale-container">
    <div v-for="tone in majorScale" :key="tone" class="scale">
      <div class="tone" v-for="idx in 22" :key="idx">
        <div class="inner"
             :class="[idx % 2 !== 0 ? 'gap': idx <= 6 || idx > 16 ? 'line small': 'line']">
          <div :class="[idx % 2 === 0 ? 'line-tone': 'gap-tone']"
               v-if="tone.includes(scaleTones[idx - 1])">
            <img src="/images/icons/full-note.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  <div class="scale-container">-->
  <!--    <div v-for="tone in scale" :key="tone" class="scale">-->
  <!--      <div class="tone" v-for="idx in 22" :key="idx">-->
  <!--        <div :class="[(idx <= 6 || idx > 16) && (!tone.includes(scaleTones[idx-1])) ? 'invisible': '']">-->
  <!--          <div class="inner"-->
  <!--               :class="[idx % 2 !== 0 ? 'gap': idx <= 6 || idx > 16 ? 'line small': 'line']">-->
  <!--            <div :class="[idx % 2 === 0 ? 'line-tone': 'gap-tone']"-->
  <!--                 v-if="tone.includes(scaleTones[idx - 1])">-->
  <!--              <img src="/images/icons/full-note.png" alt="">-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<style scoped>
.scale-container {
  display: flex;
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

img {
  width: 13px;
}

.invisible {
  visibility: hidden;
}
</style>