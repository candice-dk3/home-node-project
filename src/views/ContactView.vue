<template>
   <section class="inner-contact-sec">
      <!-- <NavbarComp/> -->
      <!-- <nav class="navbar">
         <router-link to="/">Home</router-link> |
         <router-link to="/product">Products</router-link>|
         <router-link to="/">Home</router-link>
         <router-link to="/contact">Contact Us</router-link>
         <router-link to="/about">About Us</router-link>|
         <router-link to="/admin">Admin</router-link>
      </nav> -->
      <h3>Let's get in contact</h3>
      <div class="contact-page">
         <div class="form-sec">
            <form action="https://formspree.io/f/mnnabbvv" method="POST">
               <label>
                  Your email:
                  <input type="email" name="email">
               </label>
               <label>
                  Your message:
                  <textarea name="message"></textarea>
               </label>
                <button type="submit">Send</button>
                <button type="reset">Clear</button>
         </form>
         </div>
         <div class="contact-sec"></div>
      </div>
   </section>
</template>

<script>
// import NavbarComp from '@/components/NavbarComp.vue';

export default {
   name: 'ContactUs',
   // component:{
   //    NavbarComp
   // }
}
</script>

<style scoped>
.inner-contact-sec{
   height: 1000px;
   background-color: #cb997eb0;
}
.contact-page{
   display: grid;
   grid-template-columns: repeat(2, 1fr)
}
</style>
