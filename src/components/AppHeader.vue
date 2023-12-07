<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
    name:'AppHeader',
    data() {
        return {
            store
        }
    },
    mounted() {
      store.getTypology();
    }
}
</script>

<template>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>

    <!-- dropdown ricerca -->
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li v-if="store.loading == true">Caricamento</li>

    <li v-else>
      <li v-for="typology in store.typology" :key="item">
        <label :for="typology.id"><input type="checkbox" :id="typology.id" :value="typology.name" >{{typology.name}}</label>
        </li>
    </li>
    

    <button  class="btn btn-outline-success" type="submit">Search</button>
  </ul>
    </div>
</div>
</nav>
</template>

<style lang="scss" scoped>

</style>