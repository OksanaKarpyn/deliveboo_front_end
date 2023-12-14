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
  <nav class="navbar navbar-expand-md " style="height: 60px;">
    <div class="container ">
        <div class="d-flex align-items-center">
            <router-link class="navbar-brand d-flex align-items-center" to="/">
              <img  src="../../1.png" alt="" style="max-height: 70px;">
              <div><i class="fa-solid fa-burger"></i> Deliveboo</div>
            </router-link>
        </div>
        

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="#">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="http://localhost:5173/"></a>
                </li>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                <!-- Authentication Links -->
                <li class="nav-item">
                    <a class="nav-link" href="/ListaRistoranti">Lista restoranti</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link bottonemedico" href="http://127.0.0.1:8000/login">ACCEDI</a>
                </li>
              
            </ul>
        </div>
    </div>
</nav>

<!-- 
<nav class="navbar navbar-expand-lg bg-danger">
  <div class="container">
  
    <a class="navbar-brand fw-bold text-white" href="/">
      DELIVEBOO
    </a>
  
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
</nav> -->


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