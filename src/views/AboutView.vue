<template>
  <main class="main">
    <div class="container">
      <div class="card">
      <h2>Kontakt</h2>
      <span class="my-name">Erik Berndt</span>
      <a href="https://eberndt.live" target="_blank" class="my-email">erik.berndt@posteo.de</a>
      </div>
    </div>
  </main>
</template>

<style>

.container {
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.card {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  background-color: #D6F3F4aa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.my-name {
  font-weight: bold;
}

.my-email {
  margin-top: 2rem;
  padding: .5rem 1rem;
  color: #fa8e42;
  background: #333;
  border-radius: 10px;
}
</style>
