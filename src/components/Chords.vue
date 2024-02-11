<script setup lang="ts">
const { selectedKey } = defineProps(['selectedKey'])

const fretSize = max(selectedKey.chords[0]);
function max(arr: number[]) {
  return Math.max.apply(null, arr);
}
</script>

<template>
  <div class="board">
    <div  class="fret">
      <div v-for="i in selectedKey.chords[0].length" :key="i" class="bridge"/>
    </div>
    <div class="fret" v-for="index in fretSize" :key="index">
      <div v-for="(string, idx) in selectedKey.chords[0]"
           :key="idx" :class="[idx === 0 ? 'string small': 'string']">
        <div class="finger" v-if="string === index">{{ string }}</div>
      </div>
      <div class="string small no-border"/>
    </div>
  </div>
</template>

<style scoped>
.board {
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

.bridge {
  width: 5px;
  height: 20px;
  background: linear-gradient(#333, #000);
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
</style>