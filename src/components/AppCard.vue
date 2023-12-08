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
        <img class="card-img-top" src="https://picsum.photos/300/100?random" alt="">
        <div class="card-title p-1 m-0">
            <h5>{{ restaurant.name }}</h5>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>