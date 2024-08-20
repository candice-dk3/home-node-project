<template>
  <section class="inner-product-sec">
      <div class="for-her-sec">
          <div class="upper-card">
              <div class="upper-text">
                  <div class="text-h2">
                      <h2 class="upper-card-text">Embrace <br>the Art of <br>Seduction</h2>
                  </div>
                  <div class="text">
                      <h5 class="text-h5">shop for Women</h5>
                  </div>
              </div>
              <div class="upper-image">
                  <img :src="forHerPicture" alt="CK" class="for-her-picture"/>
              </div>
          </div>
          <div class="search-sort">
              <div class="search-bar">
                  <div id="search-div">
                      <input type="text" id="searchInput" placeholder="Search...">
                      <button id="searchButton">Search</button>
                  </div>
              </div>
              <div class="sort-by-bar">
                  <label for="Sort-by">Sort By: </label>
                  <select id="categoryFilter">
                      <option value="">All Categories</option>
                      <option value="Price">Price: Min-Max</option>
                      <option value="Women">Women</option>
                      <option value="Men">Men</option>
                  </select>
              </div>
          </div>
          <div class="her-products">
  
          </div>
      </div>
      <div class="for-him-sec">
          <div class="lower-card">
              <div class="lower-text">
                  <div class="text-h2">
                      <h2 class="lower-card-text">Where <br> Passion <br>Meets <br>Perfection</h2>
                  </div>
                  <div class="text">
                      <h5 class="text-h5">shop for Men</h5>
                  </div>
              </div>
              <div class="lower-image">
                <img :src="forHimPicture" alt="CK" class="for-him-picture"/>
              </div>
          </div>
          <div class="him-products"></div>
      </div>
  </section>
  </template>
  <script>
  export default {
      data(){
        return{
          forHerPicture: 'https://raw.githubusercontent.com/demilee06/Node-Images/main/upper-picture.webp',
          forHimPicture: 'https://github.com/demilee06/Node-Images/blob/main/lower-card.jpg?raw=true'
        }
      }
  }
  </script>
  <style scoped>
  .inner-product-sec{
    background-color: #FFBF69;
    height: 100%;
    margin-top: 3.9rem;
  }
  .for-her-sec, .for-him-sec{
    padding: 4rem;
  }
  .upper-card, .lower-card{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #F5B583;
    height: 100%;
    padding: 2rem;
  } 
  .upper-card-text, .lower-card-text{
    color: black;
    text-align: left;
    font-weight: 800;
    font-size: 4rem;
    margin-left: 4rem;
    line-height: 5rem;
  }
  .text-h5{
    color: black;
    text-align: left;
    font-weight: 700;
    padding: 1rem;
    margin-left: 3rem;
  }
     .for-her-picture{
      width: 38rem;
     }
     .for-him-picture{
      width: 38rem;
     }
     .search-sort{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 2.2rem;
     }
     @media only screen and (max-width: 300px){
  
}
  </style>