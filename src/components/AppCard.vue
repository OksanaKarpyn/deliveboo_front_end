<script>
import { store } from '../data/store';

export default{
    name: "AppCard",
    data() {
        return {
            store
        }
    },
    props: {
        restaurant: Object,
    },
}
</script>

<template>
    <div class="card">
        <router-link :to="{ name: 'AppSingleRestaurants', params: { id: restaurant.id } }">
             <img  v-if="restaurant.photo === 'null'" class="card-img-top" src="https://picsum.photos/300/100?random" alt="">
             <img v-else :src="`${store.urlImg}${restaurant.photo}`" :alt="restaurant.name">
             <div class="card-title p-1 m-0">
                 <h5>{{ restaurant.name }}</h5>
             </div>
             
       </router-link>
    </div>
</template>

<style scoped lang="scss">

</style>