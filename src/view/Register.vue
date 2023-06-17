<template>
  <section class="vh-100" style="background: #f1f1f1 !important;overflow:hidden">
    <div class="container pt-2 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div>
          <div style="border-radius: 1rem;">
            <div class="d-flex justify-content-center">
              <div class="align-items-center">
                <div class="card p-4 px-lg-5 text-black">
                  <form @submit.prevent class="position-relative">
                    <h5 class="fw-bolder mb-3 pb-3 t-pri" style="letter-spacing: 1px;">Create an account</h5>

                    <!-- user first and last name -->

                    <div>
                      <div>
                        <label class="form-label" for="full name">Full Name:</label>
                        <input
                          type="text"
                          id="full name"
                          class="form-control form-control-lg"
                          v-model="name"
                          placeholder="full name"
                        />
                      </div>
                    </div>

                    <!-- user email and email -->
                    <div class="row pt-3">
                      <div class="col-md-6">
                        <div class="mb-4">
                          <label class="form-label" for="email">email:</label>
                          <input
                            type="email"
                            id="email"
                            class="form-control form-control-lg"
                            v-model="email"
                            placeholder="enter your email"
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="mb-4">
                          <label class="form-label" for="username">username:</label>
                          <input
                            type="text"
                            id="username"
                            class="form-control form-control-lg"
                            v-model="username"
                            placeholder="username"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- user password -->
                      <div>
                        <div class="mb-4">
                          <label class="form-label" for="password">Password</label>
                          <input
                            type="password"
                            id="password"
                            class="form-control form-control-lg"
                            v-model="password"
                            placeholder="Create your password"
                          />
                        </div>
                      </div>

                    <div class="pt-1 mb-2">
                      <button
                        class="button btn-lg btn-block bg-pri text-light border-0 py-2 fw-bolder"
                        @click="userRegister"
                      >Register</button>
                    </div>

                    <div class="d-flex flex-row gap-2 mt-3">
                      <p class="m-small text-muted">Already have an account?</p>
                      <router-link to="/login" class="m-small t-pri">Login</router-link>
                    </div>
                  </form>
                </div>
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
import {useAuthStore} from "../store/authStore"
import { useRouter } from "vue-router";

//variables
const username = ref("");
const password = ref("");
const name = ref("");
const email = ref("");
const userStore = useAuthStore();
const router = useRouter()
// methods to register user
async function userRegister() {
    const data = {
        username:username.value,
        password:password.value,
        name:name.value,
        email:email.value
    }
    userStore.register(data)

}

onMounted(()=>{
  const data = JSON.parse(localStorage.getItem("access_token"))
  if(data){
    router.push("/dashboard")
  }
})

</script>