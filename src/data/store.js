import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
        baseUrl:"http://127.0.0.1:8000/api/",
        urlImg:'http://127.0.0.1:8000/storage/',
        urlRestaurants: "apiRestaurant",
        urlTypology: "apiTypology",
        urlDishes:"apiDish",
        orders:"orders",
        restaurants: [],
        singleRestaurant: [],
        typology: [],
        selectedTypologies: [],
        loading: false,
        cart: [],
        total: 0,
        getTotal: localStorage.getItem('cartTotal'),

        newOrder: {
            name: "",
            lastname: "",
            address: "",
            phone: "",
        },

        getTypology() {
            this.loading = true;
            axios.get(this.baseUrl + this.urlTypology)
            .then(response => {
                this.typology = response.data.results;
                this.loading = false;
                console.log(this.typology);
            })
        },

        getRestaurants(typologies) {
            this.loading = true;
            axios.get(this.baseUrl + this.urlRestaurants, { params: { typologies } })
            .then(response => {
                this.restaurants = response.data.results;
                this.loading = false;
                console.log(this.restaurants);
            })
        },

        toggleTypology(typology) {
            // Verifica se la tipologia è già presente in selectedTypologies
            const index = this.selectedTypologies.indexOf(typology.name);
      
            // Se presente, rimuovila; altrimenti, aggiungila
            if (index !== -1) {
              this.selectedTypologies.splice(index, 1);
            } else {
              this.selectedTypologies.push(typology.name);
            }
          },
          getSingleRestaurant(id) {
            this.loading = true;
            axios.get(`${this.baseUrl}${this.urlRestaurants}/${id}`)
            .then(response => {
                this.singleRestaurant = response.data.results;
                this.loading = false;
                console.log(this.singleRestaurant);
            })
        },

        addProduct(item) {
          // CREAZIONE CARRELLO VUOTO SE NON ESISTE
          if (!localStorage.getItem('cart')) {
              localStorage.setItem('cart', JSON.stringify([]));
          }
          const cart = JSON.parse(localStorage.getItem('cart'));
  
          // VERIFICA SE L'ITEM è GIA' PRESENTE NEL CARRELLO E NE AGGIUNGE LA QUANTITA'
          const existItem = cart.find((e) => e.id === item.id);
          if (existItem) {
              existItem.quantity++
          } else {
              const newItem = {
                  ...item,
                  "quantity": 1
              }
              cart.push(newItem);
          }
          this.cart = cart
          localStorage.setItem('cart', JSON.stringify(cart));
  
          this.sumPrice();
        },
        subProduct(item) {
          const cart = JSON.parse(localStorage.getItem('cart'));
          if (!cart) {
              return
          }
          const existItem = cart.find((e) => e.id === item.id);
          if (existItem) {
              if (existItem.quantity <= 1) {
                  const index = cart.indexOf(existItem);
                  cart.splice(index, 1);
              } else {
                  existItem.quantity--
              }
          }
          if (cart.length == 0) {
              this.cleanCart()
          } else {
              localStorage.setItem('cart', JSON.stringify(cart));
              this.cart = cart
          }

          this.sumPrice();
        },
        cleanCart() {
          localStorage.removeItem("cart")
          this.cart = [];
          this.total = 0;
        },
        getTotalPrice(){
            return this.getTotal 
        },

        sumPrice(){
          let sum = 0
          this.cart.forEach(element => {
              sum += (element.price * element.quantity)
          });
          this.total = sum.toFixed(2);
          
          localStorage.setItem('cartTotal', this.total);
        },





})