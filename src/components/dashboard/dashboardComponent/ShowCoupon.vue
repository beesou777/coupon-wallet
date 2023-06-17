<template>
  <main>
    <div class="container pt-4">
      <div class="title">
        <h1 class="t-pri">All Coupon Data</h1>
      </div>
      <table class="table table-striped">
        <thead class="bg-pri text-light">
          <tr>
            <th>Code</th>
            <th>Category</th>
            <th>Coupon Name</th>
            <th>Discount</th>
            <th>Expiration Date</th>
            <th>Creation Date</th>
            <th>Place</th>
            <th>Redeemable</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data,index) in couponsData" :key="index">
            <td>{{ data.code }}</td>
            <td>{{ data.category }}</td>
            <td>{{ data.couponName }}</td>
            <td>{{ data.discount }}</td>
            <td>{{ data.expirationDate }}</td>
            <td>{{ data.creationDate }}</td>
            <td>{{ data.place }}</td>
            <td>{{ data.redeemable }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useCouponStore } from "../../../store/couponStore";

// variables
const couponStore = useCouponStore();

onMounted(async () => {
  couponStore.getAllCoupon();
});

const couponsData = computed(() => {
  return couponStore.coupon;
});
</script>