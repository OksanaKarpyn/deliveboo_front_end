<script>
import { store } from "../data/store";
import AppCard from "../components/AppCard.vue";
import AppTypologies from "../components/AppTypologies.vue";

export default {
    name: "AppListRestaurant",
    components: {
        AppCard,
        AppTypologies
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        store.getRestaurants();
        store.getTypology()

    },
    watch: {
        'store.selectedTypologies': function (newTypologies, oldTypologies) {
            // Se la tipologia selezionata cambia, richiama la funzione getRestaurants
            if (JSON.stringify(newTypologies) !== JSON.stringify(oldTypologies)) {
                store.getRestaurants(newTypologies);
            }
        }
    }

}
</script>

<template>
    <div class="container-fluid mt-5">
        <div class="container">

            
            <!-- TIPOLOGIE -->
            <div class="row row-cols-1 row-cols-md-5 g-4 mb-5">
                <template v-for="typology in store.typology" :key="typology.id">
                    <div class="col">
                        <AppTypologies :typology="typology"/>
                    </div>
                </template>
            </div>

            <!-- CARICAMENTO -->
            <div v-if="store.loading" class="row text-center mb-5">
                <h4>Caricamento...</h4>
            </div>

            <!-- TUTTI I RISTORANTI -->
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <template v-for="restaurant in store.restaurants" :key="restaurant">
                    <div class="col">
                        <AppCard :restaurant="restaurant" />
                    </div>
                </template>
            </div>

        </div>
    </div>

</template>

<style scoped lang="scss"></style>