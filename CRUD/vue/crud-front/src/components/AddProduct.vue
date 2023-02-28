<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          required
          v-model="product.nombre"
          name="nombre"
        />
      </div>

      <div class="form-group">
        <label for="description">Descripción</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <button @click="saveProduct" class="btn btn-success">Enviar</button>
    </div>

    <div v-else>
      <h4>Agregado exitosamente!</h4>
      <button class="btn btn-success" @click="newProduct">Agregar</button>
    </div>
  </div>
</template>

<script>
import ProductDataService from "../services/ProductDataService";

export default {
  name: "add-product",
  data() {
    return {
      product: {
        id: null,
        title: "",
        description: "",
        stocked: false
      },
      counter: false
    };
  },
  methods: {
    saveProduct() {
      var data = {
        title: this.product.title,
        description: this.product.description
      };

      ProductDataService.create(data)
        .then(response => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newProduct() {
      this.submitted = false;
      this.product = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>