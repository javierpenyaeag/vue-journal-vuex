<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo</h1>
    <button @click="goToDayBook" class="btn btn-primary">Primary</button>
    <button @click="goToDayBook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDayBook" class="btn btn-success">Success</button>
  </div>
</template>


<script>

  export default{
    methods:{
      goToDayBook(){
        // this.$router.push({path: 'daybook/'}) //con el push realizamos la redirecciones
        // this.$router.push({name: 'daybook'}) //con el push realizamos la redirecciones   
        //no entra con el name en el no-entry????????
        this.$router.push({path: '/daybook/'})
      }
    }
  }
</script>
