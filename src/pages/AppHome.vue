<script>
export default {
  name: 'AppHome',
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="container-fluid bg-primary">
    <div class="container py-5">
      <div class="row my-5">

        <!-- PARTE DI TESTO -->
        <div class="col-4 text-center text-white"> 
          <h1>TITOLO PROVA</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tenetur quisquam obcaecati ullam tempora labore excepturi earum nemo provident quos ex temporibus laborum, aperiam sequi iste adipisci, quibusdam fugiat accusamus!</p>
          <router-link  :to="{name: 'Restaurant_list' }" class="btn rounded-pill border-white text-white" type="submit">Visualizza i nostri ristoranti</router-link>
        </div>
        
        <!-- IMMAGINE -->
        <div class="col-8 d-flex justify-content-center">
          <img src="https://picsum.photos/500/300" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  h1{
    font-size: 60px;
    font-weight: 800;
  }

  .btn {
    transition: all 0.1s ease-in-out;
  }
  .btn:hover{
    transform: scale(1.2);
  }
</style>