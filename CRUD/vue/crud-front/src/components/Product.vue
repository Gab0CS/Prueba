<template>
  <div v-if="currentProduct" class="edit-form">
    <h4>Product</h4>
    <form>
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" class="form-control" id="title"
          v-model="currentProduct.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Descrición</label>
        <input type="text" class="form-control" id="description"
          v-model="currentProduct.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentProduct.stocked ? "Stocked" : "Pending" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentProduct.published"
      @click="updateStocked(false)"
    >
      UnStock
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updateStocked(true)"
    >
      Stocked
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteProduct"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateProduct"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

    <div v-else>
    <br />
    <p>Please click on a Product...</p>
  </div>
</template>

<script>
import ProductDataService from "../services/ProductDataService";

export default {
  name: "product-item",
  data() {
    return {
      currentProduct: null,
      message: ''
    };
  },
  methods: {
    getProduct(id) {
      ProductDataService.get(id)
        .then(response => {
          this.currentProduct = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateStocked(status) {
      var data = {
        id: this.currentProduct.id,
        nombre: this.currentProduct.nombre,
        description: this.currentProduct.description,
        stocked: status
      };

      ProductDataService.update(this.currentProduct.id, data)
        .then(response => {
          this.currentProduct.stocked = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateProduct() {
      ProductDataService.update(this.currentProduct.id, this.currentProduct)
        .then(response => {
          console.log(response.data);
          this.message = 'Prodcuto actualizado exitosamente!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteProduct() {
      ProductDataService.delete(this.currentProduct.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "products" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getProduct(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>