<template>
  <div>
    <button  type="button" class="btn" data-bs-toggle="modal" :data-bs-target="'#adminAddProduct'+product.prodID">Add New Product</button>
        <!-- Add New Product Modal -->
        <div class="modal fade" :id="'adminAddProduct'+product.prodID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="addProductLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addProductLabel">Add a New Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter product name" v-model="newProduct.prodName" required>
                                <input class="form-control m-2" type="number" placeholder="Enter product quatity" v-model="newProduct.quantity" required>
                                <input class="form-control m-2" type="text" placeholder="Enter product amount" v-model="newProduct.amount" required>
                                 <input class="form-control m-2" type="text" placeholder="Enter product category" v-model="newProduct.Catergory" required>
                                <input class="form-control m-2" type="text" placeholder="Enter product image URL" v-model="newProduct.prodUrl">
                                <input class="form-control m-2" type="text" placeholder="Enter product description" v-model="newProduct.prodDes" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="submit" class="btn btn-outline-success" @click="addProductFx()">Save Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props:['product'],
    data() {
        return {
            newProduct: {
                prodName: '',
                quantity: '',
                amount: '',
                Catergory: '',
                prodUrl: '',
                prodDes: '',
            },
            
        };
    },
    methods:{
        addProductFx(){
            this.$store.dispatch('addProduct', this.addProduct);
        }
    }
}
</script>

<style scoped>
 .btn{
    color: white;
    background-color: #C2922F;
    margin-top: 40px;
 }
</style>