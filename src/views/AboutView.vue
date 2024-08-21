<template>
   <section class="about-sec">
       <div class="inner-sec">
         <h1 class="welcome">Welcome to Le Luxe</h1>
         <div class="WWD">
            <div class="WWD-left">
              <h3 class="h3-text">Le Luxe: The Epitome of Refined Elegance</h3>
              <p class="p-text">Le Luxe is a luxury lifestyle brand that embodies the essence
                of refined elegance and sophistication. Our mission is to provide our
                discerning clients with unparalleled service, exceptional quality, and
                unparalleled style. If high-end frangrances is what you're looking for, Le Luxe has got you covered.
                </p>
            </div>
            <div class="WWD-right"></div>
          </div>
         <div class="SOO">
          <div class="SOO-left"></div>
          <div class="SOO-right">
            <h3 class="h3-text">Our Story</h3>
            <p class="p-text">Our story began with a passion for creating unique and
              exclusive fragrances that evoke the essence of luxury and sophistication.
              With a keen eye for detail and a commitment to excellence, we have
              established ourselves as a leading luxury lifestyle brand. Our fragrances
              are crafted with the finest ingredients and are designed to evoke the
              senses and transport you to a world of refinement and elegance.</p>
          </div>
         </div>
         <div class="feedback">
          <div class="inner-feedback">
          <h3 class="FB-h3-text">What Our Clients Say</h3>
          <div class="feedback-content">
              <div class="feedback-card">
                  <img :src="card" alt="User" class="card"/>
                  <h4 class="content-h4">User</h4>
                  <p class="content-p">Hey</p>
              </div>
              <div class="feedback-card">
                  <img :src="card" alt="User" class="card"/>
                  <h4 class="content-h4">User</h4>
                  <p class="content-p"></p>
              </div>
              <div class="feedback-card">
                  <img :src="card" alt="User" class="card"/>
                  <h4 class="content-h4">User</h4>
                  <p class="content-p"></p>
              </div>
              <div class="feedback-card">
                  <img :src="card" alt="User" class="card"/>
                  <h4 class="content-h4">User</h4>
                  <p class="content-p"></p>
              </div>
          </div>
          </div>
         </div>
       </div>
   </section>
 </template>
 
 <script>
 export default {
   name: 'AboutView',
   data(){
    return{
      card: 'https://github.com/demilee06/Node-Images/blob/main/user.png?raw=true'
    }
   }
 }
 </script>
 
 <style scoped>
   .about-sec{
     background-image:  url(https://github.com/demilee06/Node-Images/blob/main/about%20gif.gif?raw=true);
     background-size: 100% 100%;
     background-repeat: repeat-x, repeat-y;
     height: 100%;
     width: 100%;
     margin-top: 3.9rem;
   }
   .inner-sec{
     color: black;
   }
   .welcome{
    padding: 2rem;
    font-size: 2.5rem;
   }
   .h3-text{
    padding: 0rem;
    text-align: center;
    margin-right: 4rem;
    font-weight: 600;
    font-size: 2rem;
    width: 100%;
   }
   .p-text{
    padding: 1rem;
    text-align: start;
    margin-left: 10rem;
    font-size: 1.4rem;
    font-weight: 500;
   }
   .WWD, .SOO{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
   }
   .feedback-content{
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 2rem;
    margin-left: 8rem;
    }
   .card{
    border-radius: 20rem;
    width: 10rem;
    height: 10rem;
    text-align: center;
    background-color: transparent;
   }
   .content-h4{
     padding: 0.4rem;
     font-size: 1rem;
     margin-right: 10rem;
   }
   .content-p{
     font-size: 1rem;
     margin-right: 10rem;
     font-weight: 600;
   }
   .FB-h3-text{
     padding: 2rem;
     text-align: center;
     font-size: 2.5rem;
   }
   @media only screen and (max-width: 300px){
     .about-sec{
     height: 100%;
     width: 100%;
   }
   }
 </style>
 
