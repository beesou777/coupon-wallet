<template>
    <div>
        <Navbar/>
        <div>
            <RouterView></RouterView>
        </div>
        <Footer/>
    </div>
</template>
<script setup>
import Navbar from '../components/Navbar/Navbar.vue';
import Footer from '../components/Navbar/Footer.vue';


</script>