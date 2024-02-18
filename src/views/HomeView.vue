<script setup lang="ts">
</script>

<template>
  <main>
    <div class="home-container">
    <h1>ABC-Guitar-Helper</h1>
      <div class="text">
      <h3>Dies ist eine Seite für Gitarristen.</h3>
      <p>Hier kannst du dir, ob du nun blutiger Anfänger bist oder schon
        im fortgeschrittennen Stadium, die Gitarrenakkorde zu jeder beliebigen
        Tonart anzeigen lassen.</p>
        <p>Die Verwandtschaft zu anderen Tonarten habe ich versucht so intuitiv
          und übersichtlich wie möglich zu gestalten: klicke im Quintenzirkel einfach
        auf die gewünschte Tonart und schau dir an, welche Möglichkeiten sich dir eröffnen!</p>
      <p>Ich hoffe du schöpfst hier Inspiration und lernst ein wenig die Grundlagen
        der Musiktheorie.</p>
      </div>
        <RouterLink to="/circle-of-keys">
      <div class="text">
          Leg' am besten gleich los!
      </div>
        </RouterLink>
    </div>
  </main>
</template>
<style scoped>
main {
  background-image: url('https://picsum.photos/1920/1080?grayscale&blur=3');
  background-size: cover;
}

.home-container {
  width: 550px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  background: #CCC087dd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
}

.text {
  width: 400px;
 }
</style>
