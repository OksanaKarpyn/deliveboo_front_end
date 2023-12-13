<script>
import  { store } from "../data/store";
export default {
  name: 'AppPayments',
  data() {
    return {
        store
    }
  },
  methods: {
    payment() {
        console.log("ciao");
        const token = '8xctsvwwvdbyksqp';
        braintree.dropin.create({
        authorization: token,
        container: '#dropin-container'
    }, (error, dropinInstance) => {
        if (error) console.error(error);

        form.addEventListener('submit', event => {
            event.preventDefault();

            dropinInstance.requestPaymentMethod((error, payload) => {
                if (error) console.error(error);

                document.getElementById('nonce').value = payload.nonce;
                form.submit();
            });
        });
    });
    },
    paymentJs() {
        var button = document.querySelector('#submit-button');

        braintree.dropin.create({
        authorization: 'sandbox_g42y39zw_8xctsvwwvdbyksqp',
        selector: '#dropin-container'
        }, function (err, instance) {
        button.addEventListener('click', function () {
            instance.requestPaymentMethod(function (err, payload) {
            // Submit payload.nonce to your server
            });
        })
    });
    }
  },
  mounted() {
    this.payment();
  }
}
</script>

<template>
    <div id="dropin-container"></div>
    <button id="submit-button" @click="this.payment()" class="button button--small button--green">Purchase</button>
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