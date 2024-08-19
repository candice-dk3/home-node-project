<template>
    <nav class="navbar">
    <router-link to="/">Home</router-link> |
    <router-link to="/product">Products</router-link>|
    <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact Us</router-link>
    <router-link to="/about">About Us</router-link>|
    <router-link to="/admin">Admin</router-link>
  </nav>
</template>

<script>
export default {
    name:'NavbarComp'
}
</script>

<style>
.navbar{
background-color: #CB997E;
padding: 1rem;
}
nav {
padding: 30px;
}

nav a {
font-weight: bold;
color: black;
text-decoration: none;
}

nav a.router-link-exact-active {
color: #ffc400;
text-decoration: underline;
}
</style>
