import { ref } from 'vue'
import { defineStore } from 'pinia'
import { sharpScale, flatScale, keys } from '@/services/data'

export const useMusicStore = defineStore('music', () => {
  const selectedKey = ref()
  const showFret = ref(false)
  const strings = ref<string[][]>([])
  const relatedKeys = ref<any>([])
  const scale = ref()
  const majorScale = ref();
  const minorScale = ref();
  const chordTones = ref()
  const flat = ref(false)

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
    majorScale.value = scale.value.filter((tone: string, idx: number) => idx.toString().match(/^0+|2|4|5|7|9|^11/))
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
    majorScale,
    minorScale,
    changeChord,
    showFretboard,
    getRelatedKeys
  }
})
