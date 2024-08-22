<template>
    <section class="inner-admin">
        <button @click="addProduct()" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#adminAddProduct">Add New Product</button>
        <div v-for="product in $store.state.products" :key="product.prodID" class="products-sec">
            <table class="table table-responsive table-bordered">
                <thead class="table-group-divider">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider" id="table-products">
                    <tr>
                        <td>{{ product.prodID }}</td>
                        <td>{{ product.prodName }}</td>
                        <td><img :src="product.prodUrl" alt="Product Image" class="img-fluid" width="70rem" height="70rem" /></td>
                        <td>{{ product.Catergory }}</td>
                        <td>{{ product.amount }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>
                            <button @click="updateProduct.$prodID" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#adminEditProduct">Edit</button>
                            <button class="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-for="user in $store.state.users" :key="user.userID" class="user-sec">
            <table class="table table-responsive table-bordered">
                <thead class="table-group-divider">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Profile</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider" id="table-user">
                    <tr>
                        <td>{{ user.usersID }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.userAge }}</td>
                        <td>{{ user.Gender }}</td>
                        <td>{{ user.emailAdd }}</td>
                        <td>{{ user.userProfile }}</td>
                        <td>{{ user.userPass }}</td>
                        <td>
                            <button @click="updateUser()" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#adminEditUser">Edit</button>
                            <button @click="deleteUser()" class="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Add New Product Modal -->
        <div class="modal fade" id="adminAddProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addProductLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addProductLabel">Add a New Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="updateProduct()">
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter product ID" v-model="prodID" required>
                                <input class="form-control m-2" type="text" placeholder="Enter product name" v-model="prodName" required>
                                <input class="form-control m-2" type="url" placeholder="Enter product image URL" v-model="prodUrl" required>
                                <input class="form-control m-2" type="text" placeholder="Enter product category" v-model="Catergory" required>
                                <input class="form-control m-2" placeholder="Enter product amount" v-model="amount" required>
                                <input class="form-control m-2" type="number" placeholder="Enter product quatity" v-model="quantity" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="submit" class="btn btn-outline-success" @click="addProduct()">Save Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add New User Modal -->
        <div class="modal fade" id="adminAddUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addUserLabel">Add a New User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="updateUser()">
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter product ID" v-model="usersID" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Name" v-model="firstName" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Surname" v-model="lastName" required>
                                <input class="form-control m-2" type="number" placeholder="Enter Age" v-model="userAge" required>
                                <input class="form-control m-2" placeholder="Enter Gender" v-model="Gender" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Role" v-model="userRole" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Email" v-model="emailAdd" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="submit" class="btn btn-outline-success" @click="addUser()">Save User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Product Modal -->
        <div class="modal fade" id="adminEditProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editProductLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editProductLabel">Edit Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="updateProduct()">
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter product ID" v-model="prodID" required readonly>
                                <input class="form-control m-2" type="text" placeholder="Enter product name" v-model="prodName" required>
                                <input class="form-control m-2" type="url" placeholder="Enter product image URL" v-model="prodUrl" required>
                                <input class="form-control m-2" type="text" placeholder="Enter product category" v-model="Catergory" required>
                                <textarea class="form-control m-2" placeholder="Enter product amount" v-model="amount" required></textarea>
                                <input class="form-control m-2" type="number" placeholder="Enter product quantity" v-model="quantity" required>
                            </div>
                            <div class="modal-footer">
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-outline-success" @click="updateProduct()">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Edit User Modal -->
        <div class="modal fade" id="adminEditUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editProductLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editProductLabel">Edit User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="updateProduct()">
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter product ID" v-model="prodID" required readonly>
                                <input class="form-control m-2" type="text" placeholder="Enter product name" v-model="prodName" required>
                                <input class="form-control m-2" type="url" placeholder="Enter product image URL" v-model="prodUrl" required>
                                <input class="form-control m-2" type="text" placeholder="Enter product category" v-model="Catergory" required>
                                <textarea class="form-control m-2" placeholder="Enter product amount" v-model="amount" required></textarea>
                                <input class="form-control m-2" type="number" placeholder="Enter product quantity" v-model="quantity" required>
                            </div>
                            <div class="modal-footer">
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-outline-success" @click="updateUser()">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            newProduct: {
                prodID: '',
                prodName: '',
                prodUrl: '',
                Catergory: '',
                amount: '',
                quantity: ''
            },
            editProduct: {
                prodID: '',
                prodName: '',
                prodUrl: '',
                Catergory: '',
                amount: '',
                quantity: ''
            }
        };
    },
    methods: {
        getProducts() {
            this.$store.dispatch('getProducts');
        },
        getUsers(){
            this.$store.dispatch('getUsers');
        },
        addProduct() {
            this.$store.dispatch('addProduct', this.newProduct);
            this.newProduct = {
                prodID: '',
                prodName: '',
                prodUrl: '',
                Catergory: '',
                amount: '',
                quantity: ''
                };
            // this.$refs.form.reset();
        },
        updateProduct(){
            this.$store.dispatch('updateProduct', this.editProduct);
        },
    },
    mounted() {
        this.getProducts(),
        this.getUsers()
    }
}
</script>

<style scoped>
.inner-admin{
    margin-top: 3.9rem;
    background-image: url(https://github.com/demilee06/Node-Images/blob/main/5616868-hd_2048_1080_25fps-ezgif.com-optimize.gif?raw=true);
    background-size: contain
}
.table-responsive {
    width: 100%;
    background-color: transparent;
}
.table {
    width: 80rem;
    background-color: #96005A;
    margin-top: 2rem;
}
.table th, .table td {
    text-align: center;
    justify-content: center;
    align-content: center;
}

.admin-page-table{
    width: 1200px;
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
#checkout-button {
    background-color: #C2922F;
    border: none;
}
/* .add-item{
    margin-top: 30px;
} */
button.btn{
    color: white;
    background-color: #b5006d;
    margin-top: 60px;
    margin-left: 200px;
    border: none;
 }
 button.btn:hover{
    background-color: #C2922F;
    color: white;
    border: none;
}
.products-sec{
    display: grid;
    justify-content: center;
}
.img-fluid {
        max-width: 100px;
        height: auto;
    }
@media screen and (max-width: 300px){
    
}
</style>
