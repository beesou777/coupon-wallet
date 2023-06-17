<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100 shadow-none" style="z-index: 999" :class="{ 'navbar-light bg-light': isNavbarLight, 'navbar-dark bg-dark': !isNavbarLight }">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="toggleNavbar"
    >
      <i class="fas fa-bars"></i>
    </button>
    <!-- Navbar content -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{ 'show': isNavbarOpen }">
      <!-- Navigation links -->
      <ul class="navbar-nav me-auto ps-lg-3">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/" :class="{ active: currentPage === 'home-main' }" @click="hideNavbar">
            Home
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/coupons" :class="{ active: currentPage === 'coupons' }" @click="hideNavbar">
            Coupons
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/redeem" :class="{ active: currentPage === 'redeem' }" @click="hideNavbar">
            Redeem
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about" :class="{ active: currentPage === 'about' }" @click="hideNavbar">
            About
          </RouterLink>
        </li>
      </ul>

      <div class="d-flex gap-3 pe-lg-4" v-if="!authStore.accessToken">
        <!-- Login and register buttons -->
        <div class="button">
          <button class="btn login t-pri" @click="login">Login</button>
        </div>
        <div class="button">
          <button class="btn register" @click="register">Register</button>
        </div>
      </div>

      <div class="d-flex gap-3 pe-lg-4" v-else>
        <!-- Logout button -->
        <div class="button">
          <button class="btn login t-pri" @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store/authStore';
import { onMounted, computed, ref } from 'vue';

const router = useRouter();
const authStore = useAuthStore();

// Check if a given route path is currently active
const currentPage = computed(() => router.currentRoute.value.name);

const setActivePage = (page) => {
  router.push(page);
};

const Home = () => {
  setActivePage("/");
};

const coupons = () => {
  setActivePage("/coupons");
};

const redeem = () => {
  setActivePage("/redeem");
};

const about = () => {
  setActivePage("/about");
};

// Function to route to the login page
const login = () => {
  router.push('/login');
};

// Function to route to the register page
const register = () => {
  router.push('/register');
};

const logout = () => {
  router.push('/login');
  localStorage.clear();
  authStore.accessToken = null;
  authStore.refreshToken = null;
};

const scrollPosition = ref(0);
const isNavbarOpen = ref(false);

// Listen for the scroll event and update the scroll position
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};

// Computed property to determine the navbar color based on scroll position
const isNavbarLight = computed(() => {
  return scrollPosition.value < 90;
});

// Toggle the navbar on small devices
const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};

// Hide the navbar collapse element when a link is clicked
const hideNavbar = () => {
  isNavbarOpen.value = false;
};
</script>

<style scoped>
.active {
  position: relative;
}

.active::after {
  content: "";
  height: 2px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0;
  background: orangered;
}

.navbar {
  transition: background-color 0.3s ease-in-out;
}

.navbar-light {
  background-color: #f9f9f9;
}

.navbar-dark {
  background-color: #333;
}
</style>
