<script setup lang="ts">
import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'

const musicStore = useMusicStore();
const { relatedKeys } = storeToRefs(musicStore);
const { changeChord } = musicStore;

function handleChange(e: any, relation: any) {
  changeChord(relation);
  document.querySelectorAll('.related-chord').forEach(sibling => {
    sibling.classList.remove('active');
  })
  e.target.classList.add('active');
}
</script>

<template>
<div>
  <h4>Zu {{ relatedKeys!.selected.longName}} passen:</h4>
  <h5 class="related-chord active"
      @click="handleChange($event, relatedKeys!.selected)">
    {{ relatedKeys!.selected.longName }} : Tonika
  </h5>
  <h5 class="related-chord"
      @click="handleChange($event, relatedKeys!.sub)">
    {{ relatedKeys!.sub.longName }} : Subdominante
  </h5>
  <h5 class="related-chord"
      @click="handleChange($event, relatedKeys!.dom)">
    {{ relatedKeys!.dom.longName }} : Dominante
  </h5>
  <h5 class="related-chord"
      @click="handleChange($event, relatedKeys!.parallel)">
    {{ relatedKeys!.parallel.longName }} : Parallele
  </h5>
  <h5 class="related-chord"
      @click="handleChange($event, relatedKeys!.subParallel)">
    {{ relatedKeys!.subParallel.longName }} : Sub.-Parallele
  </h5>
  <h5 class="related-chord"
      @click="handleChange($event, relatedKeys!.domParallel)">
    {{ relatedKeys!.domParallel.longName }} : Dom.-Parallele
  </h5>
</div>
</template>

<style scoped>
h4, h5 {
  margin: 0 0;
}

h4 {
  margin: 1rem 0 .5rem 0;
}
.related-chord {
  cursor: pointer;
  margin-bottom: .1rem;
  color: #555;
}

.related-chord:hover {
  color: #111;
}

.active {
  color: #111;
}


</style>