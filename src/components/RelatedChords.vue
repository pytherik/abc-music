<script setup lang="ts">
import { useMusicStore } from '@/stores/music'
import { storeToRefs } from 'pinia'

const musicStore = useMusicStore();
const { relatedKeys } = storeToRefs(musicStore);
const { changeChord } = musicStore;

function handleChange(e: any, relation: any) {
  changeChord(relation);
  handleActiveClass(e)
}

function handleActiveClass(e: any){
  document.querySelectorAll('.related-chord').forEach(sibling => {
    sibling.classList.remove('active');
  })
  e.target.classList.add('active');
}
</script>

<template>
<div>
  <h4>Zu {{ relatedKeys!.selected.longName}} passen:</h4>
  <ul>
  <li class="related-chord active"
      @click="handleChange($event, relatedKeys!.selected)">
    {{ relatedKeys!.selected.longName }} : Tonika
  </li>
  <li class="related-chord"
      @click="handleChange($event, relatedKeys!.sub)">
    {{ relatedKeys!.sub.longName }} : Subdominante
  </li>
  <li class="related-chord"
      @click="handleChange($event, relatedKeys!.dom)">
    {{ relatedKeys!.dom.longName }} : Dominante
  </li>
  <li class="related-chord"
      @click="handleChange($event, relatedKeys!.parallel)">
    {{ relatedKeys!.parallel.longName }} : Parallele
  </li>
  <li class="related-chord"
      @click="handleChange($event, relatedKeys!.subParallel)">
    {{ relatedKeys!.subParallel.longName }} : Sub.-Parallele
  </li>
  <li class="related-chord"
      @click="handleChange($event, relatedKeys!.domParallel)">
    {{ relatedKeys!.domParallel.longName }} : Dom.-Parallele
  </li>
  </ul>
</div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

h4 {
  margin: 1.5rem 0 0 0;
}

ul {
  list-style: none;
  font-size: .8rem;
  padding: 0;
  margin: .3rem 0 0 0;
}

.related-chord {
  cursor: pointer;
  margin-bottom: .1rem;
  color: #555;
}

.related-chord:hover {
  background: #B0AC77;
  border-radius: 5px;
  padding-left: 3px;
}

.active {
  color: #000;
  background: #CCC087;
  border-radius: 5px;
  padding-left: 3px;
}
</style>