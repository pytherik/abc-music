import { ref } from 'vue'
import { defineStore } from 'pinia'
import { sharpScale, flatScale, keys } from '@/services/data'

export const useMusicStore = defineStore('music', () => {
  const selectedKey = ref()
  const showFret = ref(false)
  const strings = ref<string[][]>([])
  const relatedKeys = ref<any>([])
  const scale = ref()
  const currentScale = ref();
  const chordTones = ref()
  const flat = ref(false)
  const hint = ref(true);

  function getCord(start: number) {
    const allNotes = flat.value ? flatScale : sharpScale
    const cord: string[] = []
    let j = 0
    for (let i = 0; i < 12; i++) {
      +i + +start < 12 ? j = +i + +start : j = -12 + +i + +start
      cord.push(allNotes[j])
    }
    return cord
  }
  // function getCord(start: number) {
  //   const allNotes = flat.value ? flatScale : sharpScale
  //   const cord: string[] = []
  //   let j, k = 0;
  //   for (let i = 0; i < 15; i++) {
  //     i > 12 ? k = i - 12: k;
  //     +k + +start < 12 ? j = +k + +start : j = -12 + +k + +start
  //     cord.push(allNotes[j])
  //   }
  //   return cord
  // }

  function changeChord(key: any) {
    selectedKey.value = key
  }

  function formatFretboard() {
    const starts = [4, 11, 7, 2, 9, 4]

    starts.forEach(start => {
      strings.value.push(getCord(start))
    })
  }

  function showFretboard(key: any) {
    strings.value = []
    selectedKey.value = key
    selectedKey.value.flat === 'true' ? flat.value = true : flat.value = false
    relatedKeys.value = getRelatedKeys(key)
    formatFretboard()
    showFret.value = true
  }

  function getRelatedKeys(key: any) {
    scale.value = getCord(key.root)
    const pattern = key.mode === 'major' ?  /^0+|2|4|5|7|9|^11/ : /^0+|2|3|5|7|8|^10/
    currentScale.value = scale.value.filter((tone: string, idx: number) => {
      return idx.toString().match(pattern)
    })
    if (key.mode === 'minor') {
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
    currentScale,
    hint,
    changeChord,
    showFretboard,
    getRelatedKeys
  }
})
