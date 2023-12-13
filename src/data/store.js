import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
        baseUrl:"http://127.0.0.1:8000/api/",
        urlTypology: "apiTypology",
        urlRestaurants: "apiRestaurant",
        urlDishes:"apiDish",
        urlImg:'http://127.0.0.1:8000/storage/',
        typology: [],
        restaurants: [],
        singleRestaurant: [],
        selectedTypologies: [],
        loading: false,
        dishes:[],
        cartItems: [],

       
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



})