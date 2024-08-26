<template>
    <div>
   <!-- Add New User Modal -->
   <button  type="button" class="btn" data-bs-toggle="modal" :data-bs-target="'#adminAddUser'+user.usersID">Add New User</button>
   <div class="modal fade" :id="'adminAddUser'+user.usersID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addUserLabel">Add a New User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="container">
                                <input class="form-control m-2" type="text" placeholder="Enter Name" v-model="newUser.firstName" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Surname" v-model="newUser.lastName" required>
                                <input class="form-control m-2" type="number" placeholder="Enter Age" v-model="newUser.userAge" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Gender" v-model="newUser.Gender" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Role" v-model="newUser.userRole" required>
                                <input class="form-control m-2" type="text" placeholder="Enter Email" v-model="newUser.emailAdd" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
                                <button type="reset" class="btn btn-outline-success" data-bs-dismiss="modal">Clear</button>
                                <button type="submit" class="btn btn-outline-success" @click="addUserFx()">Add User</button>
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
    props:['user'],
    data() {
        return{
            newUser: {
                firstName: '',
                lastName: '',
                userAge: '',
                Gender: '',
                userRole: '',
                emailAdd: ''
            },
        }
    },
    methods:{
        addUserFx() {
            this.$store.dispatch('addUser', this.addUser);
        },
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