<template>
  <section class="inner-product-sec">
      <div class="for-her-sec">
              <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                      <div class="carousel-item active">
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
                      </div>
                  <div class="carousel-item">
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
                  </div>
              </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
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
              <div class="product-cards">
              <Card v-for="product in $store.state.product" :key="product.id" class="product-card">
                  <template #cardHeader>
                      <div class="d-flex">
                          <img :src="product.image" :alt="product-name" loading="lazy" class="img-fluid">
                      </div>
                  </template>
                  <template #cardBody>
                      <h4 class="product-name">{{product.name}}</h4>
                      <button @click="$router.push(`/singleitem/${product.id}`)">View More</button>
                  </template>
              </Card>
              </div>
          </div>
  </section>
</template>
<script>
import CardComp from '@/components/CardComp.vue';

export default {
  component: {
      CardComp
  },
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
  #search-div{
      background-color: #CB997E;
      border: none;
      height: 2rem;
      width: 30rem;
      border-radius: 2rem;
  }
  input{
      background-color: #CB997E;
      border: none;
  }
  ::placeholder{
      color: white;
      font-size: 1rem;
  }
  button{
      background-color: #CB997E;
      border: none;
      width: 8rem;
      height: 2rem;
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
