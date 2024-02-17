<script setup lang="ts">

</script>

<template>
  <div>
  <h4>Legende</h4>
  <div class="digit">
    <div class="finger finger-legend">1</div><span>&nbsp; Zeigefinger</span>
  </div>
  <div class="digit">
    <div class="finger finger-legend">2</div><span>&nbsp; Mittelfinger</span>
  </div>
  <div class="digit">
    <div class="finger finger-legend">3</div><span>&nbsp; Ringfinger</span>
  </div>
  <div class="digit">
    <div class="finger finger-legend">4</div><span>&nbsp; Kl. Finger</span>
  </div>
  </div>
</template>

<style scoped>
h4 {
  margin: 1rem 0;
}

h5 {
  margin: .2rem 0;
}
.finger {
  font-size: 0.8rem;
  position: absolute;
  bottom: -10px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 15px;
  height: 15px;
  border: 1px solid #444;
  border-radius: 100%;
}

.finger-legend {
  position: relative;
  top: 0;
  margin-bottom: .2rem;
}

.digit {
  font-size: .8rem;
  display: flex;
}
</style>