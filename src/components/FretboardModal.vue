<script setup lang="ts">
import Chords from '@/components/Chords.vue';
import FullFret from '@/components/FullFret.vue';
import { useMusicStore } from '@/stores/music';
import { storeToRefs } from 'pinia';
import { keys } from '@/services/data';

const musicStore = useMusicStore();
const { selectedKey } = storeToRefs(musicStore);
const emits = defineEmits(['closeModal']);

function changeSelected(id: number) {
  selectedKey.value = keys[id];
}
</script>

<template>
  <div class="modal">
    <div class="inner-modal">
      <i class="pi pi-times" @click="emits('closeModal')" />
      <div class="common">
        <div class="relations-container">
          <div class="relations subdominant">
            <div>
              <span class="sub rel-link"
                    @click="changeSelected(selectedKey.sub)">{{ keys[selectedKey.sub].longName }}/
              </span>
              <span class="parallel rel-link"
                    @click="changeSelected(keys[selectedKey.sub].parallel)">
                {{ keys[keys[selectedKey.sub].parallel].longName}}
              </span>
            </div>
            <img :src="keys[selectedKey.sub].accidental" alt="accidental">
          </div>
          <div class="relations tonic">
            <div>
              <span class="long-name">{{ selectedKey.longName }}/</span>
              <span class="parallel rel-link"
                    @click="changeSelected(selectedKey.parallel)">
                {{ keys[selectedKey.parallel].longName }}
              </span>
            </div>
            <img :src="selectedKey.accidental" alt="accidental">
          </div>
          <div class="relations dominant">
            <div>
              <span class="dom rel-link"
                    @click="changeSelected(selectedKey.dom)">
                {{ keys[selectedKey.dom].longName }}/</span>
              <span class="parallel rel-link"
                    @click="changeSelected(keys[selectedKey.dom].parallel)">
                {{ keys[keys[selectedKey.dom].parallel].longName }}
              </span>
            </div>
            <img :src="keys[selectedKey.dom].accidental" alt="accidental">
          </div>
        </div>
        <Chords />
      </div>
      <FullFret />
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: #000000aa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-modal {
  position: relative;
  background: #789FA9;
  min-width: 600px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  border-radius: 5px;
}

.sub, .dom {
  font-weight: bold;
}

.pi-times {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.long-name {
  font-size: 1.3rem;
  font-weight: bold;
}

.rel-link {
  cursor: pointer;
}

.rel-link:hover {
  color: #AA6D26;
}
.common {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.relations-container {
  margin: 1.5rem 0;
  width: 100%;
  display: flex;
}

.relations {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tonic {
  background: #C49F3E44;
  border-radius: 5px;
}

img {
  width: 100px;
}
</style>