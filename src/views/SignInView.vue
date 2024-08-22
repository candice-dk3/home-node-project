<template>
   <div>
       <div v-if="signUp">
           <h1>Register</h1>
       <br><br>
       <table>
           <tr><th><label>Enter name: </label></th><td><input type="text" v-model="name"></td></tr>
           <tr><th><label>Enter surname: </label></th><td><input type="text" v-model="surname"></td></tr>
           <tr><th><label>Enter age: </label></th><td><input type="number" v-model="age"></td></tr>
           <tr><th><label>Enter Username: </label></th><td><input type="text" v-model="username"></td></tr>
           <tr><th><label>Enter Password: </label></th><td><input type="password" v-model="password"></td></tr>
           <tr><td colspan="2"><input @click="addUser" type="button" value="enter"></td></tr>
       </table>
       </div>
   </div>
</template>
<script>
export default {
   data(){
       return{
           name: '',
           surname:'',
           age: '',
           username:'',
           password:'',
           signUp:'true'
       }
   },
   computed:{
      //  addUser(){
      //      this.$store.dispatch('addUser',this.$data)
      //  },
   }
}
</script>
<style scoped>
 .inner-signIn{
      margin-top: 3.9rem;
   }
</style>