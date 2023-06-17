<template>
    <div class="pt-5">
        <div class="pt-5 image">
            <div class="row mx-auto px-5">
                <div class="col-lg-6 col-md-6 col-sm-12 px-3">
                    <h3 class="title t-pri">
                        Coupon Redemption Site
                    </h3>
                    <div class="input-form d-flex flex-column">
                        <label for="rewards">Redeem Your Coupon:</label>
                        <input type="text" v-model="couponCode" class="w-100 py-2 px-3 input-feild border" id="rewards">
                    </div>
                    <div class="success-redemption">
                        <p class="text-dark fs-5" v-if="isredeemError">
                           Please check you coupon code or expiry date !!
                        </p>
                        <p class="text-success" v-if="successRedem">
                            Successfully redeemed the coupon code.
                        </p>
                    </div>
                    <div class="button text-end py-3">
                        <button class="btn bg-light t-pri login" @click="redeemCoupon">Redeem</button>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="titl">
                        <h3 class="t-pri mx-3">
                            Important Notice:
                        </h3>
                        <ul>
                            <li>Each coupon is valid for a single use only. Once redeemed, the coupon becomes invalid and cannot be used again.</li>
                            <li>Please ensure to redeem your coupon before the specified expiry date. Expired coupons will not be accepted for redemption.</li>
                            <li>Certain coupons may have specific conditions or restrictions for redemption. Please carefully review the terms and conditions associated with the coupon to ensure compliance during redemption.</li>
                            <li>Coupons may be valid for redemption only at specific locations or outlets. Kindly check the coupon details for the list of eligible redemption locations to avoid any inconvenience.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useCouponStore } from '../../store/couponStore';

// variables
const couponStore = useCouponStore()
const couponCode = ref("")
const isredeemError = ref(false)
const successRedem = ref(false)
onMounted(()=>{
    couponStore.getAllCoupon()
})

// function to redeem coupon 
const redeemCoupon = ()=>{
    const matching = couponStore.coupon.find(coupon => coupon.code === couponCode.value)
    const id = matching._id
    couponStore.redeemCoupon(id)
    if(couponStore.redeemError == true){
        isredeemError.value = true
        setTimeout(()=>{
            isredeemError.value = false
        },1000)
    }else{
        successRedem.value = true
        setTimeout(()=>{
            successRedem.value = false
        },1000)

    }

}

</script>
<style scoped>
.image{
    background: url("../../assets/img/redeem.png") no-repeat center;
    background-size: cover;
    height: 100vh;
    overflow: hidden;
    width: 100%;
    position: fixed;
    top: 50px;
    left: 0;
}

@media (max-width: 768px) {
  .image {
    background: none;
  }
}

</style>