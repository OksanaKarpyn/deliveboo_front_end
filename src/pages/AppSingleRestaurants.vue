<script>
import { store } from '../data/store';


export default{
    name: "SingleRestaurants",
    data() {
        return {
            store,
            cartItems: [],
        }
    },
    mounted(){
          // Carica il carrello da localStorage al caricamento della pagina
         const storedCartItems = localStorage.getItem('cartItems');
         if (storedCartItems) {
             this.cartItems = JSON.parse(storedCartItems);
         }
         store. getSingleRestaurant(this.$route.params.id);

    },
    computed: {
         totalCartItems() {
             return this.cartItems.reduce((total, item) => total + item.quantity, 0);
         },
         totalCartPrice() {
             return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
         },
    },
    
    methods: {
      addToCart(dish) {
         const existingItemIndex = this.cartItems.findIndex(item => item.dishId === dish.id);

         if (existingItemIndex !== -1) {
              // Se l'articolo esiste già nel carrello, aumenta la quantità
              this.cartItems[existingItemIndex].quantity++;
          } else {
              // Altrimenti, aggiungi l'articolo al carrello
              const newItem = {
                  dishId: dish.id,
                  name: dish.name,
                  price: dish.price,
                  image: dish.photo ? `${this.store.urlImg}${dish.photo}` : 'https://picsum.photos/300/100?random',
                  quantity: 1,
                  // altre proprietà necessarie
              };
              this.cartItems.push(newItem);
          }
       
         //  axios.post('', {dishId: dish.id})
         //  .then(response => {
         //      console.log(response.data);
         //  })

         this.saveCartToLocalStorage();
      },
      increaseQuantity(index) {
           // Aumenta la quantità dell'articolo nel carrello
           this.cartItems[index].quantity++;
           this.saveCartToLocalStorage();
      },
      decreaseQuantity(index) {
          // Diminuisci la quantità dell'articolo nel carrello
          if (this.cartItems[index].quantity > 1) {
              this.cartItems[index].quantity--;
          } else {
              // Se la quantità è 1 o meno, rimuovi l'articolo dal carrello
              this.cartItems.splice(index, 1);
          }
          this.saveCartToLocalStorage();
      },
      saveCartToLocalStorage() {
        // Salva il carrello in localStorage
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  },
}
</script>
<template>
   
   <div class="container">
      <div class="row">
         <header class="d-flex justify-content-between align-items-center py-3  border border-warning">
            <h1>Your dishes</h1>
            <div class="shopping">
               
             <!-- ------- -->
             <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa fa-cart-shopping"></i></button>
             <span class="badge bg-secondary">{{ cartItems.length }}</span>

             <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
               <div class="offcanvas-header">
                 <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
               <div class="offcanvas-body">
                  <div class="row w-100 border border-warning">
                     <div class="d-flex border border-danger"  v-for="(item, index) in cartItems" :key="index">
                        <div class="card-img">
                           <img :src="item.image" class="card-img-top d-block h-100"  :alt="item.name">
                        </div>
                        <div class="card-body">
                          <span class="card-text">{{ item.name }}</span>
                          <p class="card-text border border-danger">{{  item.price * item.quantity }}</p>
                        </div>
                        <button class="btn ntn-outline-secondary" @click="decreaseQuantity(index)">-</button>
                           {{ item.quantity }}
                     <button class="btn ntn-outline-secondary" @click="increaseQuantity(index)">+</button>
                     </div>
                  </div>  
                  <div class="row">
                     <div class="total-price d-flex">
                        <span>Total Price: {{ totalCartPrice }}</span>
                     </div>
                     <div class="ordine">
                        <button class="btn btn-primary">invia</button>
                     </div>
                  </div>
               </div>

             </div>
               

            </div>
         </header>
      </div>
      


      <div class="row">
         <div class="dishes d-flex justify-content-between gap-4">
            <div class="card" style="width: 18rem;" v-for="(dish, index) in store.singleRestaurant.dishes" :key="index">
               <img  v-if="`${store.urlImg}${dish.photo}` == 'null' " src="https://picsum.photos/300/100?random" :aria-autocomplete="dish.name">
               <img v-else :src="`${store.urlImg}${dish.photo}`" :alt="dish.name">
               <div class="card-body">
                 <h5 class="card-title">{{dish.name}}</h5>
                 <p class="card-text">{{dish.price}}</p>
                 <a href="#" class="btn btn-primary"  @click="addToCart(dish)">Add plate to cart</a>
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
</style>