<template>
    <div class="bg-dark p-3" style="overflow:hidden">
      <div class="row px-3">
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="brand text-light">
            <h2>Coupon Wallet</h2>
          </div>
          <div class="detils text-light">
            <p>A desired coupon wallet</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="title text-light">
            <h4>Short links</h4>
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/coupons">Coupon</router-link>
              </li>
              <li>
                <router-link to="/redeem">Redeem</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/dashboard">Dashboard</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="contact-info text-light">
            <h4>Contact Information</h4>
            <ul>
              <li>Email: shahbishwa21@gmail.com</li>
              <li>Phone: +1 123-456-7890</li>
              <li>Address: Lalitpur,Godamchaur-5</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="social-media text-light">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100089079516208" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/shah.bishwa77" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  a {
    color: #fff;
  }
  
  .social-media ul {
    display: flex;
    gap: 10px;
  }
  
  .social-media ul li {
    list-style: none;
  }
  
  .social-media ul li a {
    font-size: 20px;
  }
  </style>
  