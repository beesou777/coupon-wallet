<template>
  <main>
    <div class="container p-5">
      <div class="cards p-lg-4 p-2">
        <p class="m-small">Create Coupon</p>
        <div class="row">
          <div class="col-md-6">
            <label class="py-2 text-muted small">
              Coupon code:
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control form-input py-2"
              placeholder="eg:EONVI9K"
              v-model="code"
            />
          </div>

          <div class="col-md-6">
            <label class="py-2 text-muted small">Coupon For:</label>
            <input
              type="text"
              class="form-control form-input py-2"
              placeholder="eg:product,sports etc"
              v-model="couponName"
            />
          </div>
        </div>
      </div>

      <!-- coupon detail form -->
      <div class="cards p-lg-4 p-2 my-2 my-lg-4">
        <p class="m-small">Coupon details</p>
        <div class="row">
          <div class="col-md-6">
            <label class="py-2 text-muted small">
              Discount percent:
              <span class="text-danger">*</span>
            </label>
            <input
              type="number"
              class="form-control form-input py-2"
              placeholder="eg:13"
              v-model="discount"
              @focus="isDiscount = true"
              @blur="isDiscount = false"
              max="100"
            />
            <div v-if="discount > 100 && !isDiscount" class="py-2">
              <p class="small text-danger">Discount percent cannot exceed 100</p>
            </div>
            <div v-if="discount < 0 " class="py-2">
              <p class="small text-danger">Discount percent cannot be less than 0</p>
            </div>
          </div>

          <div class="col-md-6">
            <label class="py-2 text-muted small">
              Enter location:
              <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control form-input py-2"
              placeholder="eg:kathmandu"
              v-model="place"
              @focus="isFocused = true"
              @blur="isFocused = false"
            />
          </div>
        </div>

        <div class="row py-3">
          <div class="col-md-6">
            <div class="position-relative">
              <label class="py-2 text-muted small">
                Select Category:
                <span class="text-danger">*</span>
              </label>
              <select class="form-control form-input" v-model="category">
                <option v-for="(data,index) in cardCategories" :key="index">{{ data.categories }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- coupon validity -->
      <div class="cards px-lg-5 p-2 py-lg-4 my-lg-4 my-2 position-relative">
        <div class="title">
          <p class="m-small">Create Validation</p>
        </div>
        <div>
          <div class="row">
            <div class="col-md-6">
              <label class="py-2 text-muted small">
                From
                <span class="text-danger">*</span>
              </label>
              <input type="date" class="form-control form-input py-2" v-model="creationDate" />
            </div>

            <div class="col-md-6">
              <label class="py-2 text-muted small">
                To
                <span class="text-danger">*</span>
              </label>
              <input
                type="date"
                class="form-control form-input py-2"
                v-model="expirationDate"
                @focus="isFocused = true"
                @blur="isFocused = false"
              />
              <!-- error message -->
              <div
                v-if="expirationDate <= creationDate && !isFocused && expirationDate"
                class="my-2"
              >
                <p
                  class="text-danger small"
                >expirary date should be atleast 1 day and cannot be less than created date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- submit button -->
      <div class="py-3 text-end">
        <button class="btn btn-primary py-2 px-4" @click="createCoupon">Create a coupon</button>
      </div>
    </div>
  </main>
</template>
  
  <script setup>
// imports
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useCouponStore } from "../../../store/couponStore";

// variables
const isFocused = ref(false);
const isDiscount = ref(false);
const router = useRouter();
const couponStore = useCouponStore()

// input variables
const code = ref("");
const category = ref("")
const couponName = ref("");
const discount = ref();
const place = ref("")
const redeemable = ref(true)
// to show today date
const today = new Date();
const expirationDate = ref(
  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)
    .toISOString()
    .substr(0, 10)
);
const creationDate = ref(new Date().toISOString().substr(0, 10));

// to show current time
const now = new Date();
const time = now.toISOString().substr(11, 5);
now.setHours(now.getHours() + 2);
const time2 = now.toISOString().substr(11, 5);

// some categories
const cardCategories = ref([
  { categories: "Fashion" },
  { categories: "Electronic" },
  { categories: "Travel" },
  { categories: "Food" },
  { categories: "Sport" },
  { categories: "Movies" }
]);

// function to add coupon
const createCoupon = ()=>{
   if(code.value === "" || couponName.value === "" || discount.value == ""){
    alert("all feild are required")

   }else{
    const data = {
        code: code.value.toUpperCase(),
        category : category.value,
        couponName:couponName.value,
        discount:discount.value,
        expirationDate:expirationDate.value,
        creationDate:creationDate.value,
        place:place.value,
        redeemable:true
    }
    couponStore.createCoupon(code.value,category.value,couponName.value,discount.value,place.value,expirationDate.value,creationDate.value,redeemable.value)

    // ckear the feild and route to coupons
    couponName.value = ""
    code.value = ""
    category.value = ""
    discount.value = ""
    place.value = ""

    router.push("/dashboard/coupons")
   }

}
</script>
  
  <style scoped>
/* input styling */
.form-input {
  height: 4rem;
  border: 3px solid #f1f1f1 !important;
  border-radius: 0.7rem;
  padding: 0.5rem 1rem !important;
  font-size: 1.2rem !important;
}
.form-input:focus:hover,
.form-input:focus {
  border: 3px solid #084e88 !important;
}
.form-input:hover {
  border: 3px solid #ccc !important;
}
input::placeholder {
  font-size: 1rem;
}
</style>