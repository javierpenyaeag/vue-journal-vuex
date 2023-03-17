<template>
  <div @click="$router.push({path: '/daybook/10'})" class="entry-container pointer p-2"> 
  <!-- <div @click="$router.push({name: 'entry', params:{params:{id:10}}})" class="entry-container pointer p-2">  -->
    <!-- aqui no necesito poner el this.$router, ya que eso es solo en la parte de javascript, es decir, lo que ponemos dentro del <script></script> -->

        <!-- titulo -->

    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-light">2021, jueves</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur ducimus omnis eos corrupti delectus quas iste suscipit, esse minima error consequatur nobis molestias, vel praesentium, optio doloremque consectetur beatae.
    </div>

  </div>




</template>

<script>
export default {

}
</script>

<style lang="scss" scoped> 

  .entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
      background-color: lighten($color: grey, $amount: 45); //esto lo que hace es coger un color y aclararlo un tanto por ciento
      transition: 0.2s all ease-in;
    }

    .entry-description{
      font-size: 12px;
    }
  }

</style>