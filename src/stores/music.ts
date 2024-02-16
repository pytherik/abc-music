import { ref } from 'vue';
import { defineStore } from 'pinia';
import { sharpScale, flatScale, keys } from '@/services/data'

export const useMusicStore = defineStore('music', () => {
  const selectedKey = ref();
  const showFret = ref(false);
  const strings = ref<string[][]>([]);
  const relatedKeys = ref<any>([]);
  const scale = ref();
  const chordTones = ref();

  function getCord(start: number) {
    const allNotes = selectedKey.value?.flat === 'true' ? flatScale: sharpScale;
    const cord: string[] = [];
    let j = 0;
    for (let i = 0; i < 12; i++) {
      +i + +start < 12 ? j = +i + +start : j = -12 + +i + +start;
        cord.push(allNotes[j]);
    }
    return cord;
  }

    function changeChord(key:any) {
    selectedKey.value = key;
  }

  function showFretboard(key: any) {
    const starts = [4, 11, 7, 2, 9, 4];
    strings.value = [];
    selectedKey.value = key;
    relatedKeys.value = getRelatedKeys(key);
    starts.forEach(start => {
      strings.value.push(getCord(start));
    });
    showFret.value = true;
  }

  function getRelatedKeys(key: any) {
    scale.value = getCord(key.root);
    if(key.mode === 'minor') {
      chordTones.value = [scale.value[0], scale.value[3], scale.value[7]]
    } else {
      chordTones.value = [scale.value[0], scale.value[4], scale.value[7]]
    }

    return {
      selected: key,
      parallel: keys[key.parallel],
      sub: keys[key.sub],
      dom: keys[key.dom],
      subParallel: keys [keys[key.sub].parallel],
      domParallel: keys [keys[key.dom].parallel]
    }
  }

  return {
    selectedKey,
    relatedKeys,
    showFret,
    strings,
    scale,
    chordTones,
    changeChord,
    showFretboard,
    getRelatedKeys,
  };
});
