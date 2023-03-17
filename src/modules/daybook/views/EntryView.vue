<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021, jueves</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
            <button class="btn btn-primary mx-2">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedió hoy?"></textarea>

  </div>
    <FabC
      icon="fa-save"
    />
    <!-- le paso la prop fa-save para que en FabC aparezca o el + o el simbolo del disco -->

  <img
    class="img-thumbnail"
    src="data:image/jpeg;base64,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" alt="img-default">


</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components:{
    FabC: defineAsyncComponent(() => import('../components/FabC.vue'))
  }

}
</script>

<style lang="scss" scoped>

  textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &focus{
      outline: none;
    }
  }

  img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color:#000000, $alpha: 0.2);
  }


</style>