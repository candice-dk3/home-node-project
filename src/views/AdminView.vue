<template>
    <section class="inner-admin">
        <button  type="button" class="btn" data-bs-toggle="modal" data-bs-target="#adminAddProduct">Add New Product</button>
            <div class="admin-page-table">
                <table class="table table-responsive table-bordered">
                    <thead class="table-group-divider">
                        <tr>
                        <!-- <th>ID</th> -->
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="table-products">
                        <tr v-for="product in $store.state.products" :key="product.prodID">
                        <!-- <td>{{ product.prodID }}</td> -->
                        <td>{{ product.prodName }}</td>
                        <td><img :src="product.prodUrl" alt="Product Image" class="img-fluid" width="auto" height="auto" /></td>
                        <td>{{ product.Catergory }}</td>
                        <td>{{ product.prodDes }}</td>
                        <td>{{ product.amount }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>
                            <button class="btn"><edit-product :product="product"/></button>
                            <button @click="deleteProduct()" class="btn btn-outline-danger">Delete Product</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#adminAddUser">Add New User</button> -->
            <button class="btn"><add-user :user="user"/></button>
            <div class="user-page-table">
                <table class="table table-responsive table-bordered">
                    <thead class="table-group-divider">
                        <tr>
                        <!-- <th>ID</th> -->
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="table-products">
                        <tr v-for="user in $store.state.users" :key="user.usersID">
                        <!-- <td>{{ user.usersID }}</td> -->
                        <td>{{ user.firstName }}</td> 
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.Gender }}</td> 
                        <td>{{ user.userRole }}</td>
                        <td>{{ user.emailAdd }}</td> 
                            <button class="btn"><edit-user :user="user"/></button>
                            <button @click="deleteUser()" class="btn btn-outline-danger">Delete User</button>
                        </tr>
                    </tbody>
                </table>
            </div> 
    </section>
</template>

<script>
import EditProduct from '@/components/EditProduct.vue';
import EditUser from '@/components/EditUser.vue';
import AddUser from '@/components/AddUser.vue';

export default {
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
    components:{
        EditProduct,
        EditUser,
        AddUser
    },
    methods: {
        getProducts() {
            this.$store.dispatch('getProducts');
        },
        
        getUsers() {
            this.$store.dispatch('getUsers');
        },
        addProduct() {
            this.$store.dispatch('addProduct', this.newProduct);
            
        },
        addUser() {
            this.$store.dispatch('addUser', this.newUser);
        },
        deleteUser() {
            this.$store.dispatch('deleteUser', this.usersID)
        },
        updateUser() {
            this.$store.dispatch('updateUser', this.editUser);
        }
    },
    computed: {
        product(){
            return this.$store.state.product
        },
        user(){
            return this.$store.state.user
        }
    },
    mounted() {
        this.getProducts(),
        this.getUsers()
    }
}
</script>

<style scoped>
.inner-admin {
    margin-top: 3.9rem;
    /* background-image: url(https://github.com/demilee06/Node-Images/blob/main/5616868-hd_2048_1080_25fps-ezgif.com-optimize.gif?raw=true); */
    background-size: contain
}

.table-responsive {
    width: 100%;
    background-color: transparent;
}

.table {
    width: 80rem;
    /* background-color: #96005A; */
    margin-top: 1rem;
}

.table th,
.table td {
    text-align: left;
    justify-content: center;
    align-content: center;
    background-color: transparent;
    border: none;
}

.admin-page-table, .user-page-table {
    width: auto;
    display: grid;
    justify-content: center;
}

.quantity-buttons {
    display: flex;
    align-items: center;
}

.total-amount {
    text-align: end;
}

.btn {
    color: white;
    background-color: #C2922F;
    margin-top: 40px;
    border: none;
    /* margin-left: 200px; */
}

button.btn:hover {
    background-color: #e2b65f;
    color: white;
    border: none;
}

.products-sec {
    display: grid;
    justify-content: space-around;
}

.img-fluid {
    max-width: 100px;
    height: auto;
}

@media screen and (max-width: 300px) {
    .inner-admin {
        margin-top: 3.5rem;
    /* background-image: url(https://github.com/demilee06/Node-Images/blob/main/5616868-hd_2048_1080_25fps-ezgif.com-optimize.gif?raw=true); */
    background-size: contain
}
.admin-page-table, .user-page-table {
    width: 100%;
    overflow-x: auto;
  }
  .table {
    width: 100%;
    display: block;

  }
  .table th, .table td {
    padding: 5px;
    font-size: 12px;
    display: block;
    width: 100%;
  }
  .img-fluid {
    max-width: 50px;
    height: auto;
  }

}
</style>