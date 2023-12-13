  <script>
  import { store } from "../data/store";
  export default {
    name: 'AppPayments',
    data() {
      return {
        store,
        token: 'sandbox_g42y39zw_348pk9cgf3bgyw2b', 
      }
    },
    methods: {


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
      // Make an HTTP request to your server to handle the payment
      // You can use libraries like Axios or the native Fetch API
      // Example using Axios:
      // axios.post('/your-server-endpoint', { nonce: payload.nonce })
      //   .then(response => {
      //     // Handle the server response
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });

      // For demonstration purposes, log a message here
      console.log('Sending payment details to the server:', payload);

      // Add any other logic you need after sending payment details
    },
  

    //     payment() {
    //         console.log("ciao");
    //         const token = '8xctsvwwvdbyksqp';

    //         braintree.dropin.create({
    //             authorization: token,
    //             container: '#dropin-container'
    //         }, (error, dropinInstance) => {
    //             if (error) console.error(error);

    //             // Assuming you have a form with the ID 'payment-form'
    //             const form = document.getElementById('payment-form');

    //             form.addEventListener('submit', event => {
    //             event.preventDefault();

    //             dropinInstance.requestPaymentMethod((error, payload) => {
    //                 if (error) console.error(error);

    //                 document.getElementById('nonce').value = payload.nonce;
    //                 form.submit();
    //             });
    //             });
    //         });
    //     },

    //     paymentJs() {
    //       var button = document.querySelector('#submit-button');
    
    //       braintree.dropin.create({
    //           authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
    //         selector: '#dropin-container'
    //       }, (err, instance) => {
    //         instance.requestPaymentMethod((err, payload) => {
    //           // Submit payload.nonce to your server
    //           console.log(payload);
    //         });
    //       });
        
    //   },
      },
    mounted() {
        this.initializeBraintree();
      //this.payment();
      //this.paymentJs();
    }
  }
  </script>
<template>
    <div>
        <div id="dropin-container"></div>
        <form @submit.prevent="submitPayment">
          <!-- Other form fields can go here -->
          <button type="submit">Submit Payment</button>
        </form>
      </div>



    <!-- <div>
      <div id="dropin-container"></div>
      <button @click="paymentJs(), payment()" class="button button--small button--green">Purchase</button>
    </div> -->
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
  