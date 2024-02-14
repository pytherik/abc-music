import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { allNotes } from '@/services/data'

const starts = [4, 11, 7, 2, 9, 4];
let cord: string[] = [];
const strings = ref<string[][]>([]);
export const useMusicStore = defineStore('music', () => {
  const selectedKey = ref();
  const showFret = ref(false);

  function showFretboard(key: any) {
    strings.value = []
    selectedKey.value = key;
    let j = 0;
    starts.forEach(start => {
      cord = [];
      for (let i = 0; i < 12; i++) {
        +i + +start < 12 ? j = +i + +start : j = -12 + +i + +start;
        if (typeof allNotes[j.toString()] === 'string') {
          cord.push(allNotes[j.toString()]);
        } else {
          if (selectedKey.value?.flat === 'true') {
            cord.push(allNotes[j.toString()]['1']);
          } else {
            cord.push(allNotes[j.toString()]['0']);
          }
        }
      }
      strings.value.push(cord);
      showFret.value = true;
    });
  }
  return {
    selectedKey,
    showFret,
    strings,
    showFretboard,
  }
})
