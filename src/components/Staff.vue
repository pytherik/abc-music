<script setup lang="ts">

</script>

<template>
<div class="score">
  <div class="line" v-for="line in 5" :key="line">
    <div class="fret-section" v-for="idx in 12" :key="idx">
    </div>
  </div>
</div>
</template>

<style scoped>
.score {
  display: flex;
  flex-direction: column;
}

.line{
  display: flex;
}
.fret-section {
  width: 40px;
  height: 9px;
  border-bottom: 2px solid #000;
}
</style>