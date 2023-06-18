<template>
  <section class="vh-100" style="background: #f1f1f1 !important;">
    <div class="pt-2 h-100">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div>
          <div class="d-flex justify-content-center">
            <div>
              <div class="card p-4 px-5 text-black">
                <form @submit.prevent class="position-relative">
                  <h5
                    class="fw-bolder t-pri mb-3 pb-3"
                    style="letter-spacing: 1px;"
                  >Log in to your account.</h5>

                  <div class="mb-4">
                    <label class="form-label" for="form2Example17">Username:</label>
                    <input
                      type="text"
                      id="form2Example17"
                      class="form-control form-control-lg"
                      v-model="username"
                    />
                  </div>

                  <div class="mb-4">
                    <label class="form-label" for="form2Example27">Password:</label>
                    <input
                      type="password"
                      id="form2Example27"
                      class="form-control form-control-lg"
                      v-model="password"
                    />
                  </div>

                  <div class="pt-1 mb-2 w-100">
                    <button
                      class="bg-pri py-2 w-100 text-light border-0"
                      @click="userLogin"
                    >Login</button>
                  </div>
                  <div class="row py-2">
                    <div class="d-flex flex-row gap-2 py-2">
                      <p class="pb-lg-2 m-small text-muted" >Don't have an account?</p>
                      <router-link
                        to="/register"
                        class="m-small t-primary"
                      >Register here</router-link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 <script setup>
//imports
import { onMounted, ref } from "vue";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";

//variables
const username = ref("");
const password = ref("");
const userStore = useAuthStore();
const router = useRouter()

//methods
async function userLogin() {
  await userStore.login(username.value,password.value);
  router.push("/dashboard")
  
}

// route to ashboard if access token is availble
onMounted(()=>{
  const data = JSON.parse(localStorage.getItem("access_token"))
  if(data){
    router.push("/dashboard")
  }

})


</script>
