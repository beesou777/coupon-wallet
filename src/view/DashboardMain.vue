<template>
  <div>
    <SideNavbar />
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import { onMounted, watch } from "vue";
import Navbar from "../components/Navbar/Navbar.vue";
import SideNavbar from "../components/dashboard/Navbar/SideNavbar.vue";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";
// variables
const authStore = useAuthStore()
const router = useRouter()

// load the page to login if the user is not login
onMounted(()=>{
  const data = JSON.parse(localStorage.getItem("access_token"))
  if(!data){
    router.push("/login")
  }
})

</script>