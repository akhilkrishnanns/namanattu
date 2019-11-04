<template>
    <!-- <nav class="navbar navbar-expand-sm bg-header navbar-dark"> -->
  <!-- Brand/logo -->
  <!-- <a class="navbar-brand" href="#">Home</a> -->
  
  <!-- Links -->
  <!-- <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Notifications</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact Us</a>
    </li>
  </ul>
</nav> -->
<nav class="navbar navbar-expand-md bg-header navbar-dark">
  <router-link class="navbar-brand" to="/">HOME</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/about">ABOUT</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">NOTIFICATIONS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT US</a>
      </li>    
    </ul>
  </div>  
</nav>

</template>