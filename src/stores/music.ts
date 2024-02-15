import { ref } from 'vue';
import { defineStore } from 'pinia';
import { allNotes } from '@/services/data';

export const useMusicStore = defineStore('music', () => {
  const selectedKey = ref();
  const showFret = ref(false);
  const strings = ref<string[][]>([]);

  function getCord(start: number) {
    const cord: string[] = [];
    let j = 0;
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
    return cord;
  }

  function showFretboard(key: any) {
    const starts = [4, 11, 7, 2, 9, 4];
    strings.value = [];
    selectedKey.value = key;
    starts.forEach(start => {
      strings.value.push(getCord(start));
    });
    showFret.value = true;
  }

  return {
    selectedKey,
    showFret,
    strings,
    showFretboard,
    getCord
  };
});
