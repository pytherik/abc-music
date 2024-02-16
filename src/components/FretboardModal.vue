<script setup lang="ts">
import Chords from '@/components/Chords.vue';
import FullFret from '@/components/FullFret.vue';
import { useMusicStore } from '@/stores/music';
import { storeToRefs } from 'pinia';
import { keys } from '@/services/data';

const musicStore = useMusicStore();
const { selectedKey, relatedKeys, chordTones } = storeToRefs(musicStore);
const { getRelatedKeys } = musicStore;
const emits = defineEmits(['closeModal']);

function changeSelectedKey(id: number) {
  selectedKey.value = keys[id];
  relatedKeys.value = getRelatedKeys(keys[id]);
  const siblings = document.querySelectorAll('.related-chord');
  siblings.forEach(sibling => {
    sibling.classList.remove('active');
  });
  siblings[0].classList.add('active');
}
</script>

<template>
  <div class="modal">
    <div class="inner-modal">
      <i class="pi pi-times" @click="emits('closeModal')" />
<!--      <div class="common">-->
        <div class="relations-container">
          <div class="relations subdominant">
            <div>
              <h5>Subdominante</h5>
              <span class="sub rel-link"
                    @click="changeSelectedKey(relatedKeys.selected.sub)">
                {{ relatedKeys.sub.longName }}/</span>
              <span class="parallel rel-link"
                    @click="changeSelectedKey(relatedKeys.sub.parallel)">
                {{ relatedKeys.subParallel.longName }}
              </span>
            </div>
            <img :src="relatedKeys.sub.accidental" alt="accidental">
          </div>
          <div class="relations tonic">
            <h4>Tonika</h4>
            <div>
              <span class="long-name">{{ relatedKeys.selected.longName }}/</span>
              <span class="parallel rel-link"
                    @click="changeSelectedKey(relatedKeys.selected.parallel)">
                {{ relatedKeys.parallel.longName }}
              </span>
            </div>
            <img :src="relatedKeys.selected.accidental" alt="accidental">
          </div>
          <div class="relations dominant">
            <h5>Dominante</h5>
            <div>
              <span class="dom rel-link"
                    @click="changeSelectedKey(relatedKeys.selected.dom)">
                {{ relatedKeys.dom.longName }}/</span>
              <span class="parallel rel-link"
                    @click="changeSelectedKey(relatedKeys.dom.parallel)">
                {{ relatedKeys.domParallel.longName }}
              </span>
            </div>
            <img :src="relatedKeys.dom.accidental" alt="accidental">
          </div>
        </div>
        <Chords />
<!--      </div>-->
      <FullFret />
    </div>
  </div>
</template>

<style scoped>
h4, h5 {
  margin: .5rem 0;
}

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
  background: #92C1CE;
  min-width: 650px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  border-radius: 5px;
}

.common {
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
  color: #dedeed;
  font-weight: bold;
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
  background: #C49F3E99;
  border-radius: 5px;
  padding-bottom: .5rem;
}

img {
  width: 60px;
}
</style>