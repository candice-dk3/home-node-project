<template>
  <section class="inner-home-sect">
     <div class="carousel">
         <div class="text">
           <h1 class="text-h1">
             Indulge in <br>a world filled <br> with scents
           </h1>
           <h4 class="text-h4">with us, at Le Luxe</h4>
         </div>
         <div class="img">
           <img :src="picture" alt="CK" class="picture"/>
         </div>
     </div>
     <div class="h2-text">
       <h2 class="H-H">SHOP FOR HER OR HIM</h2>
     </div>
     <div class="him-her">
       <div class="her">
         <div class="her-image">
           <img :src="womenSec" alt="CK" class="women-sec"/>
         </div>
         <div class="them-text">
          <a href="/product" class="for-her"><h4 class="for-her">FOR HER</h4></a>
         </div>
       </div>
       <div class="him">
         <div class="him-image">
           <img :src="menSec" alt="CK" class="men-sec"/>
         </div>
         <div class="them-text">
          <a href="/product" class="for-him"><h4 class="for-him">FOR HIM</h4></a>
         </div>
       </div>
     </div>
     <div class="h2">
       <h2 class="BSI">Some of our best selling items</h2>
     </div>
     <div class="products">
       <div class="product">
         <div class="product-img">
         <img :src="product1" alt="CK" class="product"/>
         </div>
         <div class="product-text">
          <a href="/product" class="product-view"><h4 class="view-h4">VIEW MORE</h4></a>
         </div>
       </div>
       <div class="product">
         <div class="product-img">
         <img :src="product2" alt="CK" class="product"/>
         </div>
         <div class="product-text">
          <a href="/product" class="product-view"><h4 class="view-h4">VIEW MORE</h4></a>
         </div>
       </div>
       <div class="product">
         <div class="product-img">
         <img :src="product3" alt="CK" class="product"/>
         </div>
         <div class="product-text">
          <a href="/product" class="product-view"><h4 class="view-h4">VIEW MORE</h4></a>
         </div>
       </div>
     </div>
 </section>
</template>

<script>

export default {
  name: 'HomeView',
 data() {
     return {
      picture: 'https://github.com/demilee06/Node-Images/blob/main/5616868-hd_2048_1080_25fps-ezgif.com-optimize.gif?raw=true',
      womenSec: 'https://raw.githubusercontent.com/demilee06/Node-Images/main/women-sect.webp',
      menSec: 'https://raw.githubusercontent.com/demilee06/Node-Images/main/men-sec.webp',
      product1:'https://github.com/demilee06/Node-Images/blob/main/CocoChanel.jpg?raw=true',
      product2: 'https://github.com/demilee06/Node-Images/blob/main/Jean-Paul-Gaultier.jpg?raw=true',
      product3: 'https://github.com/demilee06/Node-Images/blob/main/Red%20Door.jpg?raw=true'
     }
   }
}
</script>

<style scoped>
 *{
   margin: 0;
 }
 .inner-home-sect{
   height: 100%;
   background-color: #FFBF69;
   margin-top: 3.9rem;
 }
 .carousel{
   display: grid;
   grid-template-columns: repeat(2, 1fr);
 }
 .picture{
   width: 100%;
   height: 100%;
 }
 .text{
   background-color: #FFE8D6;
   height: auto;
 }
 .text-h1{
   font-family: "Noto Serif", serif;
   font-weight: 590;
   font-size: 4rem;
   color: black;
   text-align: left;
   padding: 4rem;
 }
 .text-h4{
   font-family: "Noto Serif", serif;
   color: black;
   text-align: left;
   margin-left: 4rem;
   margin-bottom: 4rem;
 }
 .img{
   background-color: #F5B583;
 }
 .him-her{
   display: grid;
   grid-template-columns: repeat(2, 1fr);
 }
 .her-image{
  filter: grayscale(50%);  
  transition: filter 0.4s;
 }
 .her-image:hover{
  filter: none;
 }
 .h2-text{
   font-family: "Noto Serif", serif;
   font-size: 2rem;
   color: black; 
   text-align: center;
   padding: 4rem;
 }
 .them-text{
   font-family: "Noto Serif", serif;
   font-weight: 400;
   font-size: 1rem;
   color: black;
   padding: 1rem;
 }
 .h2{
   font-family: "Noto Serif", serif;
   font-size: 2rem;
   color: black;
   text-align: center;
   padding: 4rem;
 }
 .products{
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   padding: 4rem;
 }
 .product{
  height: 20rem;
  animation-duration: 2sec;
 }
 .product:hover{
  transform: scale(1.1);
  transition: transform 0.6s;
 }
 .product-text a{
  text-decoration: none;
 }
 .product-view{
  color: white;
  margin-top: 2rem;
 }
 .men-sec, .women-sec{
  border-radius: 40rem;
  width: 22rem;
  height: 20rem;
 }
 .for-her, .for-him{
  color: black;
  text-decoration: none;
 }
 .view-h4{
  font-size: 1rem;
    padding: 0.8rem;
    margin-bottom: 2rem;
 }

 @media only screen and (max-width: 300px){
  .inner-home-sect{
   margin-top: 3.5rem;
 }
   .text-h1{
     font-size: 2rem;
     padding: 2rem;
   }
   .text-h4{
     font-size: 0.6rem;
     font-weight: 700;
     padding: 0rem;
     margin-left: 2.3rem;
     margin-bottom: 1rem;
   }
   .picture{
     width: 30vw;
   }
   .h2-text{
     font-size: 0.4rem;
     padding: 2rem;
   }
   .h2{
     font-size: 1rem;
     padding: 0.8rem;
   }
   .them-text{
     padding: 1rem;
   }
   .for-her, .for-him{
  font-size: 1rem;
  font-weight: 600;
 }
   .him-her{
    grid-template-columns: repeat(1, 1fr);
   }
   .women-sec, .men-sec{
    border-radius: 50%;
    width: 10.5rem;
    height: 10rem;
   }
   .products{
   grid-template-columns: repeat(1, 1fr);
   padding: 1rem;
 }
 .product {
    height: 14rem;
    padding: 0rem;
    margin-bottom: 4rem;
  }
  .product-img {
    width: 60%;
    height: 60%;
    padding: 1.4rem;
  }
  .product-text {
    font-size: 1rem;
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  .view-h4{
    font-size: 1rem;
    padding: 0.8rem;
    margin-bottom: 2rem;
  }
  .carousel{
   display: grid;
   grid-template-columns: repeat(1, 1fr);
 }
 .picture{
   width: 100%;
   height: 100%;
 }
 .H-H{
  font-size: 1rem;
  font-weight: 700;
 }
 }
</style>