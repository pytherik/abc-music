<script setup lang="ts">
</script>

<template>
  <main class="bg-picture">
    <div class="home-container">
    <h1>ABC-Guitar-Helper</h1>
      <div class="text">
      <h3>Du spielst Gitarre oder möchtest es lernen?</h3>
      <p>Dann kannst Du Dir hier, ob Du nun blutiger Anfänger bist oder schon
        im fortgeschrittennen Stadium, die Gitarrenakkorde zu jeder beliebigen
        Tonart anzeigen lassen.</p>
        <p>Die Verwandtschaft zu anderen Tonarten habe ich versucht so intuitiv
          und übersichtlich wie möglich zu gestalten: klicke im Quintenzirkel einfach
        auf die gewünschte Tonart und schau dir an, welche Möglichkeiten sich dir eröffnen!</p>
      <p>Ich hoffe Du schöpfst hier Inspiration und lernst ein wenig die Grundlagen
        der Musiktheorie.</p>
      </div>
        <RouterLink to="/circle-of-keys">
      <div class="text">
          <span class="guitar-icon">🎸</span> Leg' am besten gleich los!
      </div>
        </RouterLink>
    </div>
  </main>
</template>
<style scoped>

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

a {
  cursor: pointer;
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.text {
  width: 380px;
 }

.guitar-icon {
  font-size: 2rem;
}
</style>
