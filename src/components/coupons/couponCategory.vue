<template>
    <div class="pt-5">
      <div class="px-2">
        <h4 class="m-0">Filter Coupon:</h4>
      </div>
      <div class="px-2 my-3">
        <ul class="list-unstyled ps-0">
          <li class="mb-1 w-100">
            <button class="border-0 d-flex flex-row gap-2 text-dark collapsed text-start py-2 w-100" data-bs-toggle="collapse" data-bs-target="#categorie-collaspe" aria-expanded="false">
              <h5 class="m-0">Categories:</h5>
            </button>
            <div class="collapse" id="categorie-collaspe">
              <li v-for="(data, index) in cardCategories" :key="index">
                <div class="d-flex justify-content-between dropdown-item px-1 py-2" @click="routeProduct(data.categories)">
                  <a class="text-dark" href="#">
                    <img :src="data.image" alt style="height: 20px" />
                    {{ data.categories }}
                  </a>
                  <i class="fas fa-arrow-right "></i>
                </div>
              </li>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const cardCategories = ref([
    { categories: "Fashion"},
    { categories: "Electronic" },
    { categories: "Travel"},
    { categories: "Food" },
    { categories: "Sport"},
    { categories: "Movie"},
  ]);
  
  
  </script>
  
  <style scoped>
  /* CSS styles */
  .feature {
    background: orangered;
    width: 80px;
    color: #fff;
    text-align: center;
    border-radius: 0 0 50% 0;
  }
  </style>
  