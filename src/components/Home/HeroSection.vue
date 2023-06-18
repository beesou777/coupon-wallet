<template>
    <div class="container">
      <div class="row" style="height:auto;">
        <div class="col-lg-7 col-md-6 col-sm-12 padding">
          <div class="">
            <div class="title">
              <h1 class="t-pri fw-bolder line-sp">Coupons</h1>
            </div>
            <div class="desc">
              <h4 class="line-sp"> The source <br>
                of all <span class="t-pri fw-semi-bold">Coupons and Codes</span></h4>
            </div>
            <div class="feature">
              <h4 class="text-muted text-uppercase line-sp">just find and get your desire <span class="t-pri fw-semi-bold">coupons code</span></h4>
            </div>
            <div class="find d-flex gap-2 align-items-center">
              <router-link to="/coupons" class="fs-4 text-dark">Find Your desired coupons</router-link>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12 pt-0 pt-lg-5 pt-md-5 mt-md-5 mt-lg-5 mt-0" style="padding-top:7rem">
          <div class="img">
            <img src="../../assets/img/coupon.avif" alt="coupons image" style="width:100%">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .img {
    animation: floatingAnimation 3s infinite alternate;
  }
  .padding{
    padding-top:20vh;
  }
  
  @media (max-width: 768px) {
  .padding {
    padding-top: 1vh;
  }
}
  @keyframes floatingAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
  </style>
  