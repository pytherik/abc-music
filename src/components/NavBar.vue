<script setup lang="ts">

</script>

<template>
  <div class="nav-bar">
    <nav>
      <RouterLink class="link" to="/"><i class="pi pi-home" /> Home</RouterLink>
      <RouterLink class="link" to="/about"><i class="pi pi-info"/> About</RouterLink>
      <RouterLink class="link" to="/circle-of-keys"><i class="pi pi-circle"/> Quintenzirkel</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.link {
  color: #dedeed;
  margin: 0 1rem;
  cursor: pointer;
  padding: .3rem;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  background-color: #444;
}

.router-link-active,
.router-link-exact-active {
  background-color: #cd5c5c88;
  padding: 0.3rem;
  border-radius: 3px;
}
</style>

<style scoped>
.router-link-active,
.router-link-exact-active {
  background-color: #2939A9;
  border-radius: 3px;
}
</style>