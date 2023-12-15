<script>
import { store } from '../data/store';

export default{
    name: "Cart",
    data(){
        return{
            store
        }
    },
    created() {
        let localeStorageCart = localStorage.getItem('cart')
        if (localeStorageCart) {
            localeStorageCart = JSON.parse(localeStorageCart); 
            store.cart = localeStorageCart;
        } else {
            store.cart = [];
        }
    },
    mounted() {
        store.sumPrice()
    }
}
</script>

<template>

<!-- CARRELLO -->
<button class="btn btn-primary mx-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa fa-cart-shopping"></i></button>
<span class="badge bg-secondary">{{ store.cart.length }}</span>
<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="row w-100 border border-warning">
            <!-- V-FOR PER I PIATTI NEL CARRELLO -->
            <div class="d-flex border border-danger"  v-for="item in store.cart">
                <div class="card-img">
                    <img :src="item.image" class="card-img-top d-block h-100"  :alt="item.name">
                </div>
                <div class="card-body">
                    <span class="card-text">{{ item.name }}</span>
                    <p class="card-text border border-danger">{{  item.price * item.quantity }}</p>
                </div>
                <button class="btn ntn-outline-secondary" @click="store.subProduct(item)">-</button>
                    {{ item.quantity }}
                <button class="btn ntn-outline-secondary" @click="store.addProduct(item)">+</button>
            </div>
        </div>  
        <div class="row">
            <div class="total-price d-flex">
                <span>Total Price: {{ store.total }}</span>
            </div>
            <div class="ordine">
                <router-link :to="{name: 'Payment' }" class="btn btn-primary">Paga</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<style>
</style>