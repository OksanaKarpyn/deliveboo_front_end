<script>
import { store } from "../data/store";

export default{
    name: "AppTypologies",
    data() {
        return {
            store
        }
    },
    props: {
        typology: Object
    }

}

</script>

<template>
    <div class="card bg-body-secondary">
        <label :for="typology.id" :class="{ 'active-label': store.selectedTypologies.includes(typology.name), 'd-flex justify-content-center p-3': true }">
          <input type="checkbox" :id="typology.id" :value="typology.name" v-model="store.selectedTypologies">
          {{ typology.name }}
        </label>
    </div>
</template>

<style scoped lang="scss">
    input{
        display: none;
    }
    label:hover{
        cursor: pointer;
    }
    label.active-label{
        color: red;
    }
</style>