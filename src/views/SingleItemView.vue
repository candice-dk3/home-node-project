<template>
  <section class="singleView">
    <div class="singleItem" v-for="product in $store.state.products" :key="product.prodID">
      <div class="card">
        {{ product.prodName }}
      </div>
    </div>
      <!-- <CardComp v-for="product in $store.state.products" :key="product.prodID" class="product-card">
          <div class="card">
              <div class="card-left">
                  <h4 class="product-name">{{ product.prodName }}</h4>
                  <p>{{ product.amount }}</p>
              </div>
              <div class="card-right"></div>
          </div>
      </CardComp> -->
  </section>
</template>
<script>
export default {
  methods : {
    getProducts() {
        this.$store.dispatch('getProducts')
      },
  },
  mounted() {
          this.getProducts()
      }
}
</script>
<style scoped>

  .card{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      color: black;
  }
</style>