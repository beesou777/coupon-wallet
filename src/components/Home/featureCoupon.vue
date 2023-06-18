<template>
  <div class="container py-5">
    <div class="title d-flex justify-content-between">
      <h3 class="mx-lg-3">Featured Coupons:</h3>
     <div class="d-flex align-items-center gap-1" @click="showCoupon" style="cursor:pointer">
      <p class="m-0">Show All Available Coupons</p>
      <i class="fas fa-arrow-right fs-5"></i>
     </div>
    </div>
    <div class="row py-2">
      <div
        v-for="(data, index) in coupons"
        :key="index"
        class="col-lg-3 col-md-4 col-sm-12 px-lg-4 my-3 my-lg-0"
      >
        <div class="bg-l rounded-3 pt-2">
          <div class="header px-3 py-2">
            <div class="data line-sp d-flex justify-content-between">
              <h4 :class="['m-0 text-cp', { 'coupon-name': data.couponName.length > 12 }]">{{ data.couponName }}</h4>
              <p class="m-0 bg-warning px-3 text-light rounded-4" style="width:fit-content">{{ data.discount }}%</p>
            </div>
          </div>

          <div class="bg-bold p-3 mt-1" style="border-radius:8px 8px 0 0 !important">
            <div class="position-relative">
              <span class="position-absolute left"></span>
              <span class="position-absolute line"></span>
              <span class="position-absolute right"></span>
              <div class="d-flex align-items-center gap-2">
                <i class="fa-solid fa-location-dot"></i>
                <p class="m-0">{{ data.place }}</p>
              </div>
              <div class="d-flex gap-2 align-items-center">
                <i class="fa-regular fa-clock"></i>
                <p class="m-0">{{ data.expirationDate }}</p>
              </div>
            </div>
            <div class="button pt-5" v-if="data.redeemable === true">
              <button
                v-if="isClicked[index]"
                class="w-100 btn btn-transparent text-light line-sp"
                style="border:2px dotted #fff"
                @click="couponCode(index)"
              >{{ isClicked[index] ? data.code : "Show Code" }}</button>
              <button
                v-else
                class="w-100 btn btn-transparent text-light"
                style="border:2px solid #fff"
                @click="couponCode(index)"
              >Show code</button>
            </div>

            <div class="button pt-5" v-else>
              <button
                class="w-100 btn btn-transparent text-light line-sp"
                style="border:2px dotted #fff"
                
              >Redeemed</button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useCouponStore } from "../../store/couponStore";
import { useRouter } from "vue-router";

// variables
const couponStore = useCouponStore()
const router = useRouter()
const isClicked = ref([])

onMounted(() => {
  couponStore.getAllCoupon()
});

const coupons = computed(()=>{
  return couponStore.coupon.splice(0,4)
})

// function to show all coupon
const showCoupon = ()=>{
  router.push("/coupons")
}

// to show oupon code
const couponCode = (index)=>{
  isClicked.value[index] = !isClicked.value[index]
}

</script>

<style scoped>
.right {
  height: 40px;
  width: 40px;
  background: #fff;
  left: -40px;
  top: 60px;
  border-radius: 50%;
}

.left {
  height: 40px;
  width: 40px;
  background: #fff;
  right: -40px;
  top: 60px;
  border-radius: 50%;
}

.line {
  top: 76px;
  /* background-color: #fff; */
  height: 2px;
  width: 100%;
  border-top: 2px dotted #fff;
}
.coupon-name {
  font-size: 1rem;
  text-transform: capitalize;
}
.text-cp{
  text-transform: capitalize;
}
</style>
