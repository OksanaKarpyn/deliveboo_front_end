<script>
import { store } from '../data/store';

export default {
    name:'AppHeader',
    data() {
        return {
            store: store
        }
    },
    mounted() {
      store.getTypology();
    }
}
</script>

<template>

<nav class="navbar navbar-expand-lg bg-danger">
  <div class="container">
    <!-- NAV IMG -->
    <a class="navbar-brand fw-bold text-white" href="/">
      DELIVEBOO
    </a>
    <!-- NAV TEXT -->
    <div id="navbarText ">
      <a href="/" class="navbar-text mx-4 text-decoration-none fw-bold text-white">
        ABOUT US
      </a>
      <a href="/" class="navbar-text mx-4 text-decoration-none fw-bold text-white">
        ABOUT US
      </a>
      <a href="/" class="navbar-text mx-4 text-decoration-none fw-bold text-white">
        ABOUT US
      </a>
    </div>
  </div>
</nav>
<!-- <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      dropdown ricerca
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          seleziona le categorie
        </button>
        <ul class="dropdown-menu">
          <li v-if="store.loading">Caricamento</li>
          <li v-else>
            <li v-for="typology in store.typology" :key="typology.id">
              <label :for="typology.id">
                <input type="checkbox" :id="typology.id" :value="typology.name" v-model="store.selectedTypologies">
                {{ typology.name }}
              </label>
            </li>
          </li>
          <router-link  :to="{name: 'Restaurant_list' }" class="btn btn-outline-success" type="submit">Visualizza i nostri piatti</router-link>
        </ul>
      </div>
    </div>
  </nav> -->
</template>

<style lang="scss" scoped>

</style>