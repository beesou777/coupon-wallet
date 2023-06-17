<template>
  <!--Main Navigation-->
  <div>
    <!-- Sidebar -->
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <RouterLink to="/dashboard" class="list-group-item list-group-item-action py-2 ripple" @click="hideNavbar">
            <i class="fa-solid fa-receipt me-2"></i>
            <span>Add Coupon</span>
          </RouterLink>
          <RouterLink to="/dashboard/coupons" class="list-group-item list-group-item-action py-2 ripple" @click="hideNavbar">
            <i class="fa-solid fa-receipt me-2"></i>
            <span>All Coupons</span>
          </RouterLink>
          <RouterLink to="/" class="list-group-item list-group-item-action py-2 ripple" @click="hideNavbar">
            <i class="fa-solid fa-arrow-turn-up me-2 rotate"></i>
            <span>Visit Site</span>
          </RouterLink>
        </div>
      </div>
    </nav>
    <!-- Sidebar -->

    <!-- Navbar -->
    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="hideNavbar"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Brand -->
        <div class="title">
          <h4 class="t-pri">
            Coupon Wallet System
          </h4>
        </div>

        <!-- Right links -->
        <ul class="navbar-nav ms-auto d-flex flex-row">

          <!-- Avatar -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                class="rounded-circle"
                height="22"
                alt="Avatar"
                loading="lazy"
              />
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <button class="dropdown-item" @click="logout">Logout</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </div>
  <!--Main Navigation-->
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Hide the navbar collapse element when a link is clicked
const hideNavbar = () => {
  const sidebarMenu = document.getElementById('sidebarMenu');
  const mainNavbar = document.getElementById('main-navbar');
  if (sidebarMenu && mainNavbar) {
    sidebarMenu.classList.remove('show');
    mainNavbar.classList.remove('show');
  }
};

// Function to logout
const logout = () => {
  router.push("/login");
  localStorage.clear();
};
</script>

<style scoped>
.rotate {
  transform: rotate(90deg);
}
</style>
