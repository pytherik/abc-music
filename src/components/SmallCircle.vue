<script setup lang="ts">

import { keys } from '@/services/data'
</script>

<template>
    <main class="bg-picture">
      <div class="circle-container">
        <h2>Der Quintenzirkel</h2>
        <div class="circle-small gradient">
          <img class="clef" src="/images/icons/clef.png" alt="clef">
          <div class="keys"
               v-for="key in keys"
               :key="key.id"
               :style="{'top': `${key.pos[0] * .5}px`,'right': `${key.pos[1] * .5}px` }"
               :class="[key.mode === 'major' ? 'keys-major': 'keys-minor']">
            {{ key.name }}
            <span v-if="key.pitch && key.pitch === 'up'">&#9839;</span>
            <span v-if="key.pitch && key.pitch === 'down'">&#9837;</span>
            <span v-if="key.id === 7 || key.id === 20">|</span>
          </div>
        </div>
      </div>
    </main>
</template>

<style scoped>
h2 {
  margin-top: 2rem;
}

.circle-container {
  margin-top: 4rem;
  width: 700px;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #CCC087dd;
  border-radius: 110px;
  box-shadow: 2px 2px 5px #000;
}

.circle-small {
  margin-top: 3rem;
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 100%;
  box-shadow: 2px 2px 5px #000;
}

.keys {
  cursor: pointer;
  position: absolute;
  font-size: 1rem;
  display: flex;
}

.keys-minor {
  color: #dedeed;
}

.keys-minor:hover,
.keys-major:hover {
  color: #61F773;
  font-weight: bold;
}

.clef {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
}
</style>