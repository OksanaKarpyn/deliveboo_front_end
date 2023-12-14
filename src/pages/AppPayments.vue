  <script>
  import { store } from "../data/store";
  import axios from 'axios';

  export default {
    name: 'AppPayments',

    data() {
      return {
        store,
        name: "",
        lastname: "",
        address: "",
        phone: "",
        token: 'sandbox_g42y39zw_348pk9cgf3bgyw2b', 
      }
    },
    methods: {
      
      createOrder() {
        let data = {
                dishes: store.cart,
                data: {
                  name: this.name,
                  lastname: this.lastname,
                  address: this.address,
                  phone: this.phone,
                }
            }
        axios.post(store.baseUrl + store.orders, data)
            .then((r) => {
              console.log(data)
            }).catch(err => {
              console.log(err);
            })
          
        },

      initializeBraintree() {
        braintree.dropin.create(
          {
            authorization: this.token,
            container: '#dropin-container',
          },
          (error, dropinInstance) => {
            if (error) console.error(error);

            this.$data.dropinInstance = dropinInstance;
          }
        );
      },
      submitPayment() {
        this.dropinInstance.requestPaymentMethod((error, payload) => {
          if (error) {
            console.error(error);
            // Handle the error as needed
            return;
          }

          // Now you can perform additional actions with the payload if needed
          console.log(payload);

          // Send the payment details to your server
          this.sendPaymentDetails(payload);
        });
      },
      sendPaymentDetails(payload) {
        console.log('Sending payment details to the server:', payload);
      },
    },
    mounted() {
        this.initializeBraintree();
        store.gerTotalPrice();
    }
  }
  </script>
<template>
    <div class="container">
        <div class="row">
            <form class="row g-3" @submit.prevent="createOrder()" >
              <div class="col-md-6">
                <label for="name" class="form-label">Nome</label>
                <input v-model="name" type="text" class="form-control" id="name" name="name">
              </div>
              <div class="col-md-6">
                <label for="lastname" class="form-label">Cognome</label>
                <input v-model="lastname" type="text" class="form-control" id="lastname" name="lastname">
              </div>
              <div class="col-6">
                <label for="inputAddress" class="form-label">Indirizzo</label>
                <input v-model="address" type="text" class="form-control" id="inputAddress" placeholder="" name="address">
              </div>
              <div class="col-6">
                  <label for="phone" class="form-label">Cellulare</label>
                  <input v-model="phone" type="text" class="form-control" id="phone" name="phone">
                </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
              </div>
              <div>
                <div id="dropin-container"></div>
                <form @submit.prevent="submitPayment">
                  <!-- Other form fields can go here -->
                  <button type="submit">Submit Payment</button>
                </form>
              </div>
            </form>
            <div>
              <h3 class="py-4">Total = {{ store.getTotal }}</h3>
            </div>
        </div>
        <div class="row">
            
        </div>
    </div>
    
  </template>
  
  
  <style scoped lang="scss">
    .button {
      cursor: pointer;
      font-weight: 500;
      left: 3px;
      line-height: inherit;
      position: relative;
      text-decoration: none;
      text-align: center;
      border-style: solid;
      border-width: 1px;
      border-radius: 3px;
      -webkit-appearance: none;
      -moz-appearance: none;
      display: inline-block;
    }
  
    .button--small {
      padding: 10px 20px;
      font-size: 0.875rem;
    }
  
    .button--green {
      outline: none;
      background-color: #64d18a;
      border-color: #64d18a;
      color: white;
      transition: all 200ms ease;
    }
  
    .button--green:hover {
      background-color: #8bdda8;
      color: white;
    }
  </style>
  