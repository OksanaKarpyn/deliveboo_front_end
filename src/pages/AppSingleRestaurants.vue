<script>
import { store } from '../data/store';
import Cart from '../components/Cart.vue';


export default{
   name: "SingleRestaurants",
   components: {Cart},
   data() {
      return {
         store,
      };
   },
   mounted() {
      store.getSingleRestaurant(this.$route.params.id);
   },
   methods: {},
}
</script>
<template>
   
   <div class="container">
      <div class="row">
         <header class="d-flex justify-content-between align-items-center py-3  border border-warning bg-body-secondary rounded-pill px-6">
            <h1>Your dishes</h1>
            <div class="shopping">
               
               <Cart/>
               
            </div>
         </header>
      </div>
      


      <div class="row">
         <div class="dishes d-flex justify-content-between gap-4">
            <div class="card my-card bg-success-subtle" style="width: 18rem;" v-for="(dish, index) in store.singleRestaurant.dishes" :key="index">
               <img v-if="`${store.urlImg}${dish.photo}` === '' " src="https://picsum.photos/300/100?random" :aria-autocomplete="dish.name">
               <img :src="`${store.urlImg}${dish.photo}`" :alt="dish.name">
               <div class="card-body bg-success-subtle">
                  <h5 class="card-title">{{dish.name}}</h5>
                  <p class="card-text">{{dish.price}}</p>
                  <button class="btn btn-primary"  @click="store.addProduct(dish)">Add plate to cart</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<style scoped>
.card-img img{
   width: 80px;
}

.my-card {
   margin-top: 30px;
}
</style>